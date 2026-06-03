import Navbar from "@/components/Navbar";

export default function PainReliefPage() {
  // 💡 同步風格 A 的高級感字體系統
  const serifFont = "'Cormorant Garamond', 'Playfair Display', 'Noto Serif TC', Georgia, serif";
  const sansFont = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans TC', Helvetica, Arial, sans-serif";

  const topicsData = [
    {
      id: "01",
      title: "久坐肩頸腰痛修復",
      enTitle: "NECK & LOWER BACK RECOVERY",
      desc: "改善久坐造成的肩頸僵硬、下背壓力與身體疲勊，建立日常可執行的恢復方式。",
      image: "/肩頸.png",
      href: "/programs/pain-relief/neck-back-recovery",
    },
    {
      id: "02",
      title: "身體失衡修復",
      enTitle: "POSTURE & MOVEMENT BALANCE",
      desc: "從圓肩、骨盆失衡與代償問題切入，重新建立穩定自然的身體使用方式。",
      image: "/失衡2.png",
      href: "/programs/pain-relief/body-imbalance",
    },
    {
      id: "03",
      title: "滑鼠手與腕痛改善",
      enTitle: "WRIST & OFFICE PAIN RECOVERY",
      desc: "改善長時間使用電腦造成的手腕、前臂與肩頸不適問題。",
      image: "/手腕.png",
      href: "/programs/pain-relief/wrist-pain",
    },
    {
      id: "04",
      title: "活動能力重建",
      enTitle: "RESTORING MOVEMENT CAPACITY",
      desc: "改善身體僵硬與活動受限，重新找回更自然穩定的身體功能。",
      image: "/卡卡.png",
      href: "/programs/pain-relief/movement-restoration",
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
          PAIN RELIEF & RECOVERY
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
          疼痛修復
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
          從肩頸腰痛、身體失衡到活動能力下降，
          <br />
          協助上班族改善長期累積的身體不適與功能問題。
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