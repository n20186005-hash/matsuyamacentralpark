# 松山中央公園 観光案内サイト

坊っちゃんスタジアムを中心に、野球文化、スポーツ施設、モデルコース、アクセスを案内する日本語サイトです。実在する施設写真を使用し、球場ブルー、紙面のような生成り色、球券とスコアボードを思わせる情報設計でまとめています。

## 収録ページ

- `/`：トップページ
- `/facilities/`：坊っちゃんスタジアム、の・ボールミュージアム、アクアパレットまつやま、愛媛県武道館などの施設案内
- `/stories/`：正岡子規、近藤兵太郎、台湾野球、オールスターなどの物語
- `/visit/`：野球文化、親子、建築・写真、ジョギングのモデルコース
- `/access/`：JR、バス、車、駐車場、地図
- `/credits/`：写真の作者、原典、ライセンス
- `/404.html`：日本語404ページ

## 技術構成

- Astro `7.1.6`
- Tailwind CSS `4.3.3`
- TypeScript `7.0.2`
- pnpm `11.20.0`
- Wrangler `4.113.0`
- Cloudflare Workers Static Assets
- データベース、ログイン、CMSなし

依存関係は `package.json` で固定しています。Node.js 22以降を使用してください。

## 開発

```bash
corepack enable
corepack prepare pnpm@11.20.0 --activate
pnpm install
pnpm dev
```

## 確認とビルド

```bash
pnpm check
pnpm build
```

生成物は `dist/` に出力されます。

## Cloudflare Workersへ公開

```bash
pnpm deploy
```

`wrangler.jsonc` の `name` は、実際のWorker名に合わせて変更できます。

## ビルド済み静的版

このプロジェクトには、確認済みの静的出力を `dist/` に同梱しています。依存関係を入れずに内容を見る場合は、任意の静的サーバーで `dist/` を公開してください。

```bash
python3 -m http.server 4173 --directory dist
```

## 内容の編集

施設、物語、モデルコース、交通案内、FAQ、写真クレジットは次のファイルに集約しています。

```text
src/data/content.json
```

主要なデザインは次のファイルです。

```text
src/styles/site.css
```

ビルド済み静的版も更新する場合は、内容の編集後に次を実行します。

```bash
node scripts/export-static.mjs
```

## Google Analytics 4

任意で `.env` に測定IDを設定できます。

```bash
PUBLIC_GA_ID=G-XXXXXXXXXX
```

設定しない場合、計測スクリプトは出力されません。

## 写真

写真ごとの作者、原典、利用条件はサイト内の `/credits/` と `src/data/content.json` に記載しています。クリエイティブ・コモンズ表示4.0の写真については、公開時もクレジット表示を残してください。
