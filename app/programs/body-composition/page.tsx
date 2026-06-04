"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BodyCompositionPage() {
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
      title: "久坐族救星：國手教你無痛減脂",
      enTitle: "PAIN-FREE FAT LOSS FOR OFFICE WORKERS",
      desc: "從久坐生活、日常活動量與飲食觀念切入，建立不極端、不痛苦的減脂基礎。",
      image: "/減脂2.png",
      href: "/programs/body-composition/fat-loss-office-workers",
    },
    {
      id: "02",
      title: "燃燒脂肪關鍵策略：外食族也適用",
      enTitle: "FAT LOSS STRATEGY FOR BUSY PROFESSIONALS",
      desc: "針對外食、便利商店、聚餐與加班情境，設計上班族也能執行的飲食策略。",
      image: "/外食2.png",
      href: "/programs/body-composition/fat-loss-strategy",
    },
    {
      id: "03",
      title: "增肌減脂一次搞懂：零基礎也能做",
      enTitle: "BODY RECOMPOSITION FUNDAMENTALS",
      desc: "理解肌肉量、體脂率與基礎代謝的關係，建立正確的增肌減脂觀念。",
      image: "/增肌3.png",
      href: "/programs/body-composition/muscle-fat-basics",
    },
    {
      id: "04",
      title: "為什麼瘦了又復胖？體態維持的關鍵機制",
      enTitle: "WHY FAT REGAIN HAPPENS",
      desc: "破解節食反彈、代謝下降與體重停滯的原因，理解如何降低復胖風險。",
      image: "/復胖2.png",
      href: "/programs/body-composition/fat-regain",
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
          BODY & NUTRITION
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
          飲食體態管理
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
          從飲食觀念、外食策略到體態維持，
          <br style={{ display: isMobile ? "none" : "block" }} />
          建立上班族也能持續執行的健康生活方式。
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