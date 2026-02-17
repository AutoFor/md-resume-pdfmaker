import fs from "fs"; // ファイル読み込み用
import path from "path"; // パス結合用
import matter from "gray-matter"; // frontmatter パース用
import { marked } from "marked"; // Markdown → HTML 変換用

/** パース結果の型定義 */
export interface ResumeData {
  html: string; // 変換後の HTML
  frontmatter: Record<string, unknown>; // frontmatter のメタデータ
}

/** resume.md を読み込み、HTML に変換する（ビルド時のみ実行） */
export async function getResumeData(): Promise<ResumeData> {
  const filePath = path.join(process.cwd(), "resume.md"); // プロジェクトルートの resume.md
  const fileContents = fs.readFileSync(filePath, "utf-8"); // ファイル読み込み

  const { data, content } = matter(fileContents); // frontmatter とコンテンツを分離
  const html = await marked(content); // Markdown を HTML に変換

  return {
    html,
    frontmatter: data,
  };
}
