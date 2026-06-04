"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WorkshopsPage() {
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
      title: "MOVE LAB",
      enTitle: "FUNCTIONAL MOVEMENT EXPERIENCE",
      desc: "透過身體測試、動作挑戰與小組任務，讓員工重新認識自己的身體能力與活動潛力。",
      image: "/move.png",
      href: "/programs/workshops/move-lab",
    },
    {
      id: "02",
      title: "人體使用說明書",
      enTitle: "BODY USER MANUAL",
      desc: "從久坐、姿勢與錯誤用力模式切入，透過體驗式練習重新學會更有效率地使用身體。",
      image: "/人體.png",
      href: "/programs/workshops/body-user-manual",
    },
    {
      id: "03",
      title: "Office Athlete",
      enTitle: "CORPORATE TEAM MOVEMENT CHALLENGE",
      desc: "結合功能性動作、團隊合作與任務挑戰，打造上班族也能參與的互動式體能體驗。",
      image: "/office.png",
      href: "/programs/workshops/office-athlete",
    },
    {
      id: "04",
      title: "BODY RESET",
      enTitle: "MOVEMENT RECOVERY WORKSHOP",
      desc: "針對久坐造成的緊繃、失衡與低活動量，建立日常可執行的動作恢復策略。",
      image: "/reset.png",
      href: "/programs/workshops/body-reset",
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
          WORKSHOPS
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
          健康工作坊
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
          以低器材、高互動的體驗式設計，
          <br style={{ display: isMobile ? "none" : "block" }} />
          打造適合企業員工參與的功能性健康活動。
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
            Experience
          </p>

          <h2
            style={{
              fontFamily: serifFont,
              fontSize: isMobile ? "32px" : "34px",
              fontWeight: 400,
              letterSpacing: "0.03em",
            }}
          >
            工作坊主題
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