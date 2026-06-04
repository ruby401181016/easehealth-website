"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MovementPage() {
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

  const topicsData = [
    {
      id: "01",
      title: "上班族增肌入門：建立力量與代謝基礎",
      enTitle: "MUSCLE FOUNDATION",
      desc: "從零基礎開始建立肌力觀念，理解肌肉量、代謝與身體功能的關係。",
      image: "/入門.png",
      href: "/programs/movement/muscle-foundation",
    },
    {
      id: "02",
      title: "不去健身房也能練：居家／辦公室肌力訓練",
      enTitle: "HOME & OFFICE TRAINING",
      desc: "運用徒手、彈力帶與簡單器材，建立忙碌上班族也能執行的肌力訓練方式。",
      image: "/居家.png",
      href: "/programs/movement/home-office-training",
    },
    {
      id: "03",
      title: "練對比練多更重要：動作品質與訓練效率",
      enTitle: "MOVEMENT QUALITY",
      desc: "透過動作品質、核心控制與發力觀念，提升訓練效率並降低運動傷害風險。",
      image: "/練對.png",
      href: "/programs/movement/movement-quality",
    },
    {
      id: "04",
      title: "打造不容易受傷的身體：上班族功能性訓練",
      enTitle: "FUNCTIONAL TRAINING",
      desc: "從日常動作與身體使用方式出發，建立更穩定、更有支撐力的身體能力。",
      image: "/功能.png",
      href: "/programs/movement/functional-training",
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
          padding: isMobile ? "56px 24px 48px" : "80px 24px 70px",
          textAlign: "center",
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
          MOVEMENT TRAINING
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
          運動實作
        </h1>

        <p
          style={{
            fontSize: "15px",
            color: "#5a5550",
            maxWidth: "620px",
            margin: "0 auto",
            lineHeight: "2.1",
            fontWeight: 300,
            letterSpacing: "0.04em",
          }}
        >
          從基礎肌力、動作品質到功能性訓練，
          <br style={{ display: isMobile ? "none" : "block" }} />
          協助員工建立真正能融入生活的運動能力。
        </p>
      </section>

      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: isMobile ? "40px 30px 90px" : "70px 24px 120px",
        }}
      >
        <div style={{ marginBottom: isMobile ? "48px" : "64px" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: "#8a847c",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Curriculum
          </p>

          <h2
            style={{
              fontFamily: serifFont,
              fontSize: isMobile ? "32px" : "34px",
              fontWeight: 400,
              letterSpacing: "0.03em",
            }}
          >
            課程主題
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "72px" : "140px",
          }}
        >
          {topicsData.map((topic, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={topic.id}
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : isEven ? "row-reverse" : "row",
                  alignItems: "center",
                  gap: isMobile ? "28px" : "80px",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    flex: isMobile ? "1 1 100%" : "1 1 400px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "16 / 10",
                      overflow: "hidden",
                      borderRadius: "4px",
                      background: "#ece7df",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.015)",
                    }}
                  >
                    <img
                      src={topic.image}
                      alt={topic.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    flex: isMobile ? "1 1 100%" : "1 1 400px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      borderTop: "1px solid rgba(0,0,0,0.06)",
                      paddingTop: "24px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.25em",
                        color: "#9a9a9a",
                        marginBottom: "16px",
                        fontFamily: sansFont,
                        fontWeight: 300,
                        lineHeight: "1.8",
                      }}
                    >
                      {topic.id} &nbsp;&middot;&nbsp; {topic.enTitle}
                    </div>

                    <h3
                      style={{
                        fontFamily: serifFont,
                        fontSize: isMobile ? "28px" : "clamp(24px, 3vw, 28px)",
                        fontWeight: 400,
                        marginBottom: "20px",
                        lineHeight: "1.4",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {topic.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "14.5px",
                        lineHeight: "2.1",
                        color: "#666",
                        fontWeight: 300,
                        marginBottom: "32px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {topic.desc}
                    </p>

                    <a
                      href={topic.href}
                      style={{
                        fontSize: "12px",
                        letterSpacing: "0.18em",
                        borderBottom: "1px solid #2d2d2d",
                        paddingBottom: "6px",
                        color: "#2d2d2d",
                        textDecoration: "none",
                        display: "inline-block",
                        fontWeight: 400,
                      }}
                    >
                      EXPLORE TOPIC →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}