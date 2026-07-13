import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const siteUrl = 'https://lovame-official.com';
const updated = '2026-07-12';

const articles = [
  {old: 'article_step1.html', slug: 'goods-exchange-five-steps.html', date: '2026-03-16', title: 'もう怖くない！グッズ交換の探し方から完了までの全5ステップ', description: '初心者向けに、グッズ交換の探し方、声かけ、DM、梱包・発送、受け取り連絡までの流れを5ステップでわかりやすく解説します。', category: '基礎知識', faq: [['グッズ交換は何から始めればよいですか？', 'まず取引専用アカウントを整え、交換したい品物と条件を明確にしてから相手を探します。'], ['取引が完了するのはいつですか？', '双方が品物を受け取り、受け取り連絡と個人情報を含むDMの削除を済ませた時点が目安です。']]},
  {old: 'article_step2.html', slug: 'trade-account-guide.html', date: '2026-03-18', title: 'お取引専用アカウントが必要な理由と作り方', description: '推し活の趣味アカウントと取引専用アカウントを分けるメリット、信頼されるプロフィール、プライバシーを守る設定を解説します。', category: '基礎知識', faq: [['趣味アカウントのまま取引できますか？', '可能ですが、個人情報保護や募集情報の見やすさのため、取引専用アカウントを分けると安心です。'], ['鍵アカウントでも募集できますか？', '検索や拡散で見つけてもらいにくいため、募集時は公開範囲を確認してください。']]},
  {old: 'article_step3.html', slug: 'exchange-transfer-purchase.html', date: '2026-03-20', title: 'グッズ取引の交換・譲渡・買取の違い', description: 'グッズ取引の基本である交換・譲渡・買取の違いと、金銭のやり取りがある場合の注意点を初心者向けに整理します。', category: '基礎知識', faq: [['交換と譲渡の違いは何ですか？', '交換は品物同士を取り替え、譲渡は代金を受け取って品物を渡す取引です。'], ['買取で気をつけることは？', '価格、送料、支払方法、発送時期を事前に文章で確認し、記録を残してください。']]},
  {old: 'article_step4.html', slug: 'exchange-post-template.html', date: '2026-03-22', title: '交換募集ポストの書き方とコピペ用テンプレート', description: 'Xで見つけてもらいやすく条件違いを防ぐ交換・譲渡・買取募集ポストの書き方を、すぐ使える例文とともに解説します。', category: '実践テクニック', faq: [['募集ポストに最低限必要な情報は？', '作品名、品物、求める品物、取引方法、場所や発送条件を明記します。'], ['画像には何を添えるべきですか？', '現物写真に自分のIDと撮影日を書いた紙を添えると、所持確認と信頼につながります。']]},
  {old: 'article_step5.html', slug: 'trade-profile-guide.html', date: '2026-03-24', title: '信頼されるお取引アカウントのプロフィール作成術', description: '安心して声をかけてもらうために、取引プロフィールへ書くべき梱包・発送・連絡事項と、コピペ可能な例文を紹介します。', category: '実践テクニック', faq: [['プロフィールには何を書けばよいですか？', '成人区分、連絡可能時間、梱包・発送方法、支払方法、注意事項を簡潔にまとめます。'], ['注意事項は多いほど安心ですか？', '必要事項に絞り、相手に一方的な負担を求める内容になっていないか見直しましょう。']]},
  {old: 'article_step6.html', slug: 'dm-message-template.html', date: '2026-03-26', title: 'グッズ取引DMの流れ・マナーと例文', description: 'グッズ交換のDMで確認する品物、梱包、発送、住所交換、完了連絡の順番と、トラブルを防ぐコピペ用テンプレートを紹介します。', category: '実践テクニック', faq: [['DMで最初に確認することは？', '交換品の写真、個数、梱包方法、発送方法、発送予定日を双方で確認します。'], ['住所はいつ送ればよいですか？', '取引条件に合意し、相手と品物を確認してから、必要な範囲だけ共有します。']]},
  {old: 'article_step7.html', slug: 'goods-packing-guide.html', date: '2026-03-28', title: '100均で揃うグッズ別の正しい梱包方法', description: '缶バッジ、アクスタ、トレカや紙類を傷・折れ・水濡れから守る梱包方法を、100均で揃う材料とNG例つきで解説します。', category: '実践テクニック', faq: [['梱包材は100均のもので大丈夫ですか？', '強度とサイズが品物に合い、清潔なものであれば活用できます。'], ['紙類はどう補強しますか？', 'スリーブと防水袋に入れ、硬質ケースまたは段ボール等で両面を補強します。']]},
  {old: 'article_step8.html', slug: 'after-shipping-etiquette.html', date: '2026-03-30', title: '発送後の連絡・受け取り報告・DM削除のマナー', description: 'グッズ交換を最後まで気持ちよく終えるための発送連絡、受け取り報告、個人情報を含むDM削除のタイミングと例文を解説します。', category: '実践テクニック', faq: [['発送後は何を連絡しますか？', '発送日、発送方法、必要に応じて追跡番号を伝えます。'], ['DMはいつ削除しますか？', '双方の受け取り確認後に、個人情報を含むDMを削除する旨を伝えてから削除します。']]},
  {old: 'article_step9.html', slug: 'trading-mistakes.html', date: '2026-04-01', title: 'グッズ取引で避けたいNG行為と初心者のミス', description: '条件違いの声かけ、初期傷、連絡遅延、梱包不足など、グッズ取引で起きやすいミスとトラブルを防ぐ対策を解説します。', category: 'トラブル対策', faq: [['品物に初期傷を見つけたら？', '隠さず写真で状態を共有し、相手が納得したうえで取引を続けるか確認します。'], ['返信が遅れるときは？', '遅れる理由と返信できる目安を短く連絡し、相手を不安にさせないことが大切です。']]},
  {old: 'article_step10.html', slug: 'anonymous-shipping-post-office.html', date: '2026-04-03', title: '匿名配送と郵便局留めを安全に使う方法', description: '住所を相手へ知らせずにグッズを送る匿名配送と、郵便局で受け取る局留めの違い、手順、注意点、依頼時の例文を解説します。', category: 'トラブル対策', faq: [['匿名配送はどのサービスで使えますか？', 'フリマサービス等の対応配送を、必ずサービス内の手順に沿って利用します。'], ['郵便局留めなら住所は不要ですか？', '受取人の住所記載が必要な場合があります。日本郵便の最新ルールを確認してください。']]},
];

const pages = {
  'index.html': {title: '推し活グッズ交換の始め方ガイド | LovaMe（ラバミー）', description: 'LovaMe（ラバミー）は、初心者向けにグッズ交換の探し方、声かけ、DM、梱包、発送、取引用語をわかりやすく解説する推し活ガイドです。', url: '/'},
  'exchange.html': {title: '初心者向けグッズ交換のやり方・記事一覧 | LovaMe', description: '初めてのグッズ交換でも安心。相手の探し方、声かけ、DMマナー、梱包、発送、受け取り連絡までを順番に学べる記事一覧です。', url: '/exchange.html'},
  'glossary.html': {title: '推し活・グッズ取引用語集 | LovaMe', description: '同担拒否、リアコ、箱推しなどの推し活用語と、交換・譲渡・買取で使う取引用語を初心者にもわかりやすく解説します。', url: '/glossary.html'},
  'about.html': {title: '運営者・編集方針 | LovaMe', description: '推し活とグッズ交換の初心者を支えるLovaMeの運営目的、運営者Lovaria、情報の確認方針、お問い合わせ先について紹介します。', url: '/about.html'},
  'privacy.html': {title: 'プライバシーポリシー・外部送信について | LovaMe', description: 'LovaMeの個人情報、Cookie、Google Analyticsによる外部送信、同意の撤回方法、広告、免責事項について説明します。', url: '/privacy.html'},
  'terms.html': {title: '利用規約 | LovaMe', description: '推し活・グッズ交換ガイドLovaMeの利用条件、禁止事項、免責事項、著作権、規約変更について定めた利用規約です。', url: '/terms.html'},
};

const hreflang = `
    <link rel="alternate" hreflang="ja" href="${siteUrl}/">
    <link rel="alternate" hreflang="en" href="${siteUrl}/en/">
    <link rel="alternate" hreflang="ko" href="${siteUrl}/ko/">
    <link rel="alternate" hreflang="zh-Hant" href="${siteUrl}/zh-tw/">
    <link rel="alternate" hreflang="zh-Hans" href="${siteUrl}/zh-cn/">
    <link rel="alternate" hreflang="x-default" href="${siteUrl}/">`;

function seoBlock(meta, type = 'website', extra = {}) {
  const canonical = `${siteUrl}${meta.url}`;
  const breadcrumb = {'@type': 'BreadcrumbList', itemListElement: [
    {'@type': 'ListItem', position: 1, name: 'HOME', item: `${siteUrl}/`},
    ...(meta.url.startsWith('/articles/') ? [{'@type': 'ListItem', position: 2, name: 'グッズ交換ガイド', item: `${siteUrl}/articles/`}, {'@type': 'ListItem', position: 3, name: meta.title.replace(/ \| LovaMe.*$/, ''), item: canonical}] : [{'@type': 'ListItem', position: 2, name: meta.title.replace(/ \| LovaMe.*$/, ''), item: canonical}])
  ]};
  const jsonLd = type === 'article' ? {
    '@context': 'https://schema.org', '@graph': [{
      '@type': 'Article', headline: meta.title.replace(/ \| LovaMe.*$/, ''), description: meta.description,
      image: `${siteUrl}/assets/images/og-lovame.jpg`, datePublished: extra.date, dateModified: updated,
      author: {'@type': 'Person', name: 'Lovaria'}, publisher: {'@type': 'Organization', name: 'LovaMe', url: siteUrl}, mainEntityOfPage: canonical
    }, breadcrumb, {'@type': 'FAQPage', mainEntity: (extra.faq || []).map(([q, a]) => ({'@type': 'Question', name: q, acceptedAnswer: {'@type': 'Answer', text: a}}))}]
  } : meta.url === '/' ? {
    '@context': 'https://schema.org', '@graph': [
      {'@type': 'WebSite', '@id': `${siteUrl}/#website`, url: `${siteUrl}/`, name: 'LovaMe', inLanguage: 'ja', potentialAction: {'@type': 'SearchAction', target: `${siteUrl}/?q={search_term_string}`, 'query-input': 'required name=search_term_string'}},
      {'@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'LovaMe', url: `${siteUrl}/`, logo: `${siteUrl}/assets/images/profile-icon.webp`, sameAs: ['https://www.instagram.com/lovame_official/', 'https://x.com/lovame_official']}
    ]
  } : {'@context': 'https://schema.org', '@graph': [
    {'@type': 'WebPage', name: meta.title, description: meta.description, url: canonical, isPartOf: {'@type': 'WebSite', name: 'LovaMe', url: `${siteUrl}/`}},
    breadcrumb,
    ...(meta.url === '/about.html' ? [{'@type': 'Person', name: 'Lovaria', url: canonical, jobTitle: 'LovaMe 運営・執筆・編集'}] : [])
  ]};
  return `
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}">
    <meta property="og:type" content="${type}">
    <meta property="og:site_name" content="LovaMe">
    <meta property="og:title" content="${meta.title}">
    <meta property="og:description" content="${meta.description}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${siteUrl}/assets/images/og-lovame.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="canonical" href="${canonical}">
    <link rel="icon" href="${extra.prefix || ''}assets/images/favicon-32.png" sizes="32x32" type="image/png">
    <link rel="apple-touch-icon" href="${extra.prefix || ''}assets/images/apple-touch-icon.png">${meta.url === '/' ? hreflang : ''}
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
}

function cleanHead(html) {
  html = html.replace(/^\s*<title>.*?<\/title>\s*$/gm, '');
  html = html.replace(/^\s*<meta (?:property="og:[^"]+"|name="(?:description|twitter:[^"]+)")[^>]*>\s*$/gm, '');
  html = html.replace(/^\s*<link rel="(?:canonical|icon|apple-touch-icon)"[^>]*>\s*$/gm, '');
  html = html.replace(/^\s*<link rel="alternate"[^>]*>\s*$/gm, '');
  html = html.replace(/^\s*<script type="application\/ld\+json">.*?<\/script>\s*$/gm, '');
  html = html.replace(/\s*<!-- Google Analytics \(GA4\) -->[\s\S]*?gtag\('config', 'G-H0NQCV67K9'\);\s*<\/script>/g, '');
  html = html.replace(/\s*<!-- Google AdSense[\s\S]*?-->\s*/g, '\n');
  html = html.replace(/\s*<!--[\s\S]*?pagead2\.googlesyndication\.com[\s\S]*?-->\s*/g, '\n');
  return html;
}

function sharedFixes(html, prefix = '') {
  html = html.replace(/\s*<noscript><p class="noscript-message">[\s\S]*?<\/noscript>/, '');
  html = html.replace(/\s*<button type="button" class="cookie-settings-link" data-cookie-settings>[\s\S]*?<\/button>/g, '');
  html = html.replace(/<picture><source srcset="(?:\.\.\/)?assets\/images\/profile-icon\.webp"[\s\S]*?<\/picture>/g, `<picture><source srcset="${prefix}assets/images/profile-icon.webp" type="image/webp"><img src="${prefix}my-icon2.jpg" width="200" height="200" alt="LovaMe ロゴ" decoding="async"></picture>`);
  html = html.replace(/<img src="(?:\.\.\/)?my-icon\.png" alt="Profile Icon">/g, `<picture><source srcset="${prefix}assets/images/profile-icon.webp" type="image/webp"><img src="${prefix}my-icon2.jpg" width="200" height="200" alt="LovaMe ロゴ" decoding="async"></picture>`);
  html = html.replace(/<script src="(?:\.\.\/)?script\.js"><\/script>/g, `<script src="${prefix}script.js" defer></script>`);
  html = html.replace(/onchange="setLanguage\(this\.value(?:, true)?\)"/g, 'onchange="setLanguage(this.value, true)"');
  html = html.replace(/(<div class="footer-links">[\s\S]*?<\/div>)/, `$1\n            <button type="button" class="cookie-settings-link" data-cookie-settings>Cookie設定</button>`);
  html = html.replace(/<body>/, '<body>\n    <noscript><p class="noscript-message">このサイトの検索・言語切替・アクセス解析設定にはJavaScriptを使用します。記事本文はJavaScriptなしでも閲覧できます。</p></noscript>');
  return html;
}

for (const [file, meta] of Object.entries(pages)) {
  const full = path.join(root, file);
  let html = cleanHead(fs.readFileSync(full, 'utf8'));
  html = html.replace('</head>', `${seoBlock(meta)}\n</head>`);
  html = sharedFixes(html);
  if (file === 'glossary.html') {
    html = html.replace(/\s*<script src="glossary\.js" defer><\/script>/g, '');
    html = html.replace('<script src="script.js" defer></script>', '<script src="script.js" defer></script>\n    <script src="glossary.js" defer></script>');
  }
  if (file === 'exchange.html') {
    for (const article of articles) html = html.replaceAll(`公開記事/${article.old}`, `articles/${article.slug}`);
  }
  fs.writeFileSync(full, html);
}

const home = path.join(root, 'index.html');
let homeHtml = fs.readFileSync(home, 'utf8');
const cards = articles.map((a, i) => `<article class="article-card"><p class="article-card-meta">${a.category} · ${a.date.replaceAll('-', '.')}</p><h3><a href="articles/${a.slug}">第${i + 1}回 ${a.title}</a></h3><p>${a.description}</p></article>`).join('\n');
homeHtml = homeHtml.replace(/<section class="news">[\s\S]*?<\/section>/, `<section class="news"><h2>新着・グッズ交換ガイド</h2><p><a href="articles/">全10記事をカテゴリ別に見る →</a></p><div class="article-grid">${cards.slice(0, cards.indexOf('</article>', cards.indexOf('</article>') + 10) + 10) || cards}</div></section>`);
fs.writeFileSync(home, homeHtml);

for (let i = 0; i < articles.length; i++) {
  const article = articles[i];
  const full = path.join(root, 'articles', article.slug);
  let html = cleanHead(fs.readFileSync(full, 'utf8'));
  const meta = {title: `${article.title} | LovaMe`, description: article.description, url: `/articles/${article.slug}`};
  html = html.replace('</head>', `${seoBlock(meta, 'article', {date: article.date, prefix: '../', faq: article.faq})}\n</head>`);
  html = sharedFixes(html, '../');
  html = html.replaceAll('article_step3_id_photo.png', '../assets/images/article-step3-id-photo.webp');
  html = html.replaceAll('article_step4_dm_etiquette.png', '../assets/images/article-step4-dm-etiquette.webp');
  html = html.replaceAll('normal_shipping.png', '../assets/images/normal-shipping.webp');
  html = html.replaceAll('pre_shipping.png', '../assets/images/pre-shipping.webp');
  html = html.replaceAll('goods_example.jpg', '../assets/images/goods-example.webp');
  html = html.replaceAll('search_example.jpg', '../assets/images/search-example.webp');
  const imageFallbacks = [
    ['article-step3-id-photo', 'png', 640, 640], ['article-step4-dm-etiquette', 'png', 640, 640],
    ['normal-shipping', 'png', 1000, 839], ['pre-shipping', 'png', 1000, 800],
    ['goods-example', 'jpg', 1000, 750], ['search-example', 'jpg', 1024, 255]
  ];
  for (const [name, ext, width, height] of imageFallbacks) {
    const pattern = new RegExp(`<img src="\\.\\.\\/assets\\/images\\/${name}\\.webp"([^>]*)>`,'g');
    html = html.replace(pattern, `<picture><source srcset="../assets/images/${name}.webp" type="image/webp"><img src="../assets/images/${name}.${ext}" width="${width}" height="${height}"$1></picture>`);
  }
  html = html.replace(/<nav class="article-toc"[\s\S]*?<\/nav>/, '');
  html = html.replace(/<h3 id="section-\d+">/g, '<h3>');
  html = html.replace(/<!-- article-extras:start -->[\s\S]*?<!-- article-extras:end -->/, '');
  html = html.replace(/<img([^>]+)>/g, (match, attrs) => /width=|loading=/.test(attrs) ? match : `<img${attrs} loading="lazy" decoding="async">`);
  html = html.replace(/(?: loading="lazy" decoding="async"){2,}/g, ' loading="lazy" decoding="async"');
  const headings = [...html.matchAll(/<h3>([\s\S]*?)<\/h3>/g)].map((m, n) => ({raw: m[0], text: m[1].replace(/<[^>]+>/g, ''), id: `section-${n + 1}`}));
  for (const h of headings) html = html.replace(h.raw, `<h3 id="${h.id}">${h.raw.slice(4, -5)}</h3>`);
  const toc = `<nav class="article-toc" aria-label="目次"><h2>目次</h2><ol>${headings.map(h => `<li><a href="#${h.id}">${h.text}</a></li>`).join('')}</ol></nav>`;
  html = html.replace('<div class="page-content">', `<div class="page-content">${toc}`);
  const faq = `<section class="article-faq"><h2>よくある質問</h2>${article.faq.map(([q,a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</section>`;
  const prev = i ? `<a href="${articles[i - 1].slug}">← 第${i}回</a>` : '<span></span>';
  const next = i < articles.length - 1 ? `<a href="${articles[i + 1].slug}">第${i + 2}回 →</a>` : '<span></span>';
  const related = articles.filter(a => a.category === article.category && a.slug !== article.slug).slice(0, 2).map(a => `<li><a href="${a.slug}">${a.title}</a></li>`).join('');
  const end = `<!-- article-extras:start --><section class="article-summary"><h2>まとめ</h2><p>${article.description}</p></section>${faq}<aside class="related-articles"><h2>関連記事</h2><ul>${related}</ul></aside><nav class="article-pagination" aria-label="前後の記事">${prev}${next}</nav><p class="article-byline">執筆・編集: Lovaria（LovaMe運営）／公開: <time datetime="${article.date}">${article.date.replaceAll('-', '.')}</time>／更新: <time datetime="${updated}">${updated.replaceAll('-', '.')}</time></p><!-- article-extras:end -->`;
  html = html.replace(/<\/div>\s*<div class="article-navigation">[\s\S]*?<\/div>/, `${end}</div>`);
  html = html.replace(/<a href="\.\.\/exchange\.html" class="back-button"/, '<a href="../articles/" class="back-button"');
  fs.writeFileSync(full, html);
}

const categoryDefs = {
  '基礎知識': {slug:'basics.html', description:'グッズ交換を初めて行う人向けに、取引全体の流れ、専用アカウント、交換・譲渡・買取の違いを解説します。'},
  '実践テクニック': {slug:'practical-tips.html', description:'募集ポスト、プロフィール、DM、梱包、発送後の連絡など、実際のグッズ取引ですぐ使える方法を解説します。'},
  'トラブル対策': {slug:'safety.html', description:'グッズ取引で起きやすいミスを防ぎ、匿名配送や郵便局留めを安全に利用するための注意点を解説します。'}
};
const categories = Object.keys(categoryDefs);
const archiveSections = categories.map(category => `<section><h2><a href="categories/${categoryDefs[category].slug}">${category}</a></h2><div class="article-grid">${articles.filter(a => a.category === category).map(a => `<article class="article-card"><p class="article-card-meta">${a.date.replaceAll('-', '.')}</p><h3><a href="${a.slug}">${a.title}</a></h3><p>${a.description}</p></article>`).join('')}</div></section>`).join('\n');
const archiveMeta = {title: 'グッズ交換ガイド全記事一覧 | LovaMe', description: 'グッズ交換の基礎知識、募集・DM・梱包の実践テクニック、トラブル対策をカテゴリ別にまとめた全10記事の一覧です。', url: '/articles/'};
fs.writeFileSync(path.join(root, 'articles', 'index.html'), `<!doctype html><html lang="ja"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">${seoBlock(archiveMeta, 'website', {prefix: '../'})}<link rel="stylesheet" href="../style.css"></head><body><noscript><p class="noscript-message">記事一覧はJavaScriptなしでも閲覧できます。</p></noscript><div class="container"><header class="simple-header"><a href="../">LovaMe</a></header><main><nav class="breadcrumbs"><ul><li><a href="../">HOME</a></li><li>全記事一覧</li></ul></nav><div class="content-area"><h1>グッズ交換ガイド全記事一覧</h1><p>初めてのお取引からトラブル対策まで、順番にもカテゴリ別にも読めます。</p>${archiveSections}</div></main><footer><div class="footer-links"><a href="../about.html">運営者情報</a><a href="../privacy.html">プライバシーポリシー</a><a href="../terms.html">利用規約</a></div><button type="button" class="cookie-settings-link" data-cookie-settings>Cookie設定</button><p class="copyright">&copy; 2026 LovaMe.</p></footer></div><script src="../script.js" defer></script></body></html>`);

fs.mkdirSync(path.join(root, 'articles', 'categories'), {recursive:true});
for (const [category, definition] of Object.entries(categoryDefs)) {
  const categoryArticles = articles.filter(article => article.category === category);
  const meta = {title: `${category}のグッズ交換ガイド | LovaMe`, description: definition.description, url: `/articles/categories/${definition.slug}`};
  const categoryCards = categoryArticles.map(article => `<article class="article-card"><p class="article-card-meta">${article.date.replaceAll('-', '.')}</p><h2><a href="../${article.slug}">${article.title}</a></h2><p>${article.description}</p></article>`).join('');
  fs.writeFileSync(path.join(root, 'articles', 'categories', definition.slug), `<!doctype html><html lang="ja"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">${seoBlock(meta, 'website', {prefix:'../../'})}<link rel="stylesheet" href="../../style.css"></head><body><div class="container"><header class="simple-header"><a href="../../">LovaMe</a></header><main><nav class="breadcrumbs"><ul><li><a href="../../">HOME</a></li><li><a href="../">全記事一覧</a></li><li>${category}</li></ul></nav><div class="content-area"><h1>${category}</h1><p>${definition.description}</p><div class="article-grid">${categoryCards}</div></div></main><footer><a href="../">全記事一覧へ戻る</a><button type="button" class="cookie-settings-link" data-cookie-settings>Cookie設定</button></footer></div><script src="../../script.js" defer></script></body></html>`);
}

fs.mkdirSync(path.join(root, '公開記事'), {recursive: true});
for (const a of articles) fs.writeFileSync(path.join(root, '公開記事', a.old), `<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="robots" content="noindex"><link rel="canonical" href="${siteUrl}/articles/${a.slug}"><meta http-equiv="refresh" content="0; url=../articles/${a.slug}"><title>ページを移動しました | LovaMe</title></head><body><p><a href="../articles/${a.slug}">新しいURLへ移動します</a></p></body></html>`);

const locales = {
  en: {lang:'en', label:'English', title:'A beginner’s guide to safe fan-merch trading', intro:'Learn the flow of finding a trade partner, messaging, packing, shipping, and completing a trade safely.', cta:'Read the Japanese guides', privacy:'Privacy policy'},
  ko: {lang:'ko', label:'한국어', title:'처음 시작하는 안전한 굿즈 교환 가이드', intro:'교환 상대 찾기부터 DM, 포장, 발송, 거래 완료까지의 흐름을 안내합니다.', cta:'일본어 가이드 보기', privacy:'개인정보 처리방침'},
  'zh-tw': {lang:'zh-Hant', label:'繁體中文', title:'新手也能安心使用的周邊交換指南', intro:'介紹尋找交換對象、私訊、包裝、寄送到完成交易的基本流程。', cta:'閱讀日文指南', privacy:'隱私權政策'},
  'zh-cn': {lang:'zh-Hans', label:'简体中文', title:'新手也能安心使用的周边交换指南', intro:'介绍寻找交换对象、私信、包装、寄送到完成交易的基本流程。', cta:'阅读日文指南', privacy:'隐私政策'}
};
for (const [dir, l] of Object.entries(locales)) {
  fs.mkdirSync(path.join(root, dir), {recursive:true});
  fs.writeFileSync(path.join(root, dir, 'index.html'), `<!doctype html><html lang="${l.lang}"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${l.title} | LovaMe</title><meta name="description" content="${l.intro}"><link rel="canonical" href="${siteUrl}/${dir}/">${hreflang}<meta property="og:image" content="${siteUrl}/assets/images/og-lovame.jpg"><meta name="twitter:card" content="summary_large_image"><link rel="stylesheet" href="../style.css"><link rel="icon" href="../assets/images/favicon-32.png"></head><body><div class="container localized-landing"><header class="simple-header"><a href="../">LovaMe</a><span>${l.label}</span></header><main><section class="localized-hero"><p class="eyebrow">LovaMe fan-merch trading guide</p><h1>${l.title}</h1><p>${l.intro}</p><a class="link-button" href="../articles/">${l.cta}</a></section></main><footer><a href="../privacy.html">${l.privacy}</a><p>&copy; 2026 LovaMe.</p></footer></div></body></html>`);
}

const sitemapUrls = [
  {loc:'/', mod:updated, priority:'1.0'}, ...Object.values(pages).filter(p => p.url !== '/').map(p => ({loc:p.url, mod:updated, priority:'0.6'})),
  {loc:'/articles/', mod:updated, priority:'0.9'}, ...articles.map(a => ({loc:`/articles/${a.slug}`, mod:updated, priority:'0.8'})),
  ...Object.values(categoryDefs).map(category => ({loc:`/articles/categories/${category.slug}`, mod:updated, priority:'0.7'})),
  ...Object.keys(locales).map(dir => ({loc:`/${dir}/`, mod:updated, priority:'0.5'}))
];
fs.writeFileSync(path.join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.map(u => `  <url><loc>${siteUrl}${u.loc}</loc><lastmod>${u.mod}</lastmod><changefreq>monthly</changefreq><priority>${u.priority}</priority></url>`).join('\n')}\n</urlset>\n`);

console.log(`Built ${articles.length} articles, ${Object.keys(pages).length} pages and ${Object.keys(locales).length} locale pages.`);
