# Search Console / Webmaster Tools 登録手順

この作業はサイト所有者のGoogle・Microsoft・DNSアカウントが必要なため、リポジトリだけでは完了できません。デプロイ後に以下を実施してください。

## Google Search Console

1. `lovame-official.com` をドメインプロパティとして追加する。
2. 表示されたDNS TXTレコードをドメインのDNSへ追加し、所有権を確認する。
3. `https://lovame-official.com/sitemap.xml` を送信する。
4. URL検査で `/`、`/articles/`、主要記事を検査し、インデックス登録をリクエストする。
5. 「ページ」「ウェブに関する主な指標」「検索パフォーマンス」のメール通知を有効にする。

## Bing Webmaster Tools

1. Google Search Consoleからサイトをインポートするか、DNSで所有権を確認する。
2. `https://lovame-official.com/sitemap.xml` を送信する。
3. URL検査で主要URLが取得可能であることを確認する。

## 月次運用

- インデックス未登録・404・リダイレクトエラーを確認する。
- 検索クエリ、表示回数、CTR、平均掲載順位を前月と比較する。
- 新規・更新記事のURLとサイトマップの最終更新日を確認する。
- Core Web Vitalsの「不良」URLを優先して修正する。
