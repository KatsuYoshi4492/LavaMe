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
        url: "公開記事/article_step1.html",
        category: "article",
        keywords: "初心者, 流れ, 探し方, 梱包, 発送, 受取, 完了, 基礎知識, ステップ"
    },
    {
        title: "【第2回】なぜ「お取引専用垢」が必要なの？",
        url: "公開記事/article_step2.html",
        category: "article",
        keywords: "Twitter, X, アカウント作成, 趣味垢, 分ける理由, メリット, 鍵垢, プロフィール"
    },
    {
        title: "【第3回】お取引の種類（交換・譲渡・買取）",
        url: "公開記事/article_step3.html",
        category: "article",
        keywords: "交換, 譲渡, 買取, 種類, 違い, 基本, 初心者"
    },
    {
        title: "【第4回】交換募集ツイートの出し方",
        url: "公開記事/article_step4.html",
        category: "article",
        keywords: "ツイート, 募集, テンプレート, コピペ, 出し方, X, Twitter"
    },
    {
        title: "【第5回】お取引垢のプロフィール作成術",
        url: "公開記事/article_step5.html",
        category: "article",
        keywords: "プロフィール, ツイフィール, リットリンク, 固定ツイート, 信頼, 安心"
    },
    {
        title: "【第6回】DMでのやり取りの流れと注意点",
        url: "公開記事/article_step6.html",
        category: "article",
        keywords: "DM, やり取り, テンプレート, マナー, 住所交換, 確定"
    },
    {
        title: "【第7回】グッズ別「梱包の正解」ガイド",
        url: "公開記事/article_step7.html",
        category: "article",
        keywords: "梱包, プチプチ, 厚紙補強, 水濡れ防止, 缶バッジ, アクスタ, 紙類"
    },
    {
        title: "【第8回】発送後の対応とDM削除",
        url: "公開記事/article_step8.html",
        category: "article",
        keywords: "発送, 領収書, 追跡, 受取連絡, DM削除, マナー"
    },
    {
        title: "【第9回】お取引でのNG事項とミス",
        url: "公開記事/article_step9.html",
        category: "article",
        keywords: "NG, ミス, トラブル, 注意, 晒し, 回避, 詐欺"
    },
    {
        title: "【第10回】匿名配送と郵便局留め",
        url: "公開記事/article_step10.html",
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

function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    document.documentElement.lang = lang;
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
            <a href="${item.url}">
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
const glossaryData = [
    {
        term: "推し",
        kana: "おし",
        category: "属性・スタンス",
        desc: "人に勧めたいほど好きな対象。一番応援しているメンバーやキャラ。",
        en: { term: "Bias / My Fave", desc: "The member or character you support the most. 'Bias' is common in K-POP/Idol culture." },
        zh_TW: { term: "本命 / 推", desc: "最支持的成員或角色。想向他人推薦的對象。" },
        ko: { term: "최애 (Choiae)", desc: "가장 사랑하는 멤버나 캐릭터. '최고로 애정한다'는 뜻." },
        zh_CN: { term: "本命 / 推", desc: "最支持的成员或角色。" }
    },
    {
        term: "同担拒否",
        kana: "どうたんきょひ",
        category: "属性・スタンス",
        desc: "自分と同じ対象を応援する他のファン（同担）とは、トラブル防止や心情的な理由から交流を持たないスタンスのこと。",
        en: { term: "Solo Stan / No interacting with same-bias fans", desc: "A stance where one refuses to interact with fans who support the same character/idol." },
        zh_TW: { term: "同擔拒否", desc: "拒絕與喜愛同一角色/偶像的粉絲交流。" },
        ko: { term: "동담 거부 (Dongdam Geobu)", desc: "자신과 같은 대상을 응원하는 다른 팬(동담)과는 교류하지 않는 성향." },
        zh_CN: { term: "同担拒否", desc: "拒绝与喜爱同一角色/偶像的粉丝交流。" }
    },
    {
        term: "同担歓迎 / 同担大歓迎",
        kana: "どうたんかんげい",
        category: "属性・スタンス",
        desc: "自分と同じ対象を応援する他のファンと、積極的に交流したいというスタンスのこと。",
        en: { term: "Same-bias friendly", desc: "Actively seeking to interact with other fans who support the same bias." },
        zh_TW: { term: "同擔歡迎", desc: "歡迎與喜愛同一角色/偶像的粉絲交流。" },
        ko: { term: "동담 환영 (Dongdam Hwanyoung)", desc: "자신과 같은 대상을 응원하는 다른 팬(동담)과의 교류를 환영하는 성향." },
        zh_CN: { term: "同担欢迎", desc: "欢迎与喜爱同一角色/偶像的粉丝交流。" }
    },
    {
        term: "同嫁拒否",
        kana: "どうよめきょひ",
        category: "属性・スタンス",
        desc: "推しに対して恋愛感情を持っており、同じく恋愛対象として見ている他のファンとは交流できないこと。"
    },
    {
        term: "他担歓迎",
        kana: "たたんかんげい",
        category: "属性・スタンス",
        desc: "自分とは違う対象を応援しているファンとの交流を歓迎すること。"
    },
    {
        term: "単推し",
        kana: "たんおし",
        category: "属性・スタンス",
        desc: "グループなどの特定の一人だけを熱心に応援すること。"
    },
    {
        term: "箱推し",
        kana: "はこおし",
        category: "属性・スタンス",
        desc: "特定の個人だけでなく、グループや作品全体を応援すること。",
        en: { term: "Group Stan / OT (One True) All", desc: "Supporting the whole group or production rather than just one member." },
        zh_TW: { term: "箱推 / 全員推", desc: "不只支持特定個人，而是支持整個組合或作品。" },
        ko: { term: "올팬 / 하코오시", desc: "특정 개인이 아닌 그룹이나 작품 전체를 응원하는 것." },
        zh_CN: { term: "箱推 / 全员推", desc: "不仅支持特定个人，而是支持整个组合或作品。" }
    },
    {
        term: "DD",
        kana: "でぃーでぃー",
        category: "属性・スタンス",
        desc: "「誰でも大好き」の略で、特定の推しに限らず複数の対象を広く応援すること。",
        en: { term: "Multi-fandom / DD", desc: "Short for 'Daredemo Daisuki' (I love everyone). Supporting many groups or idols." },
        zh_TW: { term: "DD (誰都喜歡)", desc: "「誰でも大好き」的縮寫。廣泛支持多個對象。" },
        ko: { term: "잡덕 (Jab-deok)", desc: "'누구든 다 좋아(Daredemo Daisuki)'의 약자. 여러 대상을 폭넓게 응원하는 사람." },
        zh_CN: { term: "DD (谁都喜欢)", desc: "「誰でも大好き」的缩写。" }
    },
    {
        term: "二推し・三推し",
        kana: "におし・さんおし",
        category: "属性・スタンス",
        desc: "一番好きな対象の次に、二番目・三番目に応援している対象のこと。"
    },
    {
        term: "事務所推し",
        kana: "じむしょおし",
        category: "属性・スタンス",
        desc: "特定のタレントだけでなく、その所属事務所全体を好んで応援すること。"
    },
    {
        term: "リアコ / ガチ恋",
        kana: "りあこ / がちこい",
        category: "属性・スタンス",
        desc: "推しに対して、ファンとしてだけでなく現実的な恋愛感情を抱いていること。",
        en: { term: "Real Love (Ria-ko)", desc: "Being 'realistically' in love with an idol/character, wanting a romantic relationship." },
        zh_TW: { term: "真愛 / 現實戀愛", desc: "對推抱持著現實中的戀愛感情，而不僅僅是粉絲的心態。" },
        ko: { term: "리아코 (Ria-ko)", desc: "최애에게 팬 이상의 실제 연애 감정을 느끼는 상태." },
        zh_CN: { term: "真爱 / 现实恋爱", desc: "对推抱持着现实中的恋爱感情。" }
    },
    {
        term: "夢女子",
        kana: "ゆめじょし",
        category: "属性・スタンス",
        desc: "キャラクターやアイドルと自分（または架空のキャラクター）との関係性を想像して楽しむ女性ファンのこと。"
    },
    {
        term: "腐女子 / 腐男子",
        kana: "ふじょし / ふだんし",
        category: "属性・スタンス",
        desc: "男性同士の恋愛（BL）を題材にした作品や妄想を好むファンのこと。"
    },
    {
        term: "親金",
        kana: "おやきん",
        category: "属性・スタンス",
        desc: "自身で稼いだお金ではなく、保護者からのお小遣いなどで活動費用を賄っていること。"
    },
    {
        term: "在宅勢",
        kana: "ざいたくぜい",
        category: "属性・スタンス",
        desc: "ライブ会場などの現場には行かず、主に自宅で映像やネットを通じて応援するスタイルのこと。"
    },
    {
        term: "現場勢",
        kana: "げんばぜい",
        category: "属性・スタンス",
        desc: "ライブやイベント会場へ実際に足を運び、現地での活動を重視するスタイルのこと。"
    },
    {
        term: "譲",
        kana: "ゆずり",
        category: "取引・グッズ交換",
        desc: "手持ちのグッズやチケットを、他者に譲渡（販売または無償提供）したいという意思表示。",
        en: { term: "Offer / Have (H)", desc: "Indicates items you are offering for trade or sale." },
        zh_TW: { term: "讓", desc: "表示想要轉讓出的週邊商品。" },
        ko: { term: "양도 (Yyang-do)", desc: "굿즈를 다른 사람에게 넘기겠다는 의사 표현." },
        zh_CN: { term: "让", desc: "表示想要转让出的周边商品。" }
    },
    {
        term: "求",
        kana: "もとめ",
        category: "取引・グッズ交換",
        desc: "特定のグッズやチケットを探しており、譲ってほしいという意思表示。",
        en: { term: "Want (W) / Looking For (LF)", desc: "Indicates items you are looking to acquire." },
        zh_TW: { term: "求", desc: "表示正在尋找並希望得到的週邊商品。" },
        ko: { term: "회수 / 구함 (Gu-ham)", desc: "특정 굿즈를 찾고 있으며 양도받고 싶다는 의사 표현." },
        zh_CN: { term: "求", desc: "表示正在寻找并希望得到的周边商品。" }
    },
    {
        term: "交換",
        kana: "こうかん",
        category: "取引・グッズ交換",
        desc: "金銭のやり取りではなく、互いの持っているグッズ同士をトレードすること。",
        en: { term: "Trade / Exchange", desc: "Trading items with another fan instead of using cash." },
        zh_TW: { term: "交換", desc: "不涉及金錢，而是與對方交易彼此持有的週邊。" },
        ko: { term: "교환 (Gyo-hwan)", desc: "금전 거래가 아닌 서로의 굿즈를 맞교환하는 것." },
        zh_CN: { term: "交换", desc: "不涉及金钱，而是与对方交易彼此持有的周边。" }
    },
    {
        term: "買取 / 回収",
        kana: "かいとり / かいしゅう",
        category: "取引・グッズ交換",
        desc: "特定のグッズを金銭を支払って引き取ること、または積極的に集めていること。"
    },
    {
        term: "代行",
        kana: "だいこう",
        category: "取引・グッズ交換",
        desc: "イベント会場などに行けない人の代わりに、グッズなどを購入すること。"
    },
    {
        term: "仮約束",
        kana: "かりやくそく",
        category: "取引・グッズ交換",
        desc: "商品の発売前や詳細判明前に、あらかじめ交換や譲渡の約束を取り付けておくこと。"
    },
    {
        term: "抱き合わせ",
        kana: "だきあわせ",
        category: "取引・グッズ交換",
        desc: "本命のグッズを入手する条件として、自分が求めているキャラクター以外の、相手が指定したグッズも併せて引き取ること。"
    },
    {
        term: "比率違い",
        kana: "ひりつちがい",
        category: "取引・グッズ交換",
        desc: "グッズの人気度や希少性の差を埋めるため、１対複数などで交換比率を調整すること。"
    },
    {
        term: "わらしべ",
        kana: "わらしべ",
        category: "取引・グッズ交換",
        desc: "手持ちのグッズを交換し続け、最終的に目当てのグッズや高レートのものを手に入れること。"
    },
    {
        term: "無限回収",
        kana: "むげんかいしゅう",
        category: "取引・グッズ交換",
        desc: "特定のグッズを、個数制限を設けずに可能な限り集めること。",
        en: { term: "Infinite Collection", desc: "Hoarding as many copies of a specific item as possible without a limit." },
        zh_TW: { term: "無限回收", desc: "不設數量限制，盡可能收集特定的週邊商品。" },
        ko: { term: "무한 회수 (Mu-han Hwi-su)", desc: "특정 굿즈를 개수 제한 없이 가능한 한 많이 모으는 것." },
        zh_CN: { term: "無限回收", desc: "不设数量限制，尽可能收集特定的周边商品。" }
    },
    {
        term: "定価＋送料",
        kana: "ていかぷらすそうりょう",
        category: "取引・グッズ交換",
        desc: "利益を上乗せせず、実際にかかった商品代金と送料のみで譲渡すること。"
    },
    {
        term: "手渡し",
        kana: "てわたし",
        category: "取引・グッズ交換",
        desc: "郵送ではなく、駅やイベント会場などで直接会って物品を受け渡すこと。"
    },
    {
        term: "郵送",
        kana: "ゆうそう",
        category: "取引・グッズ交換",
        desc: "郵便や宅配便を利用して物品を送り合うこと。"
    },
    {
        term: "硬質ケース / プチプチ",
        kana: "こうしつけーす / ぷちぷち",
        category: "取引・グッズ交換",
        desc: "配送時にグッズが破損しないよう保護するための梱包資材のこと。"
    },
    {
        term: "局留め",
        kana: "きょくどめ",
        category: "取引・グッズ交換",
        desc: "自宅の住所を知られたくない場合などに、郵便局で荷物を止めて窓口で受け取ること。"
    },
    {
        term: "先送り",
        kana: "さきおくり",
        category: "取引・グッズ交換",
        desc: "お取引において、一方が先に品物を発送し、届いたことを確認してからもう一方が発送すること。"
    },
    {
        term: "ツイフィール",
        kana: "ついふぃーる",
        category: "取引・グッズ交換",
        desc: "Twitter（現X）のプロフィール詳細を作成できる外部サービス。お取引のルールを記載するのに使われる。"
    },
    {
        term: "リットリンク",
        kana: "りっとりんく",
        category: "取引・グッズ交換",
        desc: "「lit.link」。複数のSNSやサイトのリンクを一枚のページにまとめられるプロフィール作成サービス。"
    },
    {
        term: "同日発送",
        kana: "どうじつはっそう",
        category: "取引・グッズ交換",
        desc: "お互いに、あらかじめ決めた同じ日に品物を発送すること。"
    },
    {
        term: "白紙",
        kana: "はくし",
        category: "取引・グッズ交換",
        desc: "お取引の約束が成立する前に、条件の不一致などにより交渉を白紙に戻す（キャンセルする）こと。"
    },
    {
        term: "予約品",
        kana: "よやくひん",
        category: "取引・グッズ交換",
        desc: "発売前などの理由で、現時点では手元にない商品のこと。"
    },
    {
        term: "参戦",
        kana: "さんせん",
        category: "ライブ・イベント",
        desc: "ライブやイベントに参加すること。"
    },
    {
        term: "全通",
        kana: "ぜんつう",
        category: "ライブ・イベント",
        desc: "ツアーなどの全公演、または期間中の全日程に参加すること。"
    },
    {
        term: "多ステ",
        kana: "たすて",
        category: "ライブ・イベント",
        desc: "同一のツアーや公演期間中に、複数回参加すること。"
    },
    {
        term: "遠征",
        kana: "えんせい",
        category: "ライブ・イベント",
        desc: "居住地から離れた遠方の会場へ、宿泊や長距離移動を伴って参加すること。"
    },
    {
        term: "ライビュ",
        kana: "らいびゅ",
        category: "ライブ・イベント",
        desc: "実際の会場ではなく、映画館などで中継映像を見るライブビューイングのこと。"
    },
    {
        term: "ファンサ",
        kana: "ふぁんさ",
        category: "ライブ・イベント",
        desc: "ステージ上の出演者が、手を振るなどファンに向けて行うサービス行為のこと。"
    },
    {
        term: "レス",
        kana: "れす",
        category: "ライブ・イベント",
        desc: "出演者と目が合う、指をさされるなど、特定の反応をもらうこと。"
    },
    {
        term: "確定ファンサ",
        kana: "かくていふぁんさ",
        category: "ライブ・イベント",
        desc: "「今のファンサは間違いなく自分に向けられたものだ」と確信できる状態のこと。"
    },
    {
        term: "干される",
        kana: "ほされる",
        category: "ライブ・イベント",
        desc: "ファンサをもらえない、または席運やチケット抽選の結果が悪い状態が続くこと。"
    },
    {
        term: "銀テ",
        kana: "ぎんて",
        category: "ライブ・イベント",
        desc: "ライブの演出で客席に発射される、ロゴなどが印字された銀色のテープのこと。"
    },
    {
        term: "フラスタ",
        kana: "ふらすた",
        category: "ライブ・イベント",
        desc: "ファンが有志でお金を出し合い、出演者への祝い花として会場に贈るスタンド花のこと。"
    },
    {
        term: "物販 / 事後通販",
        kana: "ぶっぱん / じごつうはん",
        category: "ライブ・イベント",
        desc: "会場でグッズ販売を行うこと、またはイベント終了後にネット等で販売を行うこと。"
    },
    {
        term: "尊い",
        kana: "とうとい",
        category: "感情・スラング",
        desc: "推しや作品が素晴らしすぎて、信仰心に近い高揚感や言葉にならない感動を覚える状態のこと。",
        en: { term: "Precious / Sacred", desc: "Used when your bias is so perfect that you feel overwhelmed. Similar to 'I can't even...'" },
        zh_TW: { term: "尊 / 太神了", desc: "形容推太美好，讓人產生近乎信仰的感動。" },
        ko: { term: "귀하다 / 존엄하다", desc: "최애가 너무 완벽해서 말로 표현할 수 없을 정도의 감동." },
        zh_CN: { term: "尊 / AWSL", desc: "形容推太美好，令人感动（AWSL=啊我死了）。" }
    },
    {
        term: "てぇてぇ",
        kana: "てぇてぇ",
        category: "感情・スラング",
        desc: "「尊い」がなまった言葉で、主に関係性が素晴らしい様子に対して使われる。"
    },
    {
        term: "優勝",
        kana: "ゆうしょう",
        category: "感情・スラング",
        desc: "「誰よりも一番可愛かった」「最高の体験をした」など、圧倒的に素晴らしい状態のこと。"
    },
    {
        term: "顔がいい",
        kana: "かおがいい",
        category: "感情・スラング",
        desc: "推しの容姿が優れていることを、シンプルかつ最大限に称賛する言葉。"
    },
    {
        term: "語彙力",
        kana: "ごいりょく",
        category: "感情・スラング",
        desc: "感情が高ぶりすぎて言葉が出てこない際、「語彙力がない」「語彙力が死んだ」と表現すること。"
    },
    {
        term: "供給過多",
        kana: "きょうきゅうかた",
        category: "感情・スラング",
        desc: "公式からの情報や新規コンテンツが多すぎて、嬉しい悲鳴を上げている状態のこと。"
    },
    {
        term: "しんどい",
        kana: "しんどい",
        category: "感情・スラング",
        desc: "好きという感情が強すぎて、胸が苦しくなるほど辛い状態のこと。"
    },
    {
        term: "無理",
        kana: "むり",
        category: "感情・スラング",
        desc: "良すぎて受け止めきれない、直視できないといった、肯定的な意味での拒絶や限界を表す言葉。"
    },
    {
        term: "待って",
        kana: "まって",
        category: "感情・スラング",
        desc: "情報の整理や心の準備が追いつかず、一旦状況を止めたいときに発する言葉。"
    },
    {
        term: "墓",
        kana: "はか",
        category: "感情・スラング",
        desc: "「尊すぎて死んだ（墓に入った）」という意味で、衝撃的な良さに打ちのめされた状態のこと。"
    },
    {
        term: "祭壇",
        kana: "さいだん",
        category: "オタ活・応援",
        desc: "推しの誕生日などを祝うため、グッズや写真を祭壇のように美しく飾り付けること。"
    },
    {
        term: "痛バ",
        kana: "いたば",
        category: "オタ活・応援",
        desc: "推しの缶バッジやキーホルダーを大量に取り付け、愛をアピールするために装飾したバッグのこと。"
    },
    {
        term: "デコ",
        kana: "でこ",
        category: "オタ活・応援",
        desc: "硬質ケースやうちわなどを、リボンやシールで装飾して可愛くすること。"
    },
    {
        term: "アクスタ",
        kana: "あくすた",
        category: "オタ活・応援",
        desc: "アクリルスタンドの略称。写真やイラストが印刷されたアクリル製のフィギュア。"
    },
    {
        term: "積む",
        kana: "つむ",
        category: "オタ活・応援",
        desc: "特典やイベント参加券などを目的に、同じCDやグッズを複数購入すること。"
    },
    {
        term: "課金",
        kana: "かきん",
        category: "オタ活・応援",
        desc: "ゲームアプリや配信サービスなどで、有料アイテムやコンテンツにお金を使うこと。"
    },
    {
        term: "スパチャ / 赤スパ",
        kana: "すぱちゃ / あかすぱ",
        category: "オタ活・応援",
        desc: "YouTube等の投げ銭機能（スーパーチャット）のこと。赤スパは最高額帯（約1万円以上）を指す。"
    },
    {
        term: "お布施",
        kana: "おふせ",
        category: "オタ活・応援",
        desc: "対価を求めるというよりは、感謝や応援の気持ちとして公式にお金を落とすこと。"
    },
    {
        term: "本人不在の誕生日会",
        kana: "ほんにんふざいのたんじょうびかい",
        category: "オタ活・応援",
        desc: "ホテルやスタジオなどを借り、推し本人がいない状態でファンだけで誕生日を祝うこと。"
    },
    {
        term: "布教",
        kana: "ふきょう",
        category: "オタ活・応援",
        desc: "自分の好きな作品や推しの魅力を周囲に伝え、ファンを増やそうとする活動のこと。"
    },
    {
        term: "生誕祭",
        kana: "せいたんさい",
        category: "オタ活・応援",
        desc: "推しの誕生日を祝うイベントや、ファンによるお祝い期間のこと。"
    },
    {
        term: "地雷",
        kana: "じらい",
        category: "ネットリテラシー",
        desc: "自分が極度に苦手、または不快に感じる特定のシチュエーションやジャンルのこと。"
    },
    {
        term: "検索避け",
        kana: "けんさくよけ",
        category: "ネットリテラシー",
        desc: "一般の人や本人の目に触れないよう、名前を記号に変えるなどして検索に引っかからないようにすること。"
    },
    {
        term: "ネタバレ / ネタバレ注意",
        kana: "ねたばれ / ねたばれちゅうい",
        category: "ネットリテラシー",
        desc: "物語の結末や重要な展開を明かすこと。未見の人への配慮として注意喚起に使われる。"
    },
    {
        term: "自衛",
        kana: "じえい",
        category: "ネットリテラシー",
        desc: "苦手な情報を見ないように、ミュートやブロック機能を活用して自分の環境を守ること。"
    },
    {
        term: "空リプ",
        kana: "からりぷ",
        category: "ネットリテラシー",
        desc: "特定の人への返信（リプライ）機能を使わず、タイムライン上で相手に宛てたような内容を呟くこと。"
    },
    {
        term: "害悪",
        kana: "がいあく",
        category: "ネットリテラシー",
        desc: "周囲に迷惑をかけたり、マナー違反を繰り返したりする悪質な行動をとるファンのこと。"
    },
    {
        term: "アンチ",
        kana: "あんち",
        category: "ネットリテラシー",
        desc: "特定の対象を嫌い、攻撃的な発言や批判的な活動を行う人のこと。"
    },
    {
        term: "匂わせ",
        kana: "におわせ",
        category: "ネットリテラシー",
        desc: "交際関係などを明言せず、写真の背景やアイテムで間接的にアピールすること。"
    },
    {
        term: "担降り",
        kana: "たんおり",
        category: "ネットリテラシー",
        desc: "これまで応援していた対象のファンを辞めること。"
    },
    {
        term: "他界",
        kana: "たかい",
        category: "ネットリテラシー",
        desc: "その界隈や趣味の活動自体から完全に撤退すること。"
    },
    {
        term: "マチソワ",
        kana: "まちそわ",
        category: "ジャンル別用語",
        desc: "舞台などで、昼公演（マチネ）と夜公演（ソワレ）の両方を観劇すること。"
    },
    {
        term: "カテコ",
        kana: "かてこ",
        category: "ジャンル別用語",
        desc: "舞台終了後のカーテンコールのこと。"
    },
    {
        term: "ペン",
        kana: "ぺん",
        category: "ジャンル別用語",
        desc: "K-POP用語で「ファン」のこと。"
    },
    {
        term: "カムバ",
        kana: "かむば",
        category: "ジャンル別用語",
        desc: "K-POP用語で「カムバック」の略。新曲をリリースして活動期間に入ること。"
    },
    {
        term: "ヨントン",
        kana: "よんとん",
        category: "ジャンル別用語",
        desc: "K-POP用語で、映像通話を使ったファンミーティングのこと。"
    },
    {
        term: "周回",
        kana: "しゅうかい",
        category: "ジャンル別用語",
        desc: "ゲームでアイテム収集やレベル上げのために、同じステージを繰り返しプレイすること。"
    },
    {
        term: "天井",
        kana: "てんじょう",
        category: "ジャンル別用語",
        desc: "「ガチャ」において、最高レアリティが確実に入手できる上限金額や回数のこと。"
    },
    {
        term: "リセマラ",
        kana: "りせまら",
        category: "ジャンル別用語",
        desc: "「リセットマラソン」の略。ゲーム開始時に良いアイテムが出るまでインストールと削除を繰り返すこと。"
    },
    {
        term: "初見",
        kana: "しょけん",
        category: "ジャンル別用語",
        desc: "その配信や動画を初めて見に来た人のこと。"
    },
    {
        term: "ROM",
        kana: "ろむ",
        category: "ジャンル別用語",
        desc: "「Read Only Member」の略。コメントなどはせず、見る・読むことに徹している状態。"
    },
    {
        term: "モデレーター",
        kana: "もでれーたー",
        category: "ジャンル別用語",
        desc: "配信のチャット欄などで、コメントの管理や治安維持を行う権限を持った人のこと。"
    }
];

function renderGlossary() {
    const categoryView = document.getElementById('category-view');
    const currentLang = localStorage.getItem('selectedLanguage') || 'ja';

    if (!categoryView) return;

    const categories = [...new Set(glossaryData.map(item => item.category))];
    let categoryHtml = '';
    categories.forEach(cat => {
        const catTerms = glossaryData.filter(item => item.category === cat);
        const translatedCat = categoryTranslations[cat] ? (categoryTranslations[cat][currentLang] || cat) : cat;

        categoryHtml += `
            <details>
                <summary>${translatedCat}</summary>
                <div class="category-content">
                    ${catTerms.map(item => {
                        const displayTerm = (currentLang !== 'ja' && item[currentLang]) ? item[currentLang].term : item.term;
                        const displayDesc = (currentLang !== 'ja' && item[currentLang]) ? item[currentLang].desc : item.desc;
                        const readingHtml = currentLang === 'ja' ? `<span class="term-reading">${item.kana}</span>` : '';

                        return `
                            <div class="term-card">
                                <div class="term-header">
                                    <span class="term-name">${displayTerm}</span>
                                    ${readingHtml}
                                </div>
                                <p class="term-meaning">${displayDesc}</p>
                            </div>
                        `;
                    }).join('')}
                </div>
            </details>
        `;
    });
    categoryView.innerHTML = categoryHtml;
}


document.addEventListener('DOMContentLoaded', () => {
    translatePage();
    highlightGlossaryTerms();
    if (document.getElementById('category-view')) {
        renderGlossary();
    }
});

window.onclick = function (event) {
    const modal = document.getElementById('search-modal');
    if (event.target == modal) {
        closeSearch();
    }
}


function highlightGlossaryTerms() {
    const contentAreas = document.querySelectorAll('.page-content, .article-content');
    if (contentAreas.length === 0) return;

    const lang = localStorage.getItem('selectedLanguage') || 'ja';
    const allowedTerms = ["先送り", "手渡し", "ツイフィール", "リットリンク", "同日発送", "白紙", "予約品"];

    // Prepare terms
    let flatTerms = [];
    glossaryData.forEach(item => {
        const keywords = item.term.split(' / ').map(t => t.trim());
        keywords.forEach(kw => {
            if (allowedTerms.includes(kw)) {
                const descStr = (lang !== 'ja' && item[lang]) ? item[lang].desc : item.desc;
                flatTerms.push({ keyword: kw, desc: descStr });
            }
        });
    });
    
    // Sort by length descending to match longer terms first
    flatTerms.sort((a, b) => b.keyword.length - a.keyword.length);

    // Escape regex characters
    const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = flatTerms.map(t => escapeRegExp(t.keyword)).join('|');
    if (!pattern) return;
    
    const regex = new RegExp(`(${pattern})`, 'g');

    function processNode(node) {
        if (node.nodeType === 3) { // Text node
            const text = node.nodeValue;
            if (regex.test(text)) {
                regex.lastIndex = 0;
                const fragment = document.createDocumentFragment();
                let lastIndex = 0;
                
                text.replace(regex, (match, p1, offset) => {
                    if (offset > lastIndex) {
                        fragment.appendChild(document.createTextNode(text.substring(lastIndex, offset)));
                    }
                    
                    const termData = flatTerms.find(t => t.keyword === match);
                    
                    const span = document.createElement('span');
                    span.className = 'glossary-highlight';
                    span.textContent = match;
                    
                    const tooltip = document.createElement('span');
                    tooltip.className = 'glossary-tooltip';
                    tooltip.textContent = termData.desc;
                    span.appendChild(tooltip);
                    
                    // Toggle active state for mobile
                    span.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // Close other tooltips
                        document.querySelectorAll('.glossary-highlight.active').forEach(el => {
                            if (el !== span) el.classList.remove('active');
                        });
                        span.classList.toggle('active');
                    });
                    
                    fragment.appendChild(span);
                    lastIndex = offset + match.length;
                    return match;
                });
                
                if (lastIndex < text.length) {
                    fragment.appendChild(document.createTextNode(text.substring(lastIndex)));
                }
                
                if (node.parentNode) {
                    node.parentNode.replaceChild(fragment, node);
                }
            }
        } else if (node.nodeType === 1) { // Element node
            const tag = node.tagName.toLowerCase();
            // Skip replacing text inside these tags
            if (tag === 'script' || tag === 'style' || tag === 'a' || tag === 'button' || node.classList.contains('glossary-highlight')) {
                return;
            }
            Array.from(node.childNodes).forEach(processNode);
        }
    }

    contentAreas.forEach(area => {
        Array.from(area.childNodes).forEach(processNode);
    });
    
    // Close tooltips when clicking outside
    document.addEventListener('click', () => {
        document.querySelectorAll('.glossary-highlight.active').forEach(el => {
            el.classList.remove('active');
        });
    });
}
