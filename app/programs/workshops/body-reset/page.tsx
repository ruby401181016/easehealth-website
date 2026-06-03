"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function BodyResetPage() {
  const [activeModule, setActiveModule] = useState(0);

  const serifFont = "'Cormorant Garamond', 'Playfair Display', 'Noto Serif TC', Georgia, serif";
  const sansFont = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans TC', Helvetica, Arial, sans-serif";

  const courseSyllabus = [
    {
      num: "01",
      title: "久坐正在如何影響你的身體？",
      details:
        "從肩頸緊繃、核心失能、髖部僵硬到疲勞感累積，理解久坐生活對身體造成的影響。",
    },
    {
      num: "02",
      title: "身體 Reset：重新啟動 movement",
      details:
        "透過核心啟動、肩頸控制與基礎 movement，重新建立更穩定的身體使用方式。",
    },
    {
      num: "03",
      title: "功能性恢復與活動能力重建",
      details:
        "結合 balance、coordination 與 mobility challenge，改善久坐後的僵硬與低活動狀態。",
    },
    {
      num: "04",
      title: "建立日常恢復策略",
      details:
        "協助員工建立辦公室與下班後都能執行的 reset 方法，降低疲勞與身體緊繃累積。",
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
              src="/reset.png"
              alt="BODY RESET"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>

        <div style={{ flex: "1 1 440px", display: "flex", flexDirection: "column" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.25em", color: "#8a847c", marginBottom: "24px", textTransform: "uppercase", fontWeight: 400 }}>
            <a href="/programs/workshops" style={{ color: "#8a847c", textDecoration: "none" }}>Workshops</a> &nbsp; / &nbsp; Program Details
          </p>

          <h1 style={{ fontFamily: serifFont, fontSize: "clamp(34px, 4.5vw, 44px)", fontWeight: 400, lineHeight: "1.3", marginBottom: "24px", letterSpacing: "0.03em" }}>
            BODY RESET
          </h1>

          <p style={{ fontSize: "14.5px", lineHeight: "2.1", color: "#5a5550", fontWeight: 300, marginBottom: "36px" }}>
            針對久坐、低活動量與身體緊繃問題，<br />透過功能性 movement 與身體控制訓練，協助員工重新找回更舒服、更穩定的身體狀態。
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <div style={{ width: "42px", height: "42px", borderRadius: "50%", border: "1px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.6)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 20V12" stroke="#8a847c" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 12C12 8 15 5 19 5C19 9 16 12 12 12Z" stroke="#8a847c" strokeWidth="1.5" strokeLinejoin="round"/><path d="M12 15C12 12 10 9 5 9C5 13 7 15 12 15Z" stroke="#8a847c" strokeWidth="1.5" strokeLinejoin="round"/></svg>
            </div>
            <span style={{ fontSize: "13px", fontWeight: 500, color: "#2d2d2d", letterSpacing: "0.15em" }}>工作坊目標</span>
            <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.06)" }} />
          </div>

          <p style={{ fontSize: "14px", lineHeight: "2.0", color: "#666", fontWeight: 300 }}>
            協助員工透過 movement reset 與功能性恢復訓練，改善久坐造成的緊繃與低活動狀態，建立更有活力與舒適的日常身體狀態。
          </p>
        </div>
      </section>

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

      <section style={{ maxWidth: "1180px", margin: "0 auto", padding: "110px 24px 120px", textAlign: "center" }}>
        <h3 style={{ fontFamily: serifFont, fontSize: "32px", fontWeight: 400, marginBottom: "20px", letterSpacing: "0.03em" }}>為您的團隊引入 RESET 工作坊</h3>
        <p style={{ fontSize: "14.5px", color: "#666", lineHeight: "2.0", fontWeight: 300, maxWidth: "560px", margin: "0 auto 48px auto" }}>
          透過功能性 Movement 系統，幫助團隊成員在辦公環境中有效啟動核心、釋放壓力，並將恢復策略內化為日常習慣。
        </p>
        <a href="/contact" style={{ display: "inline-block", background: "#2d2d2d", color: "#fff", padding: "16px 48px", fontSize: "12px", letterSpacing: "0.2em", borderRadius: "2px", textDecoration: "none" }}>
          WORKSHOP INQUIRY &rarr;
        </a>
      </section>

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