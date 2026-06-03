import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const programTopics = [
  {
    number: "01",
    title: "飲食體態",
    label: "Nutrition",
    href: "/programs/body-composition",
  },
  {
    number: "02",
    title: "健康數據",
    label: "Health Data",
    href: "/programs/health-data",
  },
  {
    number: "03",
    title: "運動實作",
    label: "Movement",
    href: "/programs/movement",
  },
  {
    number: "04",
    title: "疼痛修復",
    label: "Recovery",
    href: "/programs/pain-relief",
  },
  {
    number: "05",
    title: "習慣養成",
    label: "Lifestyle",
    href: "/programs/habits-lifestyle",
  },
  {
    number: "06",
    title: "健康工作坊",
    label: "Workshops",
    href: "/programs/workshops",
  },
];

export default function Home() {
  const serifFont =
    "'Cormorant Garamond', 'Playfair Display', 'Noto Serif TC', Georgia, serif";

  const sansFont =
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans TC', Helvetica, Arial, sans-serif";

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

      {/* Hero */}
      <section
        style={{
          minHeight: "calc(100vh - 80px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 24px 120px",
        }}
      >
        <p
          style={{
            letterSpacing: "0.4em",
            fontSize: "12px",
            marginBottom: 24,
            color: "#8a847c",
            fontWeight: 400,
          }}
        >
          EASE WELLNESS
        </p>

        <h1
          style={{
            fontFamily: serifFont,
            fontSize: "clamp(48px, 7.5vw, 88px)",
            lineHeight: 1.1,
            fontWeight: 300,
            marginBottom: 32,
            letterSpacing: "-0.01em",
          }}
        >
          Wellness
          <br />
          <span style={{ fontStyle: "italic" }}>with</span> Ease
        </h1>

        <p
          style={{
            maxWidth: 540,
            fontSize: "15px",
            lineHeight: 2.1,
            color: "#5a5550",
            marginBottom: 48,
            fontWeight: 300,
            letterSpacing: "0.05em",
          }}
        >
          讓健康、運動與飲食，自然融入你的生活。
        </p>

        <div
          style={{
            display: "flex",
            gap: 20,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="/services"
            style={{
              background: "#2d2d2d",
              color: "#f8f6f2",
              padding: "16px 44px",
              borderRadius: "4px",
              textDecoration: "none",
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Explore Services
          </a>

          <a
            href="/cases"
            style={{
              border: "1px solid #2d2d2d",
              color: "#2d2d2d",
              padding: "16px 44px",
              borderRadius: "4px",
              textDecoration: "none",
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            View Case Studies
          </a>
        </div>
      </section>

      {/* About */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "440px",
            maxHeight: "550px",
            aspectRatio: "4/5",
            margin: "0 auto",
            borderRadius: "4px",
            overflow: "hidden",
            background: "#ece7df",
            boxShadow: "0 20px 40px rgba(0,0,0,0.015)",
          }}
        >
          <img
            src="/ruby形象照2.png"
            alt="EASE Wellness"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        <div style={{ padding: "0 20px" }}>
          <p
            style={{
              letterSpacing: "0.3em",
              fontSize: 11,
              color: "#8a847c",
              marginBottom: 24,
            }}
          >
            ABOUT
          </p>

          <h2
            style={{
              fontFamily: serifFont,
              fontSize: "clamp(28px, 4vw, 38px)",
              lineHeight: 1.5,
              fontWeight: 400,
              marginBottom: 28,
              letterSpacing: "0.02em",
            }}
          >
            專業、健康、
            <br />
            以人為本
          </h2>

          <p
            style={{
              fontSize: 15,
              lineHeight: 2.1,
              color: "#5a5550",
              fontWeight: 300,
              marginBottom: 36,
              letterSpacing: "0.04em",
            }}
          >
            結合健康管理專業、運動科學與企業健康管理經驗，
            協助企業將健康活動轉化為員工真正容易理解、
            參與並持續的日常行動。
          </p>

          <a
            href="/about"
            style={{
              color: "#2d2d2d",
              textDecoration: "none",
              borderBottom: "1px solid #2d2d2d",
              paddingBottom: 6,
              fontSize: 13,
              letterSpacing: "0.1em",
              display: "inline-block",
            }}
          >
            Learn more about EASE &rarr;
          </a>
        </div>
      </section>

      {/* Philosophy */}
      <section
        style={{
          background: "#ece7df",
          padding: "160px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            letterSpacing: "0.3em",
            fontSize: 11,
            color: "#8a847c",
            marginBottom: 28,
          }}
        >
          PHILOSOPHY
        </p>

        <h2
          style={{
            fontFamily: serifFont,
            fontSize: "clamp(32px, 4.5vw, 52px)",
            lineHeight: 1.3,
            fontWeight: 300,
            marginBottom: 36,
            letterSpacing: "0.01em",
          }}
        >
          Health is a lifestyle,
          <br />
          <span style={{ fontStyle: "italic" }}>
            not a short-term goal.
          </span>
        </h2>

        <p
          style={{
            maxWidth: 600,
            margin: "0 auto",
            fontSize: 15,
            lineHeight: 2.1,
            color: "#5a5550",
            fontWeight: 300,
            letterSpacing: "0.05em",
          }}
        >
          真正的健康，不是短暫衝刺，而是能自然融入生活與工作節奏中的日常選擇。
        </p>
      </section>

      {/* Programs */}
      <section
        style={{
          padding: "140px 24px",
          background: "#f8f6f2",
        }}
      >
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: 80,
            }}
          >
            <p
              style={{
                letterSpacing: "0.3em",
                fontSize: 11,
                color: "#8a847c",
                marginBottom: 24,
              }}
            >
              PROGRAMS
            </p>

            <h2
              style={{
                fontFamily: serifFont,
                fontSize: "clamp(30px, 4vw, 42px)",
                lineHeight: 1.5,
                fontWeight: 400,
                marginBottom: 28,
              }}
            >
              六大健康主題，
              <br />
              依照企業需求彈性設計
            </h2>

            <p
              style={{
                maxWidth: 680,
                margin: "0 auto",
                fontSize: 15,
                lineHeight: 2.1,
                color: "#5a5550",
                fontWeight: 300,
                letterSpacing: "0.05em",
              }}
            >
              從飲食體態、健康數據、運動實作到疼痛修復，
              EASE 協助企業設計更容易開始、
              也更容易持續的健康體驗
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              columnGap: 48,
              rowGap: 56,
            }}
          >
            {programTopics.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  textDecoration: "none",
                  color: "#2d2d2d",
                  borderTop: "1px solid rgba(45,45,45,0.16)",
                  paddingTop: 26,
                  display: "block",
                }}
              >
                <p
                  style={{
                    fontSize: 12,
                    color: "#aaa",
                    fontFamily: "monospace",
                    marginBottom: 22,
                  }}
                >
                  {item.number}
                </p>

                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 400,
                    marginBottom: 10,
                    letterSpacing: "0.04em",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: 13,
                    color: "#8a847c",
                    letterSpacing: "0.08em",
                  }}
                >
                  {item.label}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "120px 24px",
          textAlign: "center",
          background: "#ece7df",
        }}
      >
        <p
          style={{
            letterSpacing: "0.3em",
            fontSize: 11,
            color: "#8a847c",
            marginBottom: 24,
          }}
        >
          WORK WITH EASE
        </p>

        <h2
          style={{
            fontFamily: serifFont,
            fontSize: "clamp(30px, 4vw, 42px)",
            lineHeight: 1.5,
            fontWeight: 400,
            marginBottom: 28,
          }}
        >
          Ready to build a healthier workplace?
        </h2>

        <p
          style={{
            maxWidth: 620,
            margin: "0 auto 44px",
            fontSize: 15,
            lineHeight: 2.1,
            color: "#5a5550",
            fontWeight: 300,
            letterSpacing: "0.05em",
          }}
        >
          讓我們一起設計更貼近團隊需求，
          也更容易持續的企業健康體驗
        </p>

        <a
          href="/contact"
          style={{
            display: "inline-block",
            background: "#2d2d2d",
            color: "#f8f6f2",
            padding: "16px 48px",
            textDecoration: "none",
            fontSize: 12,
            letterSpacing: "0.25em",
            borderRadius: "4px",
          }}
        >
          CONTACT EASE &rarr;
        </a>
      </section>

      <Footer />
    </main>
  );
}