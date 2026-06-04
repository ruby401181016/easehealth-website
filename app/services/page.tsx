"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function ServicesPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const serifFont =
    "'Cormorant Garamond', 'Playfair Display', 'Noto Serif TC', Georgia, serif";
  const sansFont =
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans TC', Helvetica, Arial, sans-serif";

  const services = [
    {
      id: "01",
      title: "企業健康講座",
      enTitle: "Corporate Wellness Talks",
      core: "聽 → 理解健康",
      desc: "以專業知識與實務案例，協助員工理解健康數據、飲食體態、久坐風險與日常健康管理。",
      features: ["60–90 分鐘", "健康月活動", "教育訓練", "可依需求調整主題"],
      examples: [
        { title: "上班族必懂健檢數據", link: "/programs/health-data" },
        { title: "國手教你無痛減脂", link: "/programs/body-composition" },
        { title: "久坐肩頸腰痛修復", link: "/programs/pain-relief" },
        { title: "從三分鐘開始：讓運動融入生活", link: "/programs/habits-lifestyle" },
      ],
      image: "/逢源科技.jpg",
    },
    {
      id: "02",
      title: "健康工作坊",
      enTitle: "Interactive Wellness Workshops",
      core: "體驗 → 覺察身體",
      desc: "透過互動體驗、身體測試與任務設計，讓員工從參與中重新認識自己的身體狀態。",
      features: ["適合 20–50 人", "低器材", "高互動", "適合部門活動"],
      examples: [
        { title: "MOVE LAB", link: "/programs/workshops/move-lab" },
        { title: "人體使用說明書", link: "/programs/workshops/body-user-manual" },
        { title: "Office Athlete", link: "/programs/workshops/office-athlete" },
        { title: "BODY RESET", link: "/programs/workshops/body-reset" },
      ],
      image: "/仁寶電腦.jpg",
    },
    {
      id: "03",
      title: "運動實作課程",
      enTitle: "Movement Practice Sessions",
      core: "實作 → 開始行動",
      desc: "結合功能性訓練、彈力帶與徒手動作，讓員工在安全、低門檻的方式下真正開始動起來。",
      features: ["功能性訓練", "彈力帶訓練", "徒手訓練", "適合上班族入門"],
      examples: [
        { title: "上班族增肌入門", link: "/programs/movement/muscle-foundation" },
        { title: "居家／辦公室肌力訓練", link: "/programs/movement/home-office-training" },
        { title: "練對比對多更重要", link: "/programs/movement/movement-quality" },
        { title: "上班族功能性訓練", link: "/programs/movement/functional-training" },
      ],
      image: "/運動實作課程.jpg",
    },
  ];

  const strengths = [
    {
      title: "醫護背景",
      desc: "理解健康風險、身體訊號與企業員工常見健康議題。",
    },
    {
      title: "競技運動經驗",
      desc: "將專業訓練轉化成上班族也能參與的安全活動。",
    },
    {
      title: "企業實務經驗",
      desc: "熟悉福委、HR 與企業活動需求，規劃更容易落地的內容。",
    },
  ];

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
          textAlign: "center",
          padding: isMobile ? "56px 24px 48px" : "80px 24px 70px",
          background: "#ece7df",
        }}
      >
        <p
          style={{
            letterSpacing: "0.35em",
            fontSize: "12px",
            color: "#8a847c",
            marginBottom: 20,
            fontWeight: 400,
          }}
        >
          SERVICES
        </p>

        <h1
          style={{
            fontFamily: serifFont,
            fontSize: "clamp(42px, 8vw, 56px)",
            marginBottom: 24,
            fontWeight: 400,
            letterSpacing: "0.04em",
          }}
        >
          服務項目
        </h1>

        <p
          style={{
            fontSize: "15px",
            color: "#5a5550",
            maxWidth: "640px",
            margin: "0 auto",
            lineHeight: "2.1",
            fontWeight: 300,
            letterSpacing: "0.04em",
          }}
        >
          從健康認知、身體覺察到實際行動，
          <br style={{ display: isMobile ? "none" : "block" }} />
          EASE 協助企業打造員工願意參與的健康體驗。
        </p>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: isMobile ? "40px 30px 90px" : "70px 24px 120px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "36px" : "56px" }}>
          {services.map((service) => (
            <div
              key={service.id}
              style={{
                background: "#fff",
                borderRadius: "4px",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(45,45,45,0.025)",
                border: "1px solid rgba(0,0,0,0.03)",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <div
                style={{
                  flex: isMobile ? "1 1 100%" : "1 1 380px",
                  maxWidth: isMobile ? "100%" : "430px",
                  position: "relative",
                  background: "#ece7df",
                  minHeight: isMobile ? "240px" : "360px",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <span
                  style={{
                    position: "absolute",
                    top: "24px",
                    left: "24px",
                    fontSize: "20px",
                    fontFamily: "monospace",
                    color: "#fff",
                    fontWeight: 300,
                  }}
                >
                  {service.id}
                </span>
              </div>

              <div
                style={{
                  flex: "1 1 560px",
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(250px, 1fr))",
                }}
              >
                <div
                  style={{
                    padding: isMobile ? "36px 28px 28px" : "44px 40px",
                    borderRight: isMobile ? "none" : "1px solid rgba(0,0,0,0.04)",
                    borderBottom: isMobile ? "1px solid rgba(0,0,0,0.04)" : "none",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      color: "#aaa",
                      letterSpacing: "0.2em",
                      marginBottom: "12px",
                    }}
                  >
                    〔 {service.core} 〕
                  </p>

                  <h2
                    style={{
                      fontFamily: serifFont,
                      fontSize: isMobile ? "30px" : "28px",
                      fontWeight: 400,
                      margin: "0 0 10px 0",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {service.title}
                  </h2>

                  <p
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.22em",
                      color: "#ccc",
                      textTransform: "uppercase",
                      marginBottom: "24px",
                      lineHeight: "1.8",
                    }}
                  >
                    {service.enTitle}
                  </p>

                  <p
                    style={{
                      fontSize: "14.5px",
                      lineHeight: "2.1",
                      color: "#666",
                      fontWeight: 300,
                      margin: 0,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {service.desc}
                  </p>
                </div>

                <div
                  style={{
                    padding: isMobile ? "32px 28px 36px" : "44px 40px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.18em",
                        color: "#aaa",
                        marginBottom: "14px",
                        textTransform: "uppercase",
                      }}
                    >
                      適合形式
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          style={{
                            background: "#f8f6f2",
                            color: "#666",
                            fontSize: "12px",
                            padding: "5px 12px",
                            borderRadius: "2px",
                            border: "1px solid rgba(0,0,0,0.03)",
                            fontWeight: 300,
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.18em",
                        color: "#aaa",
                        marginBottom: "16px",
                        textTransform: "uppercase",
                      }}
                    >
                      相關課程
                      <span style={{ color: "#ccc", marginLeft: "4px" }}>點擊查看</span>
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {service.examples.map((example, exampleIndex) => (
                        <a
                          key={example.title}
                          href={example.link}
                          style={{
                            display: "grid",
                            gridTemplateColumns: "28px 1fr auto",
                            gap: "10px",
                            alignItems: "start",
                            textDecoration: "none",
                          }}
                        >
                          <span style={{ fontSize: "11px", color: "#aaa", fontFamily: "monospace" }}>
                            0{exampleIndex + 1}
                          </span>

                          <span
                            style={{
                              fontSize: "14.5px",
                              color: "#2d2d2d",
                              lineHeight: "1.5",
                              fontWeight: 300,
                            }}
                          >
                            {example.title}
                          </span>

                          <span style={{ fontSize: "12px", color: "#aaa" }}>→</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          background: "#ece7df",
          padding: isMobile ? "72px 24px" : "96px 24px",
        }}
      >
        <div style={{ maxWidth: "980px", margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.26em",
              color: "#8a847c",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            Why EASE
          </p>

          <h2
            style={{
              fontFamily: serifFont,
              fontSize: isMobile ? "34px" : "42px",
              fontWeight: 400,
              lineHeight: 1.35,
              marginBottom: isMobile ? "40px" : "54px",
              letterSpacing: "0.03em",
            }}
          >
            不只是提供課程，更從企業需求出發
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "28px",
              textAlign: "left",
            }}
          >
            {strengths.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "rgba(255,255,255,0.6)",
                  padding: isMobile ? "32px 28px" : "36px",
                  borderRadius: "4px",
                  border: "1px solid rgba(0,0,0,0.03)",
                }}
              >
                <h3
                  style={{
                    fontFamily: serifFont,
                    fontSize: "24px",
                    fontWeight: 400,
                    marginBottom: "16px",
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "14.5px",
                    lineHeight: "2.1",
                    color: "#666",
                    fontWeight: 300,
                    margin: 0,
                    letterSpacing: "0.04em",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: isMobile ? "80px 24px 96px" : "120px 24px 140px",
          textAlign: "center",
          background: "#f8f6f2",
        }}
      >
        <h2
          style={{
            fontFamily: serifFont,
            fontSize: isMobile ? "34px" : "42px",
            fontWeight: 400,
            marginBottom: "24px",
            letterSpacing: "0.03em",
            lineHeight: 1.35,
          }}
        >
          不確定該辦講座、工作坊還是運動課程？
        </h2>

        <p
          style={{
            fontSize: "15px",
            color: "#666",
            lineHeight: "2.1",
            marginBottom: "44px",
            fontWeight: 300,
            letterSpacing: "0.05em",
          }}
        >
          歡迎與 EASE 討論企業需求，
          <br />
          一起規劃最適合的健康活動。
        </p>

        <a
          href="/contact"
          style={{
            display: "inline-block",
            background: "#2d2d2d",
            color: "#f8f6f2",
            padding: "16px 48px",
            textDecoration: "none",
            fontSize: "12px",
            letterSpacing: "0.25em",
            borderRadius: "4px",
          }}
        >
          企業合作洽詢 →
        </a>
      </section>
    </main>
  );
}