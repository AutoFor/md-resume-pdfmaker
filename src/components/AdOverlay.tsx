"use client"; // クライアントサイドで動作（カウントダウン・イベント処理）

import { useState, useEffect, useCallback } from "react"; // 状態管理・副作用・コールバック

/** AdOverlay の Props 型定義 */
interface AdOverlayProps {
  onClose: () => void; // オーバーレイを閉じた時のコールバック
}

/** PDF ダウンロード前のインタースティシャル広告オーバーレイ */
export function AdOverlay({ onClose }: AdOverlayProps) {
  const [countdown, setCountdown] = useState(5); // カウントダウン秒数（初期値5秒）

  // 1秒ごとにカウントダウンを減らすタイマー
  useEffect(() => {
    if (countdown <= 0) return; // 0以下なら停止
    const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000); // 1秒後にデクリメント
    return () => clearTimeout(timer); // クリーンアップ
  }, [countdown]);

  /** 閉じるボタンのクリックハンドラ */
  const handleClose = useCallback(() => {
    onClose(); // 親コンポーネントにクローズを通知
  }, [onClose]);

  return (
    <div className="ad-overlay"> {/* 全画面オーバーレイ背景 */}
      <div className="ad-overlay-card"> {/* 中央カード */}
        <h2 className="ad-overlay-title">スポンサー</h2> {/* タイトル */}

        {/* 広告プレースホルダー（将来 AdSense 等に差し替え可能） */}
        <div className="ad-overlay-slot">
          <p className="ad-overlay-placeholder">広告スペース</p> {/* 仮テキスト */}
        </div>

        {/* カウントダウン表示 or 閉じるボタン */}
        {countdown > 0 ? (
          <p className="ad-overlay-countdown">
            {countdown} 秒後に閉じることができます… {/* 残り秒数を表示 */}
          </p>
        ) : (
          <button onClick={handleClose} className="ad-overlay-close-btn">
            閉じて PDF を保存 {/* カウント終了後に有効化されるボタン */}
          </button>
        )}
      </div>
    </div>
  );
}
