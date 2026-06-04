"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const cases = [
  {
    title: "LIH YUAN 麗源建設",
    program: "健康數據",
    company: "上班族必懂健檢數據",
    image: "/麗源建設.jpg",
  },
  {
    title: "AFOP 逢源科技",
    program: "習慣養成",
    company: "從三分鐘開始：讓運動真正融入生活",
    image: "/逢源科技.jpg",
  },
  {
    title: "DELL 戴爾電腦",
    program: "飲食體態",
    company: "增肌減脂全攻略",
    image: "/DELL.jpg",
  },
  {
    title: "國立台灣體育大學",
    program: "飲食體態",
    company: "燃燒脂肪，塑造身材",
    image: "/國立台灣體育大學.jpg",
  },
  {
    title: "DDSC 中菲電腦",
    program: "飲食體態",
    company: "【久坐族救星】國手教你增肌減脂",
    image: "/中菲電腦.jpg",
  },
  {
    title: "COMPAL 仁寶電腦",
    program: "飲食體態",
    company: "久坐族救星：國手教你增肌減脂",
    image: "/仁寶電腦.jpg",
  },
  {
    title: "AFOP 逢源科技",
    program: "運動實作",
    company: "上班族入門增肌",
    image: "/逢源科技增肌.jpg",
  },
  {
    title: "ASUS 華碩電腦",
    program: "飲食體態",
    company: "運動飲食大揭密",
    image: "/華碩電腦.jpg",
  },
  {
    title: "ACSI 安碁電腦",
    program: "飲食體態",
    company: "上班族也做得到的體重管理",
    image: "/安碁電腦2.png",
  },
];

export default function CasesPage() {
  const [isMobile, setIsMobile] = useState(false);

  const featuredCase = cases[0];
  const gridCases = cases.slice(1);

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

  const footerContactTextStyle: React.CSSProperties = {
    color: "#b8b3ac",
    fontSize: "13.5px",
    fontWeight: 300,
    lineHeight: "2.0",
    letterSpacing: "0.04em",
  };

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
            textTransform: "uppercase",
            fontWeight: 400,
          }}
        >
          CASE STUDIES
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
          合作案例
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
          各大企業健康講座、運動實作與健康工作坊活動，
          <br style={{ display: isMobile ? "none" : "block" }} />
          協助企業打造更有韌性的健康文化。
        </p>
      </section>

      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: isMobile ? "40px 30px 90px" : "70px 24px 140px",
        }}
      >
        {featuredCase && (
          <div
            style={{
              display: "flex",
              gap: isMobile ? "28px" : "64px",
              alignItems: "center",
              marginBottom: isMobile ? "72px" : "120px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                flex: isMobile ? "1 1 100%" : "1 1 550px",
                aspectRatio: "16 / 10",
                borderRadius: "4px",
                overflow: "hidden",
                background: "#ece7df",
              }}
            >
              <img
                src={featuredCase.image}
                alt={featuredCase.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div
              style={{
                flex: isMobile ? "1 1 100%" : "1 1 380px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  color: "#8a847c",
                  marginBottom: "16px",
                  textTransform: "uppercase",
                }}
              >
                FEATURED ／ {featuredCase.program}
              </p>

              <h2
                style={{
                  fontFamily: serifFont,
                  fontSize: isMobile ? "30px" : "36px",
                  marginBottom: "16px",
                  fontWeight: 400,
                  lineHeight: 1.35,
                  letterSpacing: "0.02em",
                }}
              >
                {featuredCase.title}
              </h2>

              <p
                style={{
                  color: "#5a5550",
                  fontSize: "15px",
                  fontWeight: 300,
                  lineHeight: "1.9",
                  letterSpacing: "0.03em",
                }}
              >
                {featuredCase.company}
              </p>
            </div>
          </div>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fill, minmax(340px, 1fr))",
            gap: isMobile ? "48px" : "60px 40px",
          }}
        >
          {gridCases.map((item, idx) => (
            <div key={`${item.title}-${idx}`}>
              <div
                style={{
                  aspectRatio: "16 / 10",
                  borderRadius: "4px",
                  overflow: "hidden",
                  marginBottom: "24px",
                  background: "#e9e4dc",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <p
                style={{
                  fontSize: "11px",
                  color: "#9c9c9c",
                  marginBottom: "8px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                {item.program}
              </p>

              <h3
                style={{
                  fontFamily: serifFont,
                  fontSize: isMobile ? "26px" : "28px",
                  fontWeight: 400,
                  marginBottom: "8px",
                  lineHeight: 1.35,
                  letterSpacing: "0.02em",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: "1.8",
                  letterSpacing: "0.03em",
                }}
              >
                {item.company}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer
        style={{
          background: "#2d2d2d",
          color: "#f8f6f2",
          padding: "100px 24px 48px",
          fontFamily: sansFont,
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
          <div>
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
                color: "#a19b93",
                lineHeight: "2.0",
                fontSize: "14px",
                fontWeight: 300,
              }}
            >
              Corporate Wellness Studio
              <br />
              讓健康更容易開始，也更容易持續
            </p>
          </div>

          <div>
            <p
              style={{
                letterSpacing: "0.3em",
                fontSize: "11px",
                color: "#7e7871",
                marginBottom: 24,
              }}
            >
              CONTACT
            </p>

            <p style={footerContactTextStyle}>Instagram：easehealth</p>
            <p style={footerContactTextStyle}>Email：contact@easehealth.com</p>
            <p style={footerContactTextStyle}>Location：Taiwan</p>
          </div>
        </div>

        <div
          style={{
            maxWidth: "1180px",
            margin: "80px auto 0",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 32,
            color: "#7e7871",
            fontSize: "12px",
            letterSpacing: "0.06em",
            fontWeight: 300,
          }}
        >
          © 2026 EASE WELLNESS. All rights reserved.
        </div>
      </footer>
    </main>
  );
}