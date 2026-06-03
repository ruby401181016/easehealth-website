"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function MoveLabPage() {
  const [activeModule, setActiveModule] = useState(0);

  // 💡 同步全站 EASE 風格 A 高級質感雙字體系統
  const serifFont = "'Cormorant Garamond', 'Playfair Display', 'Noto Serif TC', Georgia, serif";
  const sansFont = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans TC', Helvetica, Arial, sans-serif";

  const courseSyllabus = [
    {
      num: "01",
      title: "人體能力探索與身體測試",
      details:
        "透過平衡、協調、核心與反應測試，重新認識自己的身體能力與活動狀態。",
    },
    {
      num: "02",
      title: "Movement Challenge 動作挑戰",
      details:
        "結合低器材與功能性 movement 設計，透過小組輪站完成互動式動作任務。",
    },
    {
      num: "03",
      title: "團隊合作與互動任務",
      details:
        "透過 team mission 與 movement station，提升參與感、互動感與團隊合作體驗。",
    },
    {
      num: "04",
      title: "Reset 與身體回饋",
      details:
        "活動後透過呼吸、核心啟動與身體覺察，協助員工感受 movement 後的身體變化。",
    },
  ];

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
        background: "#f8f6f2",
        color: "#2d2d2d",
        fontFamily: sansFont,
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          display: "flex",
          maxWidth: "1180px",
          margin: "0 auto",
          width: "100%",
          padding: "80px 24px 70px",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "64px",
        }}
      >
        <div style={{ flex: "1 1 440px" }}>
          <div
            style={{
              width: "100%",
              aspectRatio: "16 / 10",
              position: "relative",
              overflow: "hidden",
              background: "#ece7df",
              borderRadius: "4px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.015)",
            }}
          >
            <img
              src="/move.png"
              alt="MOVE LAB"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>

        <div style={{ flex: "1 1 440px", display: "flex", flexDirection: "column" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.25em", color: "#8a847c", marginBottom: "24px", textTransform: "uppercase", fontWeight: 400 }}>
            <a href="/programs/workshops" style={{ color: "#8a847c", textDecoration: "none" }}>Workshops</a> &nbsp; / &nbsp; Program Details
          </p>

          <h1 style={{ fontFamily: serifFont, fontSize: "clamp(34px, 4.5vw, 44px)", fontWeight: 400, lineHeight: "1.3", marginBottom: "24px", letterSpacing: "0.03em" }}>
            MOVE LAB
          </h1>

          <p style={{ fontSize: "14.5px", lineHeight: "2.1", color: "#5a5550", fontWeight: 300, marginBottom: "36px" }}>
            透過功能性 movement、互動任務與身體探索，<br />讓員工重新認識自己的身體能力，打造高參與感的企業 wellness 體驗。
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <div style={{ width: "42px", height: "42px", borderRadius: "50%", border: "1px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.6)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 20V12" stroke="#8a847c" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 12C12 8 15 5 19 5C19 9 16 12 12 12Z" stroke="#8a847c" strokeWidth="1.5" strokeLinejoin="round"/><path d="M12 15C12 12 10 9 5 9C5 13 7 15 12 15Z" stroke="#8a847c" strokeWidth="1.5" strokeLinejoin="round"/></svg>
            </div>
            <span style={{ fontSize: "13px", fontWeight: 500, color: "#2d2d2d", letterSpacing: "0.15em" }}>課程目標</span>
            <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.06)" }} />
          </div>

          <p style={{ fontSize: "14px", lineHeight: "2.0", color: "#666", fontWeight: 300 }}>
            協助員工透過 movement challenge 與互動任務，提升身體覺察、活動能力與團隊參與感，建立更有趣且容易參與的健康體驗。
          </p>
        </div>
      </section>

      {/* Syllabus Section */}
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
        <h3 style={{ fontFamily: serifFont, fontSize: "32px", fontWeight: 400, marginBottom: "20px", letterSpacing: "0.03em" }}>開啟您的 MOVE LAB 企業探索</h3>
        <p style={{ fontSize: "14.5px", color: "#666", lineHeight: "2.0", fontWeight: 300, maxWidth: "560px", margin: "0 auto 48px auto" }}>
          打破傳統單向教學，透過互動式 movement 任務設計，激發團隊合作精神，在活動中重新定義員工的身心健康指標。
        </p>
        <a href="/contact" style={{ display: "inline-block", background: "#2d2d2d", color: "#fff", padding: "16px 48px", fontSize: "12px", letterSpacing: "0.2em", borderRadius: "2px", textDecoration: "none" }}>
          WORKSHOP INQUIRY &rarr;
        </a>
      </section>

      {/* Footer */}
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