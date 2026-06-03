import Navbar from "@/components/Navbar";

export default function WorkshopsPage() {
  // 💡 同步風格 A 的高級感字體系統
  const serifFont = "'Cormorant Garamond', 'Playfair Display', 'Noto Serif TC', Georgia, serif";
  const sansFont = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans TC', Helvetica, Arial, sans-serif";

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
      desc: "結合功能性動作、團隊合作與任務挑戰，打造上班族也能參與的互動式體能体验。",
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

  // 同步高訂霧灰白 Footer 的聯絡文字樣式
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

      {/* Hero Section */}
      <section
        style={{
          padding: "80px 24px 70px", // 🚀 已修正：完美收緊上下留白
          textAlign: "center",
          background: "#ece7df",     // 沉穩沙色
        }}
      >
        <p
          style={{
            letterSpacing: "0.35em",   // 精品感字距
            fontSize: "12px",
            color: "#8a847c",
            marginBottom: 22,
            fontWeight: 400,
          }}
        >
          WORKSHOPS
        </p>

        <h1
          style={{
            fontFamily: serifFont,     // 換上優雅明體
            fontSize: "clamp(36px, 5vw, 46px)",
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
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "2.1",
            fontWeight: 300,
            letterSpacing: "0.04em",
          }}
        >
          以低器材、高互動的體驗式設計，
          <br />
          打造適合企業員工參與的功能性健康活動。
        </p>
      </section>

      {/* Topics Section */}
      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "70px 24px 120px", // 🚀 已修正：縮小頂部留白，順暢銜接
        }}
      >
        {/* Section Header */}
        <div style={{ marginBottom: "64px" }}>
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
              fontFamily: serifFont, // 優雅明體
              fontSize: "34px",
              fontWeight: 400,
              letterSpacing: "0.03em",
            }}
          >
            工作坊主題
          </h2>
        </div>

        {/* Dynamic 交錯列表 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "140px", // 保持極簡大氣的呼吸感間距
          }}
        >
          {topicsData.map((topic, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={topic.id}
                style={{
                  display: "flex",
                  flexDirection: isEven ? "row-reverse" : "row",
                  alignItems: "center",
                  gap: "80px",
                  flexWrap: "wrap",
                }}
              >
                {/* Image Box */}
                <div style={{ flex: "1 1 400px" }}>
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "16 / 10", // 黃金感電影比例 8:5
                      overflow: "hidden",
                      borderRadius: "4px",   // 精品微圓角
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

                {/* Text Content Box */}
                <div style={{ flex: "1 1 400px" }}>
                  <div
                    style={{
                      borderTop: "1px solid rgba(0,0,0,0.06)", // 低噪水平界線
                      paddingTop: "24px",
                    }}
                  >
                    {/* 精緻微縮的英文字標 */}
                    <div
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.25em",
                        color: "#9a9a9a",
                        marginBottom: "16px",
                        fontFamily: sansFont,
                        fontWeight: 300,
                      }}
                    >
                      {topic.id} &nbsp;&middot;&nbsp; {topic.enTitle}
                    </div>

                    <h3
                      style={{
                        fontFamily: serifFont, // 換上優雅明體
                        fontSize: "clamp(24px, 3vw, 28px)",
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
                        color: "#666",       // 質感空氣感淡灰
                        fontWeight: 300,     // 搭配思源細黑體
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
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      EXPLORE TOPIC &rarr;
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer 🚀 已同步更新為全站一致的高級感不對稱深灰 Footer */}
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