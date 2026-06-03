"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function FindYourMovementPage() {
  const [activeModule, setActiveModule] = useState(0);

  // 💡 同步全站 EASE 風格 A 高級質感雙字體系統
  const serifFont = "'Cormorant Garamond', 'Playfair Display', 'Noto Serif TC', Georgia, serif";
  const sansFont = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans TC', Helvetica, Arial, sans-serif";

  const courseSyllabus = [
    {
      num: "01",
      title: "為什麼別人的方法不一定適合你？",
      details:
        "理解每個人的生活型態、個性、體能狀態與壓力來源不同，適合的運動方式也會不同。",
    },
    {
      num: "02",
      title: "不同運動類型的特性與差異",
      details:
        "認識重訓、有氧、團課、戶外活動與功能性訓練等不同形式，了解各自適合的族群與需求。",
    },
    {
      num: "03",
      title: "如何找到能長期執行的方式？",
      details:
        "從興趣感、成就感、社交性與壓力感受切入，找到真正能融入生活、持續執行的運動模式。",
    },
    {
      num: "04",
      title: "建立屬於自己的運動生活模式",
      details:
        "協助員工不再盲目跟風，而是依照自身條件建立可持續、舒服且有效的運動方式。",
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
        {/* 左側形象圖影格 */}
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
              src="/適合.png"
              alt="find your movement"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* 右側核心文字 */}
        <div
          style={{
            flex: "1 1 440px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* 精緻開闊的字標麵包屑 */}
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
              fontFamily: serifFont, // 套用優雅古典明體
              fontSize: "clamp(34px, 4.5vw, 44px)", // 智慧響應式字級
              fontWeight: 400,
              lineHeight: "1.3",
              marginBottom: "24px",
              letterSpacing: "0.03em",
            }}
          >
            找到適合你的運動方式
          </h1>

          <p
            style={{
              fontSize: "14.5px",
              lineHeight: "2.1",
              color: "#5a5550", // 帶有空氣感的暖灰內文
              fontWeight: 300,  // 思源細黑體
              marginBottom: "36px",
            }}
          >
            運動不需要套用別人的標準答案。
            <br />
            本課程協助員工了解自己的生活型態與身體需求，找到真正適合自己、能長期維持的運動方式。
          </p>

          {/* 課程目標飾條 */}
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
            協助員工找到符合自身生活型態、喜好與身體狀態的運動方式，降低挫折感，提升長期執行的可能性。
          </p>
        </div>
      </section>

      {/* Syllabus Section (沉穩手風琴大綱) */}
      <section
        style={{
          background: "#ece7df", // 高級沉穩沙棕底色，切換視覺節奏
          padding: "100px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          {/* 大綱標頭 */}
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
                  {/* 折疊抬頭列 */}
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

                  {/* 手風琴展開細節 */}
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

      {/* CTA Section (獨立合作洽談引導) */}
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
          打破單一化的盲目運動風氣，適合職場健康促進講座，
          <br />
          協助每位同仁量身評估生活型態，建立無痛且能舒適延續的身體動態習慣。
        </p>

        {/* 🚀 全站一致：引導前往獨立客製化諮詢表單頁面 */}
        <a
          href="/contact"
          style={{
            display: "inline-block",
            background: "#2d2d2d",
            color: "#fff",
            padding: "16px 48px",
            fontSize: "12px",
            letterSpacing: "0.2em", // 精品冷冽呼吸感字距
            borderRadius: "2px",
            textDecoration: "none",
            fontWeight: 400,
            transition: "opacity 0.3s ease",
          }}
        >
          LOGISTICS CONSULTATION &rarr;
        </a>
      </section>

      {/* Footer 全站一致不對稱碳黑精品 Footer */}
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
          {/* 左側品牌論述 */}
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

          {/* 右側聯絡渠道 */}
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

        {/* 下方版權聲明 */}
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