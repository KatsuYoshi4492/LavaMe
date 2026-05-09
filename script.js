const searchIndex = [
    {
        title: "オタク用語辞典（意味・読み方）",
        url: "glossary.html",
        keywords: "用語, 意味, 辞書, 解説, 同担拒否, 夢女子, リアコ, DD, 箱推し, 現場, サークラ, 2.5次元, 隠語"
    },
    {
        title: "グッズ交換 How To（記事一覧）",
        url: "exchange.html",
        keywords: "一覧, 目次, まとめ, 初心者, やり方, 流れ, 基礎, 基本"
    },
    {
        title: "初回リプライの正解テンプレート",
        url: "article_1.html",
        keywords: "リプ, 返信, 例文, テンプレート, 書き方, 初回, 声のかけ方, FF外, 挨拶, DM, 文章, マナー"
    },
    {
        title: "2026年版！損しない発送方法の正解ルート",
        url: "shipping.html",
        keywords: "送料, 料金, 発送, 郵便局, ミニレター, クリックポスト, 定形外, 追跡, 安い, 値上げ, 切手, 郵送"
    },
    {
        title: "コピペで完結！信頼されるプロフの書き方",
        url: "profile.html",
        keywords: "プロフ, プロフィール, 梱包, 書き方, Lit.Link, リトリン, 既読印, 必読, 自己紹介, ルール, litlink"
    },
    {
        title: "ブロック回避！「比率違い」などのNG行動集",
        url: "manners.html",
        keywords: "マナー, ルール, NG, 禁止, ブロック, 比率違い, わらしべ, 抱き合わせ, トラブル, 注意, 詐嫁, 晒し, 検索避け"
    }
];

// i18n Data
const translations = {
    ja: {
        "header.home": "＜ HOME",
        "header.shipping": "2026年版！損しない発送方法の正解ルート",
        "header.reply": "初回リプライの正解テンプレート",
        "header.profile": "コピペで完結！信頼されるプロフの書き方",
        "header.manners": "ブロック回避！「比率違い」などのNG行動集",
        "header.about": "運営者情報",
        "header.privacy": "プライバシーポリシー",
        "header.terms": "利用規約",
        "nav.home": "HOME",
        "nav.exchange": "グッズ交換 How to",
        "nav.glossary": "用語集",
        "nav.opinion": "意見箱",
        "concept.title": "𝐋𝐨𝐯e+𝐌𝐞＝「私を愛する」",
        "concept.text": "“オタ活”のときめきで、<br class=\"sp-only\">自分のことも好きになれる場所🎀",
        "section.news": "NEWS",
        "footer.about": "運営者情報",
        "footer.privacy": "プライバシーポリシー",
        "footer.terms": "利用規約",
        "footer.copyright": "&copy; 2026 LovaMe. All rights reserved."
    },
    en: {
        "header.home": "＜ HOME",
        "header.shipping": "2026 Guide! The Best Shipping Methods",
        "header.reply": "The Perfect First Reply Templates",
        "header.profile": "Copy & Paste! Trusted Profile Guide",
        "header.manners": "Avoid Blocking! NG Actions List",
        "header.about": "About Us",
        "header.privacy": "Privacy Policy",
        "header.terms": "Terms of Service",
        "nav.home": "HOME",
        "nav.exchange": "How to Exchange",
        "nav.glossary": "Glossary",
        "nav.opinion": "Opinion Box",
        "concept.title": "𝐋𝐨𝐯e+𝐌𝐞 = Love Myself",
        "concept.text": "A place where the excitement of <br class=\"sp-only\">'Ota-katsu' makes you love yourself too.🎀",
        "section.news": "NEWS",
        "footer.about": "About Us",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.copyright": "&copy; 2026 LovaMe. All rights reserved."
    },
    zh_TW: {
        "header.home": "＜ 首頁",
        "header.shipping": "2026年版！最划算的寄送方法指南",
        "header.reply": "第一次回覆的正確範本",
        "header.profile": "複製即用！建立信賴感的自我介紹寫法",
        "header.manners": "避免封鎖！「比例不對」等NG行為集",
        "header.about": "營運者資訊",
        "header.privacy": "隱私權政策",
        "header.terms": "使用條款",
        "nav.home": "首頁",
        "nav.exchange": "週邊交換教學",
        "nav.glossary": "用語集",
        "nav.opinion": "意見箱",
        "concept.title": "𝐋𝐨𝐯e+𝐌𝐞＝「愛我自己」",
        "concept.text": "因“推活”的心動，<br class=\"sp-only\">讓這裡成為也能喜歡上自己的地方🎀",
        "section.news": "最新消息",
        "footer.about": "營運者資訊",
        "footer.privacy": "隱私權政策",
        "footer.terms": "使用條款",
        "footer.copyright": "&copy; 2026 LovaMe. All rights reserved."
    },
    ko: {
        "header.home": "＜ HOME",
        "header.shipping": "2026년판! 손해 보지 않는 배송 방법 가이드",
        "header.reply": "첫 답장 모범 템플릿",
        "header.profile": "복사해서 끝내자! 신뢰받는 프로필 작성법",
        "header.manners": "차단 회피! '비율 차이' 등 NG 행동 모음",
        "header.about": "운영자 정보",
        "header.privacy": "개인정보 처리방침",
        "header.terms": "이용약관",
        "nav.home": "HOME",
        "nav.exchange": "굿즈 교환 방법",
        "nav.glossary": "용어집",
        "nav.opinion": "의견함",
        "concept.title": "𝐋𝐨𝐯e+𝐌𝐞＝'나를 사랑하다'",
        "concept.text": "덕질の 설렘으로, <br class=\"sp-only\">나 자신도 좋아하게 되는 공간🎀",
        "section.news": "공지사항",
        "footer.about": "운영자 정보",
        "footer.privacy": "개인정보 처리방침",
        "footer.terms": "이용약관",
        "footer.copyright": "&copy; 2026 LovaMe. All rights reserved."
    },
    zh_CN: {
        "header.home": "＜ 首页",
        "header.shipping": "2026年版！最划算的寄送方法指南",
        "header.reply": "第一次回复的正确模板",
        "header.profile": "复制即用！建立信赖感的自我介绍写法",
        "header.manners": "避免封禁！「比例不对」等NG行为集",
        "header.about": "运营者信息",
        "header.privacy": "隐私政策",
        "header.terms": "使用条款",
        "nav.home": "首页",
        "nav.exchange": "周边交換教学",
        "nav.glossary": "词汇表",
        "nav.opinion": "意见箱",
        "concept.title": "𝐋𝐨𝐯e+𝐌𝐞＝「爱我自己」",
        "concept.text": "因“推活”的心动，<br class=\"sp-only\">让这里成为也能喜欢上自己的地方🎀",
        "section.news": "最新消息",
        "footer.about": "运营者信息",
        "footer.privacy": "隐私政策",
        "footer.terms": "使用条款",
        "footer.copyright": "&copy; 2026 LovaMe. All rights reserved."
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
            if (el.tagName === 'INPUT' && el.type === 'text') {
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
    // Remove existing lang- classes
    document.body.className = document.body.className.replace(/\blang-\S+/g, '').trim();
    // Add current lang class
    document.body.classList.add(`lang-${lang}`);

    // Re-render glossary if on the glossary page
    if (typeof renderGlossary === 'function') {
        renderGlossary();
    }
}

function openSearch() {
    const modal = document.getElementById('search-modal');
    modal.style.display = 'flex';
    document.getElementById('search-input').focus();
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeSearch() {
    const modal = document.getElementById('search-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

function performSearch(query) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (!query) return;

    const filtered = searchIndex.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length === 0) {
        resultsContainer.innerHTML = '<p class="no-results">該当する記事が見つかりませんでした</p>';
        return;
    }

    filtered.forEach(item => {
        const div = document.createElement('div');
        div.className = 'search-result-item';
        div.innerHTML = `<a href="${item.url}"><strong>${item.title}</strong></a>`;
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
    // 1. 属性・スタンス関連
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
        desc: "自分と同じ対象を応援する他の人とは交流を持たないスタンス。",
        en: { term: "Solo Stan / No interacting with same-bias fans", desc: "A stance where one refuses to interact with fans who support the same character/idol." },
        zh_TW: { term: "同擔拒否", desc: "拒絕與喜愛同一角色/偶像的粉絲交流。" },
        ko: { term: "동담 거부 (Dongdam Geobu)", desc: "자신과 같은 대상을 응원하는 다른 팬(동담)과는 교류하지 않는 성향." },
        zh_CN: { term: "同担拒否", desc: "拒绝与喜爱同一角色/偶像的粉丝交流。" }
    },
    {
        term: "同担歓迎",
        kana: "どうたんかんげい",
        category: "属性・スタンス",
        desc: "自分と同じ対象を応援する他の人と、積極的に交流したいというスタンス。",
        en: { term: "Same-bias friendly", desc: "Actively seeking to interact with other fans who support the same bias." },
        zh_TW: { term: "同擔歡迎", desc: "歡迎與喜愛同一角色/偶像的粉絲交流。" },
        ko: { term: "동담 환영 (Dongdam Hwanyoung)", desc: "자신과 같은 대상을 응원하는 다른 팬(동담)과의 교류를 환영하는 성향." },
        zh_CN: { term: "同担欢迎", desc: "欢迎与喜爱同一角色/偶像的粉丝交流。" }
    },
    {
        term: "リアコ",
        kana: "りあこ",
        category: "属性・スタンス",
        desc: "推しに対して、ファンとしての好意を超え、現実で恋愛関係になりたいという気持ちを抱いている状態。",
        en: { term: "Real Love (Ria-ko)", desc: "Being 'realistically' in love with an idol/character, wanting a romantic relationship." },
        zh_TW: { term: "真愛 / 現實戀愛", desc: "對推抱持著現實中的戀愛感情，而不僅僅是粉絲的心態。" },
        ko: { term: "리아코 (Ria-ko)", desc: "최애에게 팬 이상의 실제 연애 감정을 느끼는 상태." },
        zh_CN: { term: "真爱 / 现实恋爱", desc: "对推抱持着现实中的恋爱感情。" }
    },
    {
        term: "ガチ恋",
        kana: "がちこい",
        category: "属性・スタンス",
        desc: "推しに対して、冗談やノリではなく本気の恋愛感情を抱いている状態。",
        en: { term: "Hardcore Love / Gachi-koi", desc: "A serious romantic feeling for the bias, not just a casual 'fave' sentiment." },
        zh_TW: { term: "真愛粉 / 認真戀愛", desc: "對推抱持著認真的戀愛感情。" },
        ko: { term: "가치코이 (Gachikoi)", desc: "최애에게 장난이 아닌 진심 어린 연애 감정을 품고 있는 상태." },
        zh_CN: { term: "真爱粉 / 认真恋爱", desc: "对推抱持着认真的恋爱感情。" }
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
        desc: "「誰でも大好き」の略。特定の推しに限らず複数の対象を広く応援すること。",
        en: { term: "Multi-fandom / DD", desc: "Short for 'Daredemo Daisuki' (I love everyone). Supporting many groups or idols." },
        zh_TW: { term: "DD (誰都喜歡)", desc: "「誰でも大好き」的縮寫。廣泛支持多個對象。" },
        ko: { term: "잡덕 (Jab-deok)", desc: "'누구든 다 좋아(Daredemo Daisuki)'의 약자. 여러 대상을 폭넓게 응원하는 사람." },
        zh_CN: { term: "DD (谁都喜欢)", desc: "「誰でも大好き」的缩写。" }
    },
    {
        term: "夢女子",
        kana: "ゆめじょし",
        category: "属性・スタンス",
        desc: "キャラクターやアイドルと自分自身との関係性を想像して楽しむファンのこと。",
        en: { term: "Yume-joshi / Self-shipper", desc: "A fan who imagines a relationship between themselves and an idol or character." },
        zh_TW: { term: "夢女子", desc: "幻想自己與角色/偶像有戀愛或其他關係的女性粉絲。" },
        ko: { term: "유메죠시 (Yume-joshi)", desc: "캐릭터나 아이돌과 자신과의 관계를 상상하며 즐기는 여성 팬." },
        zh_CN: { term: "梦女子", desc: "幻想自己与角色/偶像有恋爱或其他关系的女性粉丝。" }
    },

    // 2. 取引・グッズ交換関連
    {
        term: "譲",
        kana: "ゆずり",
        category: "取引・グッズ交換",
        desc: "グッズを他者に譲りたいという意思表示。",
        en: { term: "Offer / Have (H)", desc: "Indicates items you are offering for trade or sale." },
        zh_TW: { term: "讓", desc: "表示想要轉讓出的週邊商品。" },
        ko: { term: "양도 (Yyang-do)", desc: "굿즈를 다른 사람에게 넘기겠다는 의사 표현." },
        zh_CN: { term: "让", desc: "表示想要转让出的周边商品。" }
    },
    {
        term: "求",
        kana: "もとめ",
        category: "取引・グッズ交換",
        desc: "特定のグッズを探しており、譲ってほしいという意思表示。",
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
        term: "グッズ / 物販",
        kana: "ぐっず",
        category: "取引・グッズ交換",
        desc: "キャラクターやアイドルの関連商品。",
        en: { term: "Merch", desc: "Short for Merchandise. Items related to the idol/character." },
        zh_TW: { term: "周邊 / 谷子", desc: "動漫或偶像的相關商品。「谷子」源自Goods的諧音。" },
        ko: { term: "굿즈 (Goods)", desc: "아이돌이나 캐릭터 관련 상품." },
        zh_CN: { term: "周边 / 谷子", desc: "动漫或偶像的相关商品。" }
    },
    {
        term: "比率違い",
        kana: "ひりつちがい",
        category: "取引・グッズ交換",
        desc: "人気度や希少性の差を埋めるため、1対複数などで交換比率を調整すること。",
        en: { term: "Uneven Trade / Multiple-to-one", desc: "Trading multiple items for one to balance out rarity or popularity." },
        zh_TW: { term: "比例不等", desc: "為了彌補熱門程度或稀有度的落差，以1換多等比例進行交換。" },
        ko: { term: "비율 차이 (Bi-yul)", desc: "인기도나 희소성 차이를 메우기 위해 1:N 등으로 교환 비율을 조정하는 것." },
        zh_CN: { term: "比例不等", desc: "为了弥补热门程度或稀有度的落差。" }
    },
    {
        term: "わらしべ",
        kana: "わらしべ",
        category: "取引・グッズ交換",
        desc: "交換を繰り返し、最終的に目当てのグッズを手に入れること。",
        en: { term: "Upgrade Trading / Straw Millionaire policy", desc: "Trading up repetitively to eventually get a highly desired or rare item." },
        zh_TW: { term: "稻草換黃金", desc: "透過重複交換，最終換到心儀的高價或熱門商品。" },
        ko: { term: "와라시베 (Wa-ra-si-be)", desc: "교환을 반복하여 최종적으로 원하는 굿즈를 손에 넣는 행위." },
        zh_CN: { term: "稻草换黄金", desc: "通过重复交换，最终换到心仪的高价或热门商品。" }
    },

    // 4. 感情・スラング
    {
        term: "尊い",
        kana: "とうとい",
        category: "感情・スラング",
        desc: "推しが素晴らしすぎて、信仰心に近い感動を覚える状態。",
        en: { term: "Precious / Sacred", desc: "Used when your bias is so perfect that you feel overwhelmed. Similar to 'I can't even...'" },
        zh_TW: { term: "尊 / 太神了", desc: "形容推太美好，讓人產生近乎信仰的感動。" },
        ko: { term: "귀하다 / 존엄하다", desc: "최애가 너무 완벽해서 말로 표현할 수 없을 정도의 감동." },
        zh_CN: { term: "尊 / AWSL", desc: "形容推太美好，令人感动（AWSL=啊我死了）。" }
    },
    {
        term: "しんどい",
        kana: "しんどい",
        category: "感情・スラング",
        desc: "好きという感情が強すぎて、胸が苦しくなるほど辛い状態。",
        en: { term: "I'm dying / So emotional it hurts", desc: "When affection for the bias is so strong that it becomes physically overwhelming." },
        zh_TW: { term: "好痛苦 / 帥到心累", desc: "形容喜愛的感情太強烈，讓人感到心痛或無法負荷。" },
        ko: { term: "힘들다 (Sim-deul-da)", desc: "좋아하는 감정이 너무 커서 가슴이 아플 정도로 괴로운 상태." },
        zh_CN: { term: "好痛苦 / 帅到心累", desc: "形容压倒性的美好状态。" }
    },
    {
        term: "優勝",
        kana: "ゆうしょう",
        category: "感情・スラング",
        desc: "「誰よりも一番可愛かった」「最高の体験をした」など、圧倒的に素晴らしい状態。",
        en: { term: "Winning / Best Experience", desc: "Used to describe an overwhelming victory in terms of cuteness or experience." },
        zh_TW: { term: "贏了 / 最高", desc: "形容「比誰都可愛」「經歷了最棒的一刻」等壓倒性的美好狀態。" },
        ko: { term: "우승 (U-seung)", desc: "'누구보다 가장 귀여웠다', '최고의 경험을 했다' 등 압도적으로 훌륭한 상태." },
        zh_CN: { term: "赢了 / 最高", desc: "形容压倒性的美好状态。" }
    },

    // 6. ネットリテラシー
    {
        term: "地雷",
        kana: "じらい",
        category: "ネットリテラシー",
        desc: "自分が極度に苦手、または不快に感じる特定のシチュエーションやジャンルのこと。",
        en: { term: "Hard No / Landmine / Squick", desc: "Content or themes that you strongly dislike or find uncomfortable." },
        zh_TW: { term: "雷區 / 地雷", desc: "自己極度討厭或感到不適的特定情境、配對或領域。" },
        ko: { term: "지뢰 (Ji-roi)", desc: "자신이 극도로 싫어하거나 불쾌하게 느끼는 특정 상황이나 장르." },
        zh_CN: { term: "雷区 / 地雷", desc: "自己极度讨厌或感到不适的特定内容。" }
    }
];

function renderGlossary() {
    const categoryView = document.getElementById('category-view');
    const syllabaryView = document.getElementById('syllabary-view');
    const currentLang = localStorage.getItem('selectedLanguage') || 'ja';

    if (!categoryView || !syllabaryView) return;

    // Render Category View
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

    // Render Syllabary View (Only show if lang is ja)
    const syllabaryContainer = document.querySelector('.syllabary-container');
    const tabs = document.querySelector('.view-tabs'); // Fixed selector

    if (currentLang !== 'ja') {
        syllabaryView.style.display = 'none';
        if (tabs) {
            tabs.style.display = 'none';
        }
        if (categoryView) categoryView.style.display = 'block'; // Force category view for non-JA
    } else {
        if (tabs) tabs.style.display = 'flex';
        syllabaryView.style.display = '';
        const groups = {
            'あ': /^[あ-お]/, 'か': /^[か-ご]/, 'さ': /^[さ-ぞ]/, 'た': /^[た-ど]/,
            'な': /^[な-の]/, 'は': /^[は-ぼぱ-ぽ]/, 'ま': /^[ま-も]/, 'や': /^[や-よ]/,
            'ら': /^[ら-ろ]/, 'わ': /^[わ-ん]/, '他': /^[^あ-ん]/
        };

        const sortedTerms = [...glossaryData].sort((a, b) => a.kana.localeCompare(b.kana, 'ja'));

        let syllabaryHtml = '';
        Object.entries(groups).forEach(([label, regex]) => {
            const groupTerms = sortedTerms.filter(t => regex.test(t.kana));
            if (groupTerms.length > 0) {
                syllabaryHtml += `<div class="syllabary-section">
                <h3 class="syllabary-title">${label}行</h3>
                <div class="syllabary-cards">
                    ${groupTerms.map(t => `
                        <div class="term-card">
                            <div class="term-header">
                                <span class="term-name">${t.term}</span>
                                <span class="term-reading">${t.kana}</span>
                            </div>
                            <p class="term-meaning">${t.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>`;
            }
        });
        syllabaryView.innerHTML = syllabaryHtml;
    }
}

function switchView(mode) {
    const categoryView = document.getElementById('category-view');
    const syllabaryView = document.getElementById('syllabary-view');
    const tabCategory = document.getElementById('tab-category');
    const tabSyllabary = document.getElementById('tab-syllabary');

    if (!categoryView || !syllabaryView) return;

    if (mode === 'category') {
        categoryView.style.display = 'block';
        syllabaryView.style.display = 'none';
        tabCategory.classList.add('active');
        tabSyllabary.classList.remove('active');
    } else {
        categoryView.style.display = 'none';
        syllabaryView.style.display = 'block';
        tabCategory.classList.remove('active');
        tabSyllabary.classList.add('active');
    }
}

// Ensure glossary renders if we are on the glossary page
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('category-view')) {
        renderGlossary();
    }
    // Also re-render on language change
    const originalTranslatePage = translatePage;
    translatePage = function () {
        originalTranslatePage();
        if (document.getElementById('category-view')) {
            renderGlossary();
        }
    };
});

// Close modal when clicking outside the content
window.onclick = function (event) {
    const modal = document.getElementById('search-modal');
    if (event.target == modal) {
        closeSearch();
    }
}
