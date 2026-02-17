import { getResumeData } from "@/lib/markdown"; // Markdown 処理パイプライン
import { Header } from "@/components/Header"; // ヘッダーコンポーネント
import { ResumeContent } from "@/components/ResumeContent"; // 履歴書表示コンポーネント

/** メインページ（Server Component — ビルド時に静的生成） */
export default async function Home() {
  const { html } = await getResumeData(); // ビルド時に resume.md を HTML に変換

  return (
    <>
      <Header /> {/* ヘッダー（タイトル、テーマ切替、PDF ボタン） */}
      <main className="main-container">
        <ResumeContent html={html} /> {/* 履歴書の HTML を表示 */}
      </main>
    </>
  );
}
