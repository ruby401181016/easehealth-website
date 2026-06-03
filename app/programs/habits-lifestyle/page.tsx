import Navbar from "@/components/Navbar";

export default function HabitsLifestylePage() {
  // 💡 同步風格 A 的高級感字體系統
  const serifFont = "'Cormorant Garamond', 'Playfair Display', 'Noto Serif TC', Georgia, serif";
  const sansFont = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans TC', Helvetica, Arial, sans-serif";

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
          padding: "80px 24px 70px", // 🚀 已修正：收緊上下內襯，解決空洞感
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
          HABITS & LIFESTYLE
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
          習慣養成
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
          從開始行動、突破卡關到環境設計，
          <br />
          協助員工建立真正能長期維持的健康生活方式。
        </p>
      </section>

      {/* Topics Section */}
      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "70px 24px 120px", // 🚀 已修正：完美街街 Hero 區塊的黃金比例
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
            Curriculum
          </p>

          <h2
            style={{
              fontFamily: serifFont, // 優雅明體
              fontSize: "34px",
              fontWeight: 400,
              letterSpacing: "0.03em",
            }}
          >
            課程主題
          </h2>
        </div>

        {/* Dynamic 交錯列表 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "140px", // 舒適的呼吸感大間距
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