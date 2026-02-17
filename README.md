# md-resume-pdfmaker

Markdown で職務経歴書を管理し、PDF に変換するツール。

## セットアップ

### システム依存（Linux）

Puppeteer（PDF 生成エンジン）に必要なライブラリをインストールします。

```bash
sudo apt-get install -y libnspr4 libnss3 libatk1.0-0 libatk-bridge2.0-0 \
  libcups2 libdrm2 libxkbcommon0 libxcomposite1 libxdamage1 libxfixes3 \
  libxrandr2 libgbm1 libpango-1.0-0 libcairo2 libasound2 libatspi2.0-0
```

> macOS の場合はこのステップは不要です。

### npm パッケージ

```bash
npm install
```

## 使い方

### PDF を生成

```bash
npm run build
```

`output/resume.pdf` が生成されます。

### ファイル変更時に自動ビルド

```bash
npm run watch
```

`resume.md` または `style.css` の変更を検知して自動で PDF を再生成します。

## ファイル構成

| ファイル | 説明 |
|---------|------|
| `resume.md` | 職務経歴書の本文（Markdown） |
| `style.css` | PDF のスタイル（A4・日本語フォント対応） |
| `output/` | PDF 出力先（Git 管理外） |

## カスタマイズ

- `resume.md` の内容を自分の経歴に書き換えてください
- `style.css` でフォントや配色を調整できます
- `resume.md` の frontmatter で PDF オプション（余白など）を変更できます
