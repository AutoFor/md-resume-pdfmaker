"use client"; // クライアントサイドで動作（window.print 使用）

import { ThemeToggle } from "./ThemeToggle"; // テーマ切替ボタン

/** ページヘッダー（タイトル、テーマ切替、PDF ダウンロードボタン） */
export function Header() {
  /** ブラウザの印刷ダイアログを開く（PDF 保存用） */
  const handlePrint = () => {
    window.print(); // ブラウザネイティブの印刷機能を呼出
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <h1 className="site-title">職務経歴書</h1> {/* サイトタイトル */}
        <div className="header-actions">
          <ThemeToggle /> {/* ダーク/ライトモード切替 */}
          <button onClick={handlePrint} className="pdf-button">
            PDF ダウンロード {/* window.print() で PDF 保存 */}
          </button>
        </div>
      </div>
    </header>
  );
}
