"use client"; // クライアントサイドで動作（リアルタイム編集・プレビュー）

import { useState, useMemo, useEffect } from "react"; // 状態管理・メモ化・ライフサイクル
import { marked, Renderer } from "marked"; // Markdown → HTML 変換（クライアント側）
import { ThemeToggle } from "./ThemeToggle"; // テーマ切替ボタン

/** mailto リンクをプレーンテキストに変換するカスタムレンダラー */
const renderer = new Renderer();
renderer.link = ({ href, text }) => {
  if (href.startsWith("mailto:")) return text; // メールリンクはテキストのみ返す
  return `<a href="${href}">${text}</a>`; // それ以外は通常のリンク
};

/** 2ペインエディタ（左: Markdown 入力、右: ライブプレビュー） */
export function Editor({ defaultMarkdown }: { defaultMarkdown: string }) {
  const [markdown, setMarkdown] = useState(defaultMarkdown); // Markdown テキスト状態
  const [today, setToday] = useState(""); // 今日の日付（SSR 不一致防止のため useEffect で設定）

  useEffect(() => {
    const now = new Date(); // 現在日時を取得
    setToday(`${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日 現在`); // 和暦フォーマット
  }, []);

  // Markdown が変更されるたびに HTML に変換（メモ化で不要な再変換を防止）
  const html = useMemo(() => {
    return marked(markdown, { renderer }) as string; // カスタムレンダラーで mailto を除去
  }, [markdown]);

  /** プレビュー部分のみを印刷（PDF 保存用） */
  const handlePrint = () => {
    window.print(); // @media print CSS でエディタ側は非表示になる
  };

  return (
    <div className="editor-layout">
      {/* ===== ヘッダー ===== */}
      <header className="site-header">
        <div className="header-inner">
          <h1 className="site-title">md-resume-pdfmaker</h1>
          <div className="header-actions">
            <ThemeToggle />
            <button onClick={handlePrint} className="pdf-button">
              PDF ダウンロード
            </button>
          </div>
        </div>
      </header>

      {/* ===== 2ペイン ===== */}
      <div className="split-pane">
        {/* 左ペイン: Markdown エディタ */}
        <div className="pane pane-editor">
          <div className="pane-header">Markdown</div>
          <textarea
            className="markdown-textarea"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)} // 入力をリアルタイムに反映
            spellCheck={false} // スペルチェックを無効化
          />
        </div>

        {/* 右ペイン: ライブプレビュー（PDF 風表示） */}
        <div className="pane pane-preview">
          <div className="pane-header">プレビュー</div>
          <div className="preview-scroll">
            <article className="resume-content">
              {today && <div className="resume-date">{today}</div>}
              <div dangerouslySetInnerHTML={{ __html: html }} /> {/* 変換した HTML を挿入 */}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
