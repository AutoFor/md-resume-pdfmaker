import fs from "fs"; // ファイル読み込み用
import path from "path"; // パス結合用
import matter from "gray-matter"; // frontmatter パース用

/** resume.md の Markdown 本文を返す（ビルド時のみ実行） */
export function getResumeMarkdown(): string {
  const filePath = path.join(process.cwd(), "resume.md"); // プロジェクトルートの resume.md
  const fileContents = fs.readFileSync(filePath, "utf-8"); // ファイル読み込み
  const { content } = matter(fileContents); // frontmatter を除いた本文を取得
  return content;
}
