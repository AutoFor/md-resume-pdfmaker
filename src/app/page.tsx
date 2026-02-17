import { getResumeMarkdown } from "@/lib/markdown"; // Markdown 読み込み
import { Editor } from "@/components/Editor"; // 2ペインエディタ

/** メインページ（Server Component — ビルド時に resume.md を読み込む） */
export default function Home() {
  const defaultMarkdown = getResumeMarkdown(); // resume.md の本文を初期値として取得

  return <Editor defaultMarkdown={defaultMarkdown} />; // クライアント側で編集＆プレビュー
}
