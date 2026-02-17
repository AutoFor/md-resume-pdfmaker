/** 履歴書 HTML レンダラー */
export function ResumeContent({ html }: { html: string }) {
  return (
    <article
      className="resume-content" // resume.css のスコープ
      dangerouslySetInnerHTML={{ __html: html }} // Markdown から変換した HTML を挿入
    />
  );
}
