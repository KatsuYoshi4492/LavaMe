import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const corePath = path.join(root, 'script.js');
const source = fs.readFileSync(corePath, 'utf8');
const startMarker = '// Glossary feature:start';
const endMarker = '// Glossary feature:end';

if (!source.includes(startMarker) || !source.includes(endMarker)) {
  if (fs.existsSync(path.join(root, 'glossary.js'))) {
    console.log('Glossary is already split.');
    process.exit(0);
  }
  throw new Error('Glossary feature markers were not found in script.js');
}

const start = source.indexOf(startMarker);
const end = source.indexOf(endMarker) + endMarker.length;
const feature = source.slice(start + startMarker.length, source.indexOf(endMarker)).trim();
const replacement = `// Glossary data and rendering live in glossary.js and load only on the glossary page.\n\ndocument.addEventListener('DOMContentLoaded', translatePage);\nwindow.addEventListener('click', (event) => {\n    const modal = document.getElementById('search-modal');\n    if (event.target === modal) closeSearch();\n});`;

fs.writeFileSync(path.join(root, 'glossary.js'), `// LovaMe glossary: page-specific data and rendering.\n${feature}\n`);
fs.writeFileSync(corePath, `${source.slice(0, start)}${replacement}${source.slice(end)}`);
console.log('Split glossary.js from script.js');
