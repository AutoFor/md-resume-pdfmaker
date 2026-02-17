import type { Metadata } from "next"; // メタデータ型
import { Noto_Sans_JP } from "next/font/google"; // 日本語フォント
import "./globals.css"; // グローバルスタイル
import "./resume.css"; // 履歴書スタイル

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"], // ラテン文字サブセット
  weight: ["400", "700"], // 標準と太字
  display: "swap", // フォント読み込み中はフォールバック表示
});

export const metadata: Metadata = {
  title: "職務経歴書 | md-resume-pdfmaker", // ページタイトル
  description: "Markdown で管理する職務経歴書 Web ビューア", // 説明文
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      {/* suppressHydrationWarning: ダークモードの初期化スクリプトによる差分を抑制 */}
      <head>
        {/* ページ読み込み時にダークモード設定を即座に適用（FOUC 防止） */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}
