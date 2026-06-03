"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function BodyImbalancePage() {
  const [activeModule, setActiveModule] = useState(0);

  // 💡 同步全站 EASE 風格 A 高級質感雙字體系統
  const serifFont = "'Cormorant Garamond', 'Playfair Display', 'Noto Serif TC', Georgia, serif";
  const sansFont = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans TC', Helvetica, Arial, sans-serif";

  const courseSyllabus = [
    {
      num: "01",
      title: "什麼是身體失衡與代償？",
      details:
        "理解長時間久坐、低活動量與固定姿勢如何讓身體逐漸出現緊繃、失衡與代償問題。",
    },
    {
      num: "02",
      title: "上班族常見的姿勢與動作問題",
      details:
        "from 圓肩、駝背、骨盆前傾到左右不平衡，解析身體如何因錯誤使用方式累積壓力與不適。",
    },
    {
      num: "03",
      title: "改善失衡的身體修復策略",
      details:
        "透過呼吸、活動控制與簡單動作練習，重新建立更穩定的身體使用方式與肌肉協調。",
    },
    {
      num: "04",
      title: "重新建立自然的活動能力",
      details:
        "協助員工建立可長期執行的活動與恢復習慣，降低反覆痠痛與身體功能下降問題。",
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
              src="/失衡2.png"
              alt="body imbalance"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // 完美填滿影格
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
              href="/programs/pain-relief"
              style={{ color: "#8a847c", textDecoration: "none" }}
            >
              Pain Relief
            </a>{" "}
            &nbsp; / &nbsp; Program Details
          </p>

          <h1
            style={{
              fontFamily: serifFont, // 換上溫潤典雅明體
              fontSize: "clamp(34px, 4.5vw, 44px)", // 智慧響應式字級
              fontWeight: 400,
              lineHeight: "1.3",
              marginBottom: "24px",
              letterSpacing: "0.03em",
            }}
          >
            身體失衡修復
          </h1>

          <p
            style={{
              fontSize: "14.5px",
              lineHeight: "2.1",
              color: "#5a5550", // 暖灰色質感內文
              fontWeight: 300,  // 思源細黑體
              marginBottom: "36px",
            }}
          >
            長時間固定姿勢與缺乏活動，往往讓身體逐漸出現緊繃、代償與不平衡問題。
            <br />
            本課程協助上班族重新建立更穩定自然的身體使用方式。
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
            協助員工理解身體失衡與代償問題的來源，建立更穩定自然的活動能力與身體修復方式，降低反覆痠痛與功能下降問題。
          </p>
        </div>
      </section>

      {/* Syllabus Section (沉穩手風琴大綱) */}
      <section
        style={{
          background: "#ece7df", // 高級沉穩沙色底，做為視覺步調切換
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
                fontFamily: serifFont, // 套用優雅明體
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
                  {/* 折疊列標題頭 */}
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

                  {/* 手風琴細節展開 */}
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

      {/* CTA Section (獨立諮詢表單引導) */}
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
          適合企業健康講座、不適緩解與同仁 wellness 品質教育，
          <br />
          協助團隊跳脫反覆痠痛的惡性循環，用精準發力與科學修復，重拾身體自然的輕盈與平衡。
        </p>

        {/* 🚀 全站一致：引導直達獨立聯絡表單頁面 */}
        <a
          href="/contact"
          style={{
            display: "inline-block",
            background: "#2d2d2d",
            color: "#fff",
            padding: "16px 48px",
            fontSize: "12px",
            letterSpacing: "0.2em", // 舒張開闊的精緻字距
            borderRadius: "2px",
            textDecoration: "none",
            fontWeight: 400,
            transition: "opacity 0.3s ease",
          }}
        >
          LOGISTICS CONSULTATION &rarr;
        </a>
      </section>

      {/* Footer 全站一致高訂感不對稱碳黑 Footer */}
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
          {/* 左側品牌理念 */}
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

          {/* 右側聯絡管道 */}
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