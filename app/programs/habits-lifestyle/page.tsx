"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HabitsLifestylePage() {
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
      title: "從三分鐘開始：讓運動融入生活",
      enTitle: "START WITH THREE MINUTES",
      desc: "降低開始運動的門檻，透過簡單可執行的小行動，讓運動自然融入日常生活。",
      image: "/三分鐘.png",
      href: "/programs/habits-lifestyle/three-minute-movement",
    },
    {
      id: "02",
      title: "明明知道卻做不到？破解健康行動卡關點",
      enTitle: "OVERCOMING ACTION BARRIERS",
      desc: "理解健康計畫容易中斷的原因，學會降低阻力、重新開始，避免陷入反覆放棄的循環。",
      image: "/卡關2.png",
      href: "/programs/habits-lifestyle/action-barriers",
    },
    {
      id: "03",
      title: "環境正在影響你：打造健康的生活空間",
      enTitle: "HEALTHY ENVIRONMENT DESIGN",
      desc: "從辦公室、居家與日常動線出發，設計更容易做出健康選擇的生活環境。",
      image: "/環境.png",
      href: "/programs/habits-lifestyle/environment-design",
    },
    {
      id: "04",
      title: "找到適合你的運動方式",
      enTitle: "FIND YOUR MOVEMENT STYLE",
      desc: "依照個人生活型態、喜好與身體狀態，找到真正能長期維持的運動方式。",
      image: "/適合.png",
      href: "/programs/habits-lifestyle/find-your-movement",
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
          HABITS & LIFESTYLE
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
          習慣養成
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
          從開始行動、突破卡關到環境設計，
          <br style={{ display: isMobile ? "none" : "block" }} />
          協助員工建立真正能長期維持的健康生活方式。
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
                <div style={{ flex: isMobile ? "1 1 100%" : "1 1 400px", width: "100%" }}>
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

                <div style={{ flex: isMobile ? "1 1 100%" : "1 1 400px", width: "100%" }}>
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