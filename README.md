# md-resume-pdfmaker

Markdown で職務経歴書を管理し、Web ページとして表示・PDF ダウンロードが可能な Next.js アプリ。

## 機能

- Markdown（`resume.md`）から職務経歴書を自動生成
- ダークモード / ライトモード切替
- ブラウザの印刷機能で A4 PDF をダウンロード
- レスポンシブ対応（モバイル表示）
- Azure Static Web Apps にデプロイ可能

## セットアップ

```bash
npm install
```

## 開発

```bash
npm run dev
```

http://localhost:3000 で確認できます。

## ビルド（静的エクスポート）

```bash
npm run build
```

`out/` ディレクトリに静的ファイルが生成されます。

## PDF ダウンロード

Web ページ上部の「PDF ダウンロード」ボタンをクリックすると、ブラウザの印刷ダイアログが開きます。
「PDF に保存」を選択すると A4 フォーマットの PDF が生成されます。

## デプロイ（Azure Static Web Apps）

1. Azure Portal で Static Web Apps リソースを作成
2. デプロイトークンを GitHub リポジトリの Secrets に `AZURE_STATIC_WEB_APPS_API_TOKEN` として設定
3. `master` ブランチにプッシュすると自動デプロイされます

## ファイル構成

| ファイル / ディレクトリ | 説明 |
|----------------------|------|
| `resume.md` | 職務経歴書の本文（Markdown） |
| `src/app/` | Next.js App Router（ページ、レイアウト、CSS） |
| `src/components/` | React コンポーネント |
| `src/lib/markdown.ts` | Markdown → HTML 変換パイプライン |
| `out/` | ビルド出力（Git 管理外） |

## カスタマイズ

- `resume.md` の内容を自分の経歴に書き換えてください
- `src/app/resume.css` でスタイルを調整できます
- `src/app/globals.css` でテーマカラーを変更できます

## 技術スタック

- [Next.js](https://nextjs.org/) — React フレームワーク（静的エクスポート）
- [marked](https://marked.js.org/) — Markdown パーサー
- [gray-matter](https://github.com/jonschlinkert/gray-matter) — Frontmatter パーサー
- [Azure Static Web Apps](https://azure.microsoft.com/ja-jp/products/app-service/static) — ホスティング
