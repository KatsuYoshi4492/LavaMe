# LovaMe

推し活・グッズ交換の初心者向け静的ガイドサイトです。

## サイト生成

記事メタデータ、構造化データ、記事一覧、多言語ランディングページ、旧URLリダイレクト、サイトマップは次のコマンドで再生成できます。

```bash
node tools/build-site.mjs
```

## 検証

```bash
node --check script.js
node --check glossary.js
node tools/validate-site.mjs
```

検証スクリプトは、メタデータ、JSON-LD、画像寸法、内部リンク、サイトマップ、仮の広告ID、同意前の追跡スクリプト埋め込みを確認します。

## デプロイ後の作業

- [Search Console / Bing Webmaster Tools 登録手順](docs/search-console-setup.md)
- Googleリッチリザルトテストでトップ、記事、パンくず、FAQを確認
- PageSpeed Insightsでモバイル・デスクトップを測定
- 旧日本語URLから新しい `/articles/` URLへの転送を確認
