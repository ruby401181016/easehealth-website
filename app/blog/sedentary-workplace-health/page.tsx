"use client";

import Navbar from "@/components/Navbar";

// 極簡線條插畫組件 (無須額外圖片檔)
const Illustration1 = () => (
  <svg viewBox="0 0 200 200" style={{ width: "100%", maxWidth: "160px", margin: "48px auto", display: "block" }}>
    <circle cx="100" cy="80" r="30" fill="none" stroke="#2d2d2d" strokeWidth="2" />
    <path d="M100 110v50M80 170l20-30 20 30M100 130l-30-20M100 130l30-20" stroke="#2d2d2d" strokeWidth="2" />
    <path d="M70 50L40 20M130 50L160 20M70 110L40 140M130 110L160 140" stroke="#aaa" strokeWidth="1.5" strokeDasharray="4 4" />
  </svg>
);

const Illustration2 = () => (
  <svg viewBox="0 0 200 200" style={{ width: "100%", maxWidth: "160px", margin: "48px auto", display: "block" }}>
    <path d="M60 40c20-10 40-10 60 0s40 10 60 0" fill="none" stroke="#2d2d2d" strokeWidth="2" />
    <path d="M80 60l-20 40M100 60l0 40M120 60l20 40" stroke="#aaa" strokeWidth="2" />
    <circle cx="80" cy="50" r="5" fill="#2d2d2d" />
    <circle cx="100" cy="50" r="5" fill="#2d2d2d" />
    <circle cx="120" cy="50" r="5" fill="#2d2d2d" />
  </svg>
);

const Illustration3 = () => (
  <svg viewBox="0 0 200 200" style={{ width: "100%", maxWidth: "160px", margin: "48px auto", display: "block" }}>
    <path d="M100 40v100M70 70l60 60M130 70l-60 60" stroke="#2d2d2d" strokeWidth="2" />
    <circle cx="100" cy="100" r="40" fill="none" stroke="#aaa" strokeWidth="1.5" strokeDasharray="6 6" />
    <path d="M140 100a40 40 0 1 0-80 0" fill="none" stroke="#2d2d2d" strokeWidth="2" />
  </svg>
);

const Illustration4 = () => (
  <svg viewBox="0 0 200 200" style={{ width: "100%", maxWidth: "160px", margin: "48px auto", display: "block" }}>
    <circle cx="100" cy="100" r="20" fill="none" stroke="#2d2d2d" strokeWidth="2" />
    <circle cx="100" cy="100" r="40" fill="none" stroke="#aaa" strokeWidth="1.5" />
    <circle cx="100" cy="100" r="60" fill="none" stroke="#aaa" strokeWidth="1" strokeDasharray="4 4" />
  </svg>
);

export default function SedentaryWorkplaceHealthPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8f6f2",
        color: "#2d2d2d",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <Navbar />

      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "100px 24px 140px" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.26em", color: "#aaa", marginBottom: "20px", textTransform: "uppercase" }}>
          WORKPLACE HEALTH ／ 5 MIN READ
        </p>

        <h1 style={{ fontSize: "46px", lineHeight: 1.28, fontWeight: 600, marginBottom: "28px", letterSpacing: "0.02em" }}>
          為什麼久坐比你想像中更傷身？
        </h1>

        <div style={{ display: "flex", alignItems: "center", gap: "16px", borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "16px 0", marginBottom: "56px" }}>
          <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#ece7df", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", color: "#888", fontFamily: "monospace" }}>E</div>
          <p style={{ fontSize: "13px", color: "#888", margin: 0, letterSpacing: "0.05em" }}>
            EASE 健康觀點 ── Published in June, 2026
          </p>
        </div>

        <p style={{ fontSize: "20px", lineHeight: "1.95", color: "#333", marginBottom: "64px", fontWeight: 400, letterSpacing: "0.01em" }}>
          很多人以為久坐不外乎就是腰痠背痛。然而，對長時間黏在辦公椅上的上班族來說，久坐真正蠶食鯨吞的，是我們的身體活動能力、代謝效率，以及日常的專注精神狀態。
        </p>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "18px", letterSpacing: "0.02em" }}>久坐不只是姿勢問題</h2>
          <Illustration1 />
          <p style={{ fontSize: "16px", lineHeight: "1.95", color: "#555", fontWeight: 300 }}>
            長時間維持同一個姿勢，會讓肩頸、下背與髖部長時間處在極低的活動狀態。久而久之，大腦為了節省能量，會開始用代償方式完成日常動作。例如用腰椎取代原本該轉動的髖部、用肩頸生硬地承擔頭部壓力，這才是反覆痠痛與慢性疲勞揮之不去的根本原因。
          </p>
        </section>

        {/* 您喜歡的引言樣式 (完全保留) */}
        <div style={{ margin: "72px 0", padding: "40px 32px", borderLeft: "2px solid #2d2d2d", background: "#ece7df", borderRadius: "2px" }}>
          <p style={{ fontSize: "22px", lineHeight: "1.7", fontWeight: 500, color: "#2d2d2d", margin: 0, letterSpacing: "0.03em" }}>
            「真正的健康風險，不在於你選擇坐著，而是在於你『一直』坐著。」
          </p>
          <p style={{ fontSize: "12px", color: "#888", marginTop: "12px", marginBottom: 0, letterSpacing: "0.1em" }}>
            ── EASE INSIGHTS ／ 職場與身體管理
          </p>
        </div>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "18px", letterSpacing: "0.02em" }}>上班族常見的久坐連鎖反應</h2>
          <Illustration2 />
          <p style={{ fontSize: "16px", lineHeight: "1.95", color: "#555", fontWeight: 300 }}>
            最典型的連鎖狀況包含肩頸緊繃、下背痠痛、髖關節僵硬、核心穩定度喪失。這些問題在初期往往只表現為「小小的微恙」或疲勞感，但如果長期忽略，身體的排列結構會逐漸定型，進而實質影響日常的工作專注力與整體生活品質。
          </p>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "18px", letterSpacing: "0.02em" }}>從每天 3 分鐘開始，重置身體狀態</h2>
          <Illustration3 />
          <p style={{ fontSize: "16px", lineHeight: "1.95", color: "#555", fontWeight: 300 }}>
            改善久坐的習慣，不一定要從浩大的健身計畫開始。試著每工作 60 分鐘起身走動 2 到 3 分鐘、在座位旁做幾次徒手深蹲、肩膀繞環或簡單的髖部活動。這小小的幾分鐘能像按下一鍵「重新整理」，幫助肌肉與神經重新獲得良性刺激。
          </p>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "18px", letterSpacing: "0.02em" }}>真正可持續的健康</h2>
          <Illustration4 />
          <p style={{ fontSize: "16px", lineHeight: "1.95", color: "#555", fontWeight: 300 }}>
            可持續的企業健康管理，透過設計更容易執行的微小日常行動，讓健康無痛地自然融入工作與生活。健康不是靠一次高強度的補償性運動完成，而是來自每天我們為身體做出的無數個微小好選擇。
          </p>
        </section>

        <div style={{ marginTop: "80px", paddingTop: "40px", borderTop: "1px solid rgba(0,0,0,0.12)" }}>
          <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#666", fontWeight: 300, fontStyle: "italic" }}>
            如果您的企業福委或 HR 單位希望協助同仁改善久坐帶來的慢性身體不適，歡迎參考 EASE 的「疼痛修復」系列主題與「健康工作坊」，我們致力於用最低門檻、最符合辦公情境的方式，帶領同仁重新認識、並溫和修復自己的身體。
          </p>
        </div>
      </article>
    </main>
  );
}