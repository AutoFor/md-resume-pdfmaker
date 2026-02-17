"use client"; // クライアントサイドで動作（localStorage, DOM 操作）

import { useEffect, useState } from "react"; // 状態管理とライフサイクル

/** ダーク/ライトモード切替ボタン */
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false); // 現在のテーマ状態
  const [mounted, setMounted] = useState(false); // マウント状態（SSR 対策）

  useEffect(() => {
    // 初期テーマを判定（localStorage 優先、なければ OS 設定）
    const stored = localStorage.getItem("theme"); // 保存済みのテーマ
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches; // OS のダークモード設定
    const dark = stored === "dark" || (!stored && prefersDark); // ダークモードかどうか
    setIsDark(dark);
    setMounted(true); // マウント完了
  }, []);

  /** テーマを切り替える */
  const toggleTheme = () => {
    const newDark = !isDark; // 現在の反対に切替
    setIsDark(newDark);
    document.documentElement.setAttribute("data-theme", newDark ? "dark" : "light"); // HTML 要素にテーマ属性を設定
    localStorage.setItem("theme", newDark ? "dark" : "light"); // テーマを永続化
  };

  if (!mounted) return null; // SSR 時はレンダリングしない（ハイドレーション不一致防止）

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={isDark ? "ライトモードに切替" : "ダークモードに切替"}
      title={isDark ? "ライトモードに切替" : "ダークモードに切替"}
    >
      {isDark ? "☀️" : "🌙"} {/* 太陽: ライトに切替、月: ダークに切替 */}
    </button>
  );
}
