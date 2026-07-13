import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const errors = [];
const skipDirs = new Set(['.git', 'node_modules', '記事下書き']);

function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes:true}).flatMap(entry => {
    if (entry.name.startsWith('.') && entry.name !== '.well-known') return [];
    if (skipDirs.has(entry.name)) return [];
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function resolveReference(file, ref) {
  const clean = decodeURIComponent(ref.split(/[?#]/)[0]);
  if (!clean) return null;
  const candidate = clean.startsWith('/') ? path.join(root, clean) : path.resolve(path.dirname(file), clean);
  if (clean.endsWith('/')) return path.join(candidate, 'index.html');
  return candidate;
}

for (const file of walk(root).filter(file => file.endsWith('.html'))) {
  const relative = path.relative(root, file);
  const html = fs.readFileSync(file, 'utf8');
  const noindex = /<meta name="robots" content="[^"]*noindex/.test(html);
  if (!noindex) {
    if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${relative}: missing title`);
    if (!/<meta name="description" content="[^"]+">/.test(html)) errors.push(`${relative}: missing description`);
    if (!/<link rel="canonical" href="https:\/\/lovame-official\.com/.test(html)) errors.push(`${relative}: missing canonical`);
  }
  if (/ca-pub-XXXXXXXX|googletagmanager\.com\/gtag/.test(html)) errors.push(`${relative}: tracking or placeholder script is embedded`);
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(match[1]); } catch (error) { errors.push(`${relative}: invalid JSON-LD (${error.message})`); }
  }
  for (const match of html.matchAll(/<img\s+([^>]+)>/g)) {
    if (!/\bwidth="\d+"/.test(match[1]) || !/\bheight="\d+"/.test(match[1])) errors.push(`${relative}: image lacks width/height`);
  }
  for (const match of html.matchAll(/(?:href|src|srcset)="([^"]+)"/g)) {
    const ref = match[1];
    if (/^(?:https?:|mailto:|data:|#|javascript:)/.test(ref)) continue;
    const target = resolveReference(file, ref);
    if (target && !fs.existsSync(target)) errors.push(`${relative}: broken reference ${ref}`);
  }
}

const ads = fs.readFileSync(path.join(root, 'ads.txt'), 'utf8');
if (/XXXX|example/i.test(ads)) errors.push('ads.txt contains a placeholder');

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
for (const match of sitemap.matchAll(/<loc>https:\/\/lovame-official\.com([^<]*)<\/loc>/g)) {
  const target = resolveReference(path.join(root, 'index.html'), match[1] || '/');
  if (!fs.existsSync(target)) errors.push(`sitemap.xml: missing target ${match[1]}`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('Site validation passed: metadata, JSON-LD, images, links, sitemap, and privacy checks.');
