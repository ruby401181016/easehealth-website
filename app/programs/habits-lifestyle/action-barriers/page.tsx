"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function ActionBarriersPage() {
  const [activeModule, setActiveModule] = useState(0);

  // 💡 同步風格 A 的高級感字體系統
  const serifFont = "'Cormorant Garamond', 'Playfair Display', 'Noto Serif TC', Georgia, serif";
  const sansFont = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans TC', Helvetica, Arial, sans-serif";

  const courseSyllabus = [
    {
      num: "01",
      title: "為什麼健康計畫總是撐不久？",
      details:
        "解析短期衝刺、過高期待與意志力耗盡，理解為什麼很多健康計畫容易在幾天後中斷。",
    },
    {
      num: "02",
      title: "哪些因素最容易讓健康行動中斷？",
      details:
        "從加班、壓力、疲勞、行程變動與情緒狀態切入，找出讓行動卡住的常見原因。",
    },
    {
      num: "03",
      title: "如何降低健康行動的阻力？",
      details:
        "學習降低門檻、預留彈性與不追求完美的行動策略，讓健康行為更容易重新開始。",
    },
    {
      num: "04",
      title: "卡關時，如何重新回到軌道？",
      details:
        "建立中斷不等於失敗的觀念，學會降低罪惡感、調整目標，讓自己更快回到健康節奏。",
    },
  ];

  // 同步全站一致的高訂霧灰白 Footer 聯絡文字樣式
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
        background: "#f8f6f2", // EASE 經典米白
        color: "#2d2d2d",
        fontFamily: sansFont,
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <Navbar />

      {/* Hero Section (圖文介紹區塊) */}
      <section
        style={{
          display: "flex",
          maxWidth: "1180px",
          margin: "0 auto",
          width: "100%",
          padding: "80px 24px 70px", // 收緊留白，視覺更聚焦
          flexWrap: "wrap",
          alignItems: "center",
          gap: "64px",
        }}
      >
        {/* 左側影格圖 */}
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
              src="/卡關2.png"
              alt="action barriers"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* 右側文字內容 */}
        <div
          style={{
            flex: "1 1 440px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* 精緻英文字標麵包屑 */}
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.25em",
              color: "#8a847c",
              marginBottom: "24px",
              textTransform: "uppercase",
              fontWeight: 400,
            }}
          >
            <a
              href="/programs/habits-lifestyle"
              style={{ color: "#8a847c", textDecoration: "none" }}
            >
              Habits & Lifestyle
            </a>{" "}
            &nbsp; / &nbsp; Program Details
          </p>

          <h1
            style={{
              fontFamily: serifFont, // 換上優雅明體
              fontSize: "clamp(34px, 4.5vw, 44px)", // 響應式字級
              fontWeight: 400,
              lineHeight: "1.3",
              marginBottom: "24px",
              letterSpacing: "0.03em",
            }}
          >
            明明知道卻做不到？<br />破解健康行動卡關點
          </h1>

          <p
            style={{
              fontSize: "14.5px",
              lineHeight: "2.1",
              color: "#5a5550", // 暖灰色空氣感內文
              fontWeight: 300,  // 思源細黑體
              marginBottom: "36px",
            }}
          >
            很多時候，不是我們不知道健康很重要，
            <br />
            而是生活中的壓力、疲勞與變動讓行動不斷中斷。
            本課程協助員工看見卡關原因，並學會重新開始的方法。
          </p>

          {/* 課程目標區塊 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                border: "1px solid rgba(0,0,0,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,255,255,0.6)",
                flexShrink: 0,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20V12"
                  stroke="#8a847c"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12 12C12 8 15 5 19 5C19 9 16 12 12 12Z"
                  stroke="#8a847c"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 15C12 12 10 9 5 9C5 13 7 15 12 15Z"
                  stroke="#8a847c"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <span
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: "#2d2d2d",
                letterSpacing: "0.15em",
                whiteSpace: "nowrap",
              }}
            >
              課程目標
            </span>

            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(0,0,0,0.06)",
              }}
            />
          </div>

          <p
            style={{
              fontSize: "14px",
              lineHeight: "2.0",
              color: "#666",
              fontWeight: 300,
              margin: 0,
            }}
          >
            協助員工理解健康行動容易中斷的原因，學會降低阻力、調整期待，並在卡關後重新回到軌道。
          </p>
        </div>
      </section>

      {/* Syllabus Section (手風琴課程大綱) */}
      <section
        style={{
          background: "#ece7df", // 沉穩沙色底區隔視覺
          padding: "100px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          {/* 區塊標頭 */}
          <div style={{ marginBottom: "56px" }}>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.3em",
                color: "#8a847c",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Syllabus
            </p>

            <h2
              style={{
                fontFamily: serifFont, // 優雅明體
                fontSize: "34px",
                fontWeight: 400,
                letterSpacing: "0.03em",
                margin: 0,
              }}
            >
              課程大綱
            </h2>
          </div>

          {/* 手風琴列表 */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {courseSyllabus.map((module, index) => {
              const isOpen = activeModule === index;

              return (
                <div
                  key={module.num}
                  style={{
                    borderTop: "1px solid rgba(0,0,0,0.06)",
                    padding: "30px 0",
                    cursor: "pointer",
                  }}
                  onClick={() => setActiveModule(isOpen ? -1 : index)}
                >
                  {/* 折疊列頭 */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "24px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "24px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          color: "#9a9a9a",
                          fontFamily: "monospace",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {module.num}
                      </span>

                      <h3
                        style={{
                          fontSize: "clamp(16px, 2.5vw, 20px)",
                          fontWeight: 400,
                          margin: 0,
                          color: "#2d2d2d",
                          lineHeight: "1.4",
                        }}
                      >
                        {module.title}
                      </h3>
                    </div>

                    <span
                      style={{
                        fontSize: "24px",
                        color: "#8a847c",
                        fontWeight: 200,
                        userSelect: "none",
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>

                  {/* 折疊內容內文 */}
                  <div
                    style={{
                      maxHeight: isOpen ? "200px" : "0px",
                      overflow: "hidden",
                      transition: "max-height 0.4s ease, opacity 0.3s ease, margin 0.3s ease",
                      opacity: isOpen ? 1 : 0,
                      paddingLeft: "38px",
                      paddingRight: "24px",
                      marginTop: isOpen ? "20px" : "0px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "2.0",
                        color: "#5a5550",
                        fontWeight: 300,
                        maxWidth: "760px",
                        margin: 0,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {module.details}
                    </p>
                  </div>
                </div>
              );
            })}

            <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }} />
          </div>
        </div>
      </section>

      {/* CTA Section (引入課程諮詢) */}
      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "110px 24px 120px",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontFamily: serifFont, // 優雅明體
            fontSize: "32px",
            fontWeight: 400,
            marginBottom: "20px",
            letterSpacing: "0.03em",
          }}
        >
          引入此課程至您的企業
        </h3>

        <p
          style={{
            fontSize: "14.5px",
            color: "#666",
            lineHeight: "2.0",
            fontWeight: 300,
            maxWidth: "560px",
            margin: "0 auto 48px auto",
            letterSpacing: "0.02em",
          }}
        >
          適合企業健康講座、習慣養成與生活型態促進主題，
          <br />
          協助員工打破「明明知道卻做不到」的死胡同。
        </p>

        {/* 🚀 完美更新：將按鈕路徑修正為直達獨立的 contact 洽詢頁面 */}
        <a
          href="/contact"
          style={{
            display: "inline-block",
            background: "#2d2d2d",
            color: "#fff",
            padding: "16px 48px",
            fontSize: "12px",
            letterSpacing: "0.2em", // 精品感寬字距
            borderRadius: "2px",
            textDecoration: "none",
            fontWeight: 400,
            transition: "opacity 0.3s ease",
          }}
        >
          LOGISTICS CONSULTATION &rarr;
        </a>
      </section>

      {/* Footer 全站一致的高級感不對稱深灰 Footer */}
      <footer
        style={{
          background: "#2d2d2d",
          color: "#f8f6f2",
          padding: "100px 24px 48px",
          fontFamily: sansFont,
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "64px",
          }}
        >
          {/* 左側品牌 */}
          <div style={{ maxWidth: "420px" }}>
            <h2
              style={{
                fontFamily: serifFont,
                fontSize: "30px",
                letterSpacing: "0.06em",
                marginBottom: 20,
                fontWeight: 400,
              }}
            >
              EASE
            </h2>

            <p
              style={{
                fontFamily: sansFont,
                color: "#a19b93",
                lineHeight: "2.0",
                fontSize: "14px",
                fontWeight: 300,
                letterSpacing: "0.05em",
              }}
            >
              Corporate Wellness Studio
              <br />
              讓健康更容易開始，也更容易持續
            </p>
          </div>

          {/* 右側聯絡資訊 */}
          <div>
            <p
              style={{
                fontFamily: sansFont,
                letterSpacing: "0.3em",
                fontSize: "11px",
                color: "#7e7871",
                marginBottom: 24,
                fontWeight: 400,
              }}
            >
              CONTACT
            </p>

            <p style={contactTextStyle}>Instagram：easehealth</p>
            <p style={contactTextStyle}>Email：contact@easehealth.com</p>
            <p style={contactTextStyle}>Location：Taiwan</p>
          </div>
        </div>

        {/* 版權宣告 */}
        <div
          style={{
            maxWidth: "1180px",
            margin: "80px auto 0",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 32,
            color: "#7e7871",
            fontSize: "12px",
            letterSpacing: "0.06em",
            fontFamily: sansFont,
            fontWeight: 300,
          }}
        >
          © 2026 EASE WELLNESS. All rights reserved.
        </div>
      </footer>
    </main>
  );
}