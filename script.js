const searchIndex = [
    {
        title: "オタク用語辞典（意味・読み方）",
        url: "glossary.html",
        category: "glossary",
        keywords: "用語, 意味, 辞書, 解説, 同担拒否, 夢女子, リアコ, DD, 箱推し, 現場, サークラ, 2.5次元, 隠語, 地雷, 尊い, しんどい"
    },
    {
        title: "グッズ交換 How To（記事一覧）",
        url: "exchange.html",
        category: "guide",
        keywords: "一覧, 目次, まとめ, 初心者, やり方, 流れ, 基礎, 基本, グッズ交換"
    },
    {
        title: "【第1回】お取引の全体像",
        url: "articles/goods-exchange-five-steps.html",
        category: "article",
        keywords: "初心者, 流れ, 探し方, 梱包, 発送, 受取, 完了, 基礎知識, ステップ"
    },
    {
        title: "【第2回】なぜ「お取引専用垢」が必要なの？",
        url: "articles/trade-account-guide.html",
        category: "article",
        keywords: "Twitter, X, アカウント作成, 趣味垢, 分ける理由, メリット, 鍵垢, プロフィール"
    },
    {
        title: "【第3回】お取引の種類（交換・譲渡・買取）",
        url: "articles/exchange-transfer-purchase.html",
        category: "article",
        keywords: "交換, 譲渡, 買取, 種類, 違い, 基本, 初心者"
    },
    {
        title: "【第4回】交換募集ツイートの出し方",
        url: "articles/exchange-post-template.html",
        category: "article",
        keywords: "ツイート, 募集, テンプレート, コピペ, 出し方, X, Twitter"
    },
    {
        title: "【第5回】お取引垢のプロフィール作成術",
        url: "articles/trade-profile-guide.html",
        category: "article",
        keywords: "プロフィール, ツイフィール, リットリンク, 固定ツイート, 信頼, 安心"
    },
    {
        title: "【第6回】DMでのやり取りの流れと注意点",
        url: "articles/dm-message-template.html",
        category: "article",
        keywords: "DM, やり取り, テンプレート, マナー, 住所交換, 確定"
    },
    {
        title: "【第7回】グッズ別「梱包の正解」ガイド",
        url: "articles/goods-packing-guide.html",
        category: "article",
        keywords: "梱包, プチプチ, 厚紙補強, 水濡れ防止, 缶バッジ, アクスタ, 紙類"
    },
    {
        title: "【第8回】発送後の対応とDM削除",
        url: "articles/after-shipping-etiquette.html",
        category: "article",
        keywords: "発送, 領収書, 追跡, 受取連絡, DM削除, マナー"
    },
    {
        title: "【第9回】お取引でのNG事項とミス",
        url: "articles/trading-mistakes.html",
        category: "article",
        keywords: "NG, ミス, トラブル, 注意, 晒し, 回避, 詐欺"
    },
    {
        title: "【第10回】匿名配送と郵便局留め",
        url: "articles/anonymous-shipping-post-office.html",
        category: "article",
        keywords: "匿名配送, 郵便局留め, メルカリ便, 住所教えない, 家族にバレない"
    }
];

// i18n Data
const translations = {
    ja: {
        "header.home": "＜ HOME",
        "header.about": "運営者情報",
        "header.privacy": "プライバシーポリシー",
        "header.terms": "利用規約",
        "nav.home": "HOME",
        "nav.exchange": "グッズ交換 How to",
        "nav.glossary": "用語集",
        "nav.opinion": "意見箱",
        "nav.list": "＜ LIST",
        "concept.title": "𝐋𝐨𝐯e+𝐌𝐞＝「私を愛する」",
        "concept.text": "“オタ活”のときめきで、<br class=\"sp-only\">自分のことも好きになれる場所🎀",
        "section.news": "NEWS",
        "footer.about": "運営者情報",
        "footer.privacy": "プライバシーポリシー",
        "footer.terms": "利用規約",
        "footer.copyright": "&copy; 2026 LovaMe. All rights reserved.",
        "search.placeholder": "キーワードを入力...",
        "search.noResults": "該当する記事が見つかりませんでした",
        "search.close": "閉じる"
    },
    en: {
        "header.home": "＜ HOME",
        "header.about": "About Us",
        "header.privacy": "Privacy Policy",
        "header.terms": "Terms of Service",
        "nav.home": "HOME",
        "nav.exchange": "How to Exchange",
        "nav.glossary": "Glossary",
        "nav.opinion": "Opinion Box",
        "nav.list": "＜ LIST",
        "concept.title": "𝐋𝐨𝐯e+𝐌𝐞 = Love Myself",
        "concept.text": "A place where the excitement of <br class=\"sp-only\">'Ota-katsu' makes you love yourself too.🎀",
        "section.news": "NEWS",
        "footer.about": "About Us",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.copyright": "&copy; 2026 LovaMe. All rights reserved.",
        "search.placeholder": "Search keywords...",
        "search.noResults": "No articles found.",
        "search.close": "Close"
    },
    zh_TW: {
        "header.home": "＜ 首頁",
        "header.about": "營運者資訊",
        "header.privacy": "隱私權政策",
        "header.terms": "使用條款",
        "nav.home": "首頁",
        "nav.exchange": "週邊交換教學",
        "nav.glossary": "用語集",
        "nav.opinion": "意見箱",
        "nav.list": "＜ 列表",
        "concept.title": "𝐋𝐨𝐯e+𝐌𝐞＝「愛我自己」",
        "concept.text": "因“推活”的心動，<br class=\"sp-only\">讓這裡成為也能喜歡上自己的地方🎀",
        "section.news": "最新消息",
        "footer.about": "營運者資訊",
        "footer.privacy": "隱私權政策",
        "footer.terms": "使用條款",
        "footer.copyright": "&copy; 2026 LovaMe. All rights reserved.",
        "search.placeholder": "輸入關鍵字...",
        "search.noResults": "找不到相關內容",
        "search.close": "關閉"
    },
    ko: {
        "header.home": "＜ HOME",
        "header.about": "운영자 정보",
        "header.privacy": "개인정보 처리방침",
        "header.terms": "이용약관",
        "nav.home": "HOME",
        "nav.exchange": "굿즈 교환 방법",
        "nav.glossary": "용어집",
        "nav.opinion": "의견함",
        "nav.list": "＜ LIST",
        "concept.title": "𝐋𝐨𝐯e+𝐌𝐞＝'나를 사랑하다'",
        "concept.text": "덕질の 설렘으로, <br class=\"sp-only\">나 자신도 좋아하게 되는 공간🎀",
        "section.news": "공지사항",
        "footer.about": "운영자 정보",
        "footer.privacy": "개인정보 처리방침",
        "footer.terms": "이용약관",
        "footer.copyright": "&copy; 2026 LovaMe. All rights reserved.",
        "search.placeholder": "키워드 검색...",
        "search.noResults": "검색 결과が 없습니다",
        "search.close": "닫기"
    },
    zh_CN: {
        "header.home": "＜ 首页",
        "header.about": "运营者信息",
        "header.privacy": "隐私政策",
        "header.terms": "使用条款",
        "nav.home": "首页",
        "nav.exchange": "周边交換教学",
        "nav.glossary": "词汇表",
        "nav.opinion": "意见箱",
        "nav.list": "＜ 列表",
        "concept.title": "𝐋𝐨𝐯e+𝐌𝐞＝「爱我自己」",
        "concept.text": "因“推活”的心动，<br class=\"sp-only\">让这里成为也能喜欢上自己的地方🎀",
        "section.news": "最新消息",
        "footer.about": "运营者信息",
        "footer.privacy": "隐私政策",
        "footer.terms": "使用条款",
        "footer.copyright": "&copy; 2026 LovaMe. All rights reserved.",
        "search.placeholder": "输入关键词...",
        "search.noResults": "未找到相关内容",
        "search.close": "关闭"
    }
};

function setLanguage(lang, navigate = false) {
    localStorage.setItem('selectedLanguage', lang);
    const htmlLang = { zh_TW: 'zh-Hant', zh_CN: 'zh-Hans' }[lang] || lang;
    document.documentElement.lang = htmlLang;
    if (navigate && lang !== 'ja') {
        const route = { en: 'en', ko: 'ko', zh_TW: 'zh-tw', zh_CN: 'zh-cn' }[lang];
        if (route) {
            location.href = `/${route}/`;
            return;
        }
    }
    translatePage();
}

function translatePage() {
    const lang = localStorage.getItem('selectedLanguage') || 'ja';
    const dict = translations[lang] || translations['ja'];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            if (el.tagName === 'INPUT') {
                el.placeholder = dict[key];
            } else {
                el.innerHTML = dict[key];
            }
        }
    });

    // Update the selector UI if it exists
    const selector = document.getElementById('language-selector');
    if (selector) {
        selector.value = lang;
    }

    // Toggle body class for language-specific content blocks
    document.body.className = document.body.className.replace(/\blang-\S+/g, '').trim();
    document.body.classList.add(`lang-${lang}`);

    if (typeof renderGlossary === 'function') {
        renderGlossary();
    }
}

function openSearch() {
    const modal = document.getElementById('search-modal');
    modal.style.display = 'flex';
    document.getElementById('search-input').focus();
    document.body.style.overflow = 'hidden';
}

function closeSearch() {
    const modal = document.getElementById('search-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function performSearch(query) {
    const resultsContainer = document.getElementById('search-results');
    const lang = localStorage.getItem('selectedLanguage') || 'ja';
    const dict = translations[lang] || translations['ja'];
    
    resultsContainer.innerHTML = '';

    if (!query) return;

    const filtered = searchIndex.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length === 0) {
        resultsContainer.innerHTML = `<p class="no-results">${dict["search.noResults"]}</p>`;
        return;
    }

    filtered.forEach(item => {
        const div = document.createElement('div');
        div.className = 'search-result-item';
        const badge = item.category === 'glossary' ? '📖 用語' : (item.category === 'article' ? '📝 記事' : '💡 ガイド');
        div.innerHTML = `
            <a href="/${item.url}">
                <span class="result-badge">${badge}</span>
                <strong>${item.title}</strong>
            </a>
        `;
        resultsContainer.appendChild(div);
    });
}

// Category Translations for Glossary
const categoryTranslations = {
    "属性・スタンス": { ja: "属性・スタンス", en: "Attributes / Stance", zh_TW: "屬性 / 立場", ko: "성향 / 스탠스", zh_CN: "属性 / 立场" },
    "取引・グッズ交換": { ja: "取引・グッズ交換", en: "Trading / Merch", zh_TW: "交易 / 周邊交換", ko: "거래 / 굿즈 교환", zh_CN: "交易 / 周边交换" },
    "ライブ・イベント": { ja: "ライブ・イベント", en: "Live / Events", zh_TW: "演唱會 / 活動", ko: "라이브 / 이벤트", zh_CN: "演唱会 / 活动" },
    "感情・スラング": { ja: "感情・スラング", en: "Emotions / Slang", zh_TW: "情感 / 流行語", ko: "감정 / 슬랭", zh_CN: "情感 / 流行语" },
    "オタ活・応援": { ja: "オタ活・応援", en: "Fandom Activities", zh_TW: "推活 / 應援", ko: "덕질 / 응원", zh_CN: "推活 / 应援" },
    "ネットリテラシー": { ja: "ネットリテラシー", en: "Net Etiquette", zh_TW: "網路禮儀", ko: "네티켓 / 注意事項", zh_CN: "网络礼仪" },
    "ジャンル別用語": { ja: "ジャンル別用語", en: "Genre-specific Terms", zh_TW: "圈內用語", ko: "장르별 용어", zh_CN: "圈内用语" }
};

// Glossary Data
// Glossary data and rendering live in glossary.js and load only on the glossary page.

document.addEventListener('DOMContentLoaded', translatePage);
window.addEventListener('click', (event) => {
    const modal = document.getElementById('search-modal');
    if (event.target === modal) closeSearch();
});

// Privacy-first analytics consent. GA4 is never requested until the visitor opts in.
(() => {
    const CONSENT_KEY = 'lovameAnalyticsConsent';
    const GA_ID = 'G-H0NQCV67K9';
    const copy = {
        ja: {
            title: 'Cookieとアクセス解析について',
            body: 'サイト改善のため、同意いただいた場合のみGoogle Analyticsを使用します。拒否してもすべての記事を利用できます。',
            accept: '同意する', reject: '拒否する', privacy: '詳しく見る', settings: 'Cookie設定'
        },
        en: {
            title: 'Cookies and analytics',
            body: 'We use Google Analytics only if you consent. You can still read every article if you decline.',
            accept: 'Accept', reject: 'Decline', privacy: 'Learn more', settings: 'Cookie settings'
        },
        zh_TW: {
            title: 'Cookie 與流量分析',
            body: '只有在您同意時，我們才會使用 Google Analytics。拒絕後仍可閱讀所有內容。',
            accept: '同意', reject: '拒絕', privacy: '了解更多', settings: 'Cookie 設定'
        },
        ko: {
            title: 'Cookie 및 접속 분석',
            body: '동의한 경우에만 Google Analytics를 사용합니다. 거부해도 모든 글을 볼 수 있습니다.',
            accept: '동의', reject: '거부', privacy: '자세히 보기', settings: 'Cookie 설정'
        },
        zh_CN: {
            title: 'Cookie 与访问分析',
            body: '仅在您同意时使用 Google Analytics。拒绝后仍可阅读所有内容。',
            accept: '同意', reject: '拒绝', privacy: '了解更多', settings: 'Cookie 设置'
        }
    };

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        wait_for_update: 500
    });

    let analyticsLoaded = false;
    function enableAnalytics() {
        if (analyticsLoaded) return;
        analyticsLoaded = true;
        window.gtag('consent', 'update', { analytics_storage: 'granted' });
        window.gtag('js', new Date());
        window.gtag('config', GA_ID, { anonymize_ip: true });
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
        document.head.appendChild(script);
    }

    function disableAnalytics() {
        window.gtag('consent', 'update', {
            analytics_storage: 'denied', ad_storage: 'denied',
            ad_user_data: 'denied', ad_personalization: 'denied'
        });
    }

    function currentCopy() {
        const lang = localStorage.getItem('selectedLanguage') || 'ja';
        return copy[lang] || copy.ja;
    }

    function closeBanner() {
        document.getElementById('cookie-consent')?.remove();
    }

    function saveConsent(value) {
        localStorage.setItem(CONSENT_KEY, value);
        value === 'accepted' ? enableAnalytics() : disableAnalytics();
        closeBanner();
    }

    function showBanner() {
        closeBanner();
        const t = currentCopy();
        const banner = document.createElement('section');
        banner.id = 'cookie-consent';
        banner.className = 'cookie-consent';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-modal', 'true');
        banner.setAttribute('aria-labelledby', 'cookie-consent-title');
        banner.innerHTML = `<div class="cookie-consent-copy"><h2 id="cookie-consent-title">${t.title}</h2><p>${t.body} <a href="/privacy.html">${t.privacy}</a></p></div><div class="cookie-consent-actions"><button type="button" data-consent="reject">${t.reject}</button><button type="button" class="primary" data-consent="accept">${t.accept}</button></div>`;
        banner.querySelector('[data-consent="accept"]').addEventListener('click', () => saveConsent('accepted'));
        banner.querySelector('[data-consent="reject"]').addEventListener('click', () => saveConsent('rejected'));
        document.body.appendChild(banner);
        banner.querySelector('button')?.focus();
    }

    document.addEventListener('DOMContentLoaded', () => {
        const consent = localStorage.getItem(CONSENT_KEY);
        if (consent === 'accepted') enableAnalytics();
        else if (consent === 'rejected') disableAnalytics();
        else showBanner();
        document.querySelectorAll('[data-cookie-settings]').forEach(button => {
            button.textContent = currentCopy().settings;
            button.addEventListener('click', showBanner);
        });
    });
})();
