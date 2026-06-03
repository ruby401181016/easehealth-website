"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function BodyUserManualPage() {
  const [activeModule, setActiveModule] = useState(0);

  // 💡 同步全站 EASE 風格 A 高級質感雙字體系統
  const serifFont = "'Cormorant Garamond', 'Playfair Display', 'Noto Serif TC', Georgia, serif";
  const sansFont = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans TC', Helvetica, Arial, sans-serif";

  const courseSyllabus = [
    {
      num: "01",
      title: "你真的會使用自己的身體嗎？",
      details:
        "透過簡單測試與互動體驗，讓員工理解日常姿勢、久坐與錯誤用力模式如何影響身體表現。",
    },
    {
      num: "02",
      title: "常見身體代償與錯誤用力模式",
      details:
        "從圓肩、核心失效、下背壓力與肩頸代償切入，認識上班族最常見的身體使用問題。",
    },
    {
      num: "03",
      title: "體感差異實驗：啟動前後有什麼不同？",
      details:
        "透過核心啟動、呼吸調整與肩膀穩定練習，讓員工實際感受身體控制前後的差異。",
    },
    {
      num: "04",
      title: "重新建立更有效率的身體使用方式",
      details:
        "透過基礎 movement pattern，重新學會 squat、hinge、push 與 carry 等日常動作能力。",
    },
  ];

  // 全站一致的高訂霧灰白 Footer 聯絡文字樣式
  const contactTextStyle = {
    fontFamily: sansFont,
    color: "#b8b3ac",
    fontSize: "13.5px",
    lineHeight: "2.0",
    fontWeight: 300,
    marginBottom: "10px",
    letterSpacing: "0.04em",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8f6f2", // EASE 經典極簡米白
        color: "#2d2d2d",
        fontFamily: sansFont,
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <Navbar />

      {/* Hero Section (課程圖文介紹區塊) */}
      <section
        style={{
          display: "flex",
          maxWidth: "1180px",
          margin: "0 auto",
          width: "100%",
          padding: "80px 24px 70px", // 完美平衡緊湊的上下白
          flexWrap: "wrap",
          alignItems: "center",
          gap: "64px",
        }}
      >
        {/* 左側形象影格 */}
        <div style={{ flex: "1 1 440px" }}>
          <div
            style={{
              width: "100%",
              aspectRatio: "16 / 10", // 電影感黃金比例
              position: "relative",
              overflow: "hidden",
              background: "#ece7df",
              borderRadius: "4px",   // 精品微圓角
              boxShadow: "0 20px 40px rgba(0,0,0,0.015)",
            }}
          >
            <img
              src="/人體.png"
              alt="body user manual"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>

        {/* 右側文字內容 */}
        <div style={{ flex: "1 1 440px", display: "flex", flexDirection: "column" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.25em", color: "#8a847c", marginBottom: "24px", textTransform: "uppercase", fontWeight: 400 }}>
            <a href="/programs/workshops" style={{ color: "#8a847c", textDecoration: "none" }}>Workshops</a> &nbsp; / &nbsp; Program Details
          </p>

          <h1 style={{ fontFamily: serifFont, fontSize: "clamp(34px, 4.5vw, 44px)", fontWeight: 400, lineHeight: "1.3", marginBottom: "24px", letterSpacing: "0.03em" }}>
            人體使用說明書
          </h1>

          <p style={{ fontSize: "14.5px", lineHeight: "2.1", color: "#5a5550", fontWeight: 300, marginBottom: "36px" }}>
            很多身體不適與動作卡關，其實來自於長期錯誤的身體使用方式。
            <br />
            本工作坊透過體驗式互動，協助員工重新認識並學會更有效率地使用身體。
          </p>

          {/* 工作坊目標飾條 */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <div style={{ width: "42px", height: "42px", borderRadius: "50%", border: "1px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.6)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 20V12" stroke="#8a847c" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 12C12 8 15 5 19 5C19 9 16 12 12 12Z" stroke="#8a847c" strokeWidth="1.5" strokeLinejoin="round"/><path d="M12 15C12 12 10 9 5 9C5 13 7 15 12 15Z" stroke="#8a847c" strokeWidth="1.5" strokeLinejoin="round"/></svg>
            </div>
            <span style={{ fontSize: "13px", fontWeight: 500, color: "#2d2d2d", letterSpacing: "0.15em" }}>工作坊目標</span>
            <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.06)" }} />
          </div>

          <p style={{ fontSize: "14px", lineHeight: "2.0", color: "#666", fontWeight: 300 }}>
            協助員工透過體感差異與動作體驗，理解身體使用方式如何影響姿勢、力量與日常不適，建立更有效率的 movement pattern。
          </p>
        </div>
      </section>

      {/* Syllabus Section (沉穩手風琴大綱) */}
      <section style={{ background: "#ece7df", padding: "100px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ marginBottom: "56px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#8a847c", textTransform: "uppercase", marginBottom: "12px" }}>Workshop Flow</p>
            <h2 style={{ fontFamily: serifFont, fontSize: "34px", fontWeight: 400, letterSpacing: "0.03em" }}>工作坊內容</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {courseSyllabus.map((module, index) => {
              const isOpen = activeModule === index;
              return (
                <div key={module.num} style={{ borderTop: "1px solid rgba(0,0,0,0.06)", padding: "30px 0", cursor: "pointer" }} onClick={() => setActiveModule(isOpen ? -1 : index)}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                      <span style={{ fontSize: "12px", color: "#9a9a9a", fontFamily: "monospace" }}>{module.num}</span>
                      <h3 style={{ fontSize: "clamp(16px, 2.5vw, 20px)", fontWeight: 400, margin: 0 }}>{module.title}</h3>
                    </div>
                    <span style={{ fontSize: "24px", color: "#8a847c", fontWeight: 200 }}>{isOpen ? "−" : "+"}</span>
                  </div>
                  <div style={{ maxHeight: "200px", overflow: "hidden", transition: "max-height 0.4s ease, opacity 0.3s ease", opacity: isOpen ? 1 : 0, paddingLeft: "38px", marginTop: isOpen ? "20px" : "0px" }}>
                    <p style={{ fontSize: "14px", lineHeight: "2.0", color: "#5a5550", fontWeight: 300, maxWidth: "760px" }}>{module.details}</p>
                  </div>
                </div>
              );
            })}
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ maxWidth: "1180px", margin: "0 auto", padding: "110px 24px 120px", textAlign: "center" }}>
        <h3 style={{ fontFamily: serifFont, fontSize: "32px", fontWeight: 400, marginBottom: "20px", letterSpacing: "0.03em" }}>為您的團隊引入 RESET 工作坊</h3>
        <p style={{ fontSize: "14.5px", color: "#666", lineHeight: "2.0", fontWeight: 300, maxWidth: "560px", margin: "0 auto 48px auto" }}>
          透過互動式的體感探索，幫助同仁從根本認識身體使用誤區，建立科學化的動作架構，提升全體團隊的穩定與健康續航。
        </p>
        <a href="/contact" style={{ display: "inline-block", background: "#2d2d2d", color: "#fff", padding: "16px 48px", fontSize: "12px", letterSpacing: "0.2em", borderRadius: "2px", textDecoration: "none" }}>
          WORKSHOP INQUIRY &rarr;
        </a>
      </section>

      {/* Footer 全站一致高訂感不對稱碳黑 Footer */}
      <footer style={{ background: "#2d2d2d", color: "#f8f6f2", padding: "100px 24px 48px", fontFamily: sansFont }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "64px" }}>
          <div>
            <h2 style={{ fontFamily: serifFont, fontSize: "30px", marginBottom: 20 }}>EASE</h2>
            <p style={{ color: "#a19b93", lineHeight: "2.0", fontSize: "14px", fontWeight: 300 }}>Corporate Wellness Studio<br />讓健康更容易開始，也更容易持續</p>
          </div>
          <div>
            <p style={{ letterSpacing: "0.3em", fontSize: "11px", color: "#7e7871", marginBottom: 24 }}>CONTACT</p>
            <p style={contactTextStyle}>Instagram：easehealth</p>
            <p style={contactTextStyle}>Email：contact@easehealth.com</p>
            <p style={contactTextStyle}>Location：Taiwan</p>
          </div>
        </div>
        <div style={{ maxWidth: "1180px", margin: "80px auto 0", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 32, color: "#7e7871", fontSize: "12px", fontWeight: 300 }}>
          © 2026 EASE WELLNESS. All rights reserved.
        </div>
      </footer>
    </main>
  );
}