"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
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

  const backgrounds = [
    {
      id: "01",
      title: "健康管理專業",
      desc: "從健康風險、預防保健與生活型態管理角度出發，協助企業看見員工真正需要的健康支持。",
    },
    {
      id: "02",
      title: "科技產業十年經驗",
      desc: "長期理解久坐、高壓與高工時環境下的健康挑戰，熟悉企業文化與員工真實工作情境。",
    },
    {
      id: "03",
      title: "國手與運動科學背景",
      desc: "將競技訓練與運動科學轉化為一般上班族也能安全參與、容易開始的健康行動。",
    },
    {
      id: "04",
      title: "企業健康管理實務",
      desc: "實際規劃企業健康講座、運動課程與健康促進活動，讓健康不只停留在理念，而能真正落地。",
    },
  ];

  const process = [
    {
      step: "01",
      title: "理解企業需求",
      desc: "了解企業目標、員工特性與目前面臨的健康議題。",
    },
    {
      step: "02",
      title: "設計適合方案",
      desc: "依照需求規劃健康講座、工作坊或運動實作課程。",
    },
    {
      step: "03",
      title: "讓健康轉化為行動",
      desc: "透過清楚、低門檻且可參與的方式，協助員工從認知走向實踐。",
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
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      <Navbar />

      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: isMobile ? "56px 30px 80px" : "90px 24px 120px",
          display: "flex",
          gap: isMobile ? "40px" : "70px",
          alignItems: "center",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <div
          style={{
            flex: isMobile ? "1 1 100%" : "1 1 360px",
            width: "100%",
            maxWidth: isMobile ? "420px" : "440px",
            aspectRatio: "4 / 5",
            overflow: "hidden",
            borderRadius: "4px",
            background: "#ece7df",
            boxShadow: "0 20px 40px rgba(0,0,0,0.015)",
          }}
        >
          <img
            src="/ruby形象照2.png"
            alt="EASE founder"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        <div style={{ flex: isMobile ? "1 1 100%" : "1 1 520px", width: "100%" }}>
          <p
            style={{
              letterSpacing: "0.35em",
              fontSize: "12px",
              color: "#8a847c",
              marginBottom: 20,
              fontWeight: 400,
            }}
          >
            ABOUT EASE
          </p>

          <h1
            style={{
              fontFamily: serifFont,
              fontSize: "clamp(36px, 8vw, 48px)",
              lineHeight: 1.4,
              marginBottom: "28px",
              fontWeight: 400,
              letterSpacing: "0.04em",
            }}
          >
            健康不只是一次活動
            <br />
            讓它自然地融入工作與生活
          </h1>

          <p
            style={{
              fontSize: "15px",
              color: "#666",
              lineHeight: "2.1",
              fontWeight: 300,
              maxWidth: "620px",
              letterSpacing: "0.05em",
            }}
          >
            EASE 結合健康管理專業、科技產業經驗、國手競技背景與企業健康管理實務，
            協助企業透過講座、工作坊與運動實作課程，
            打造員工更容易參與、也更容易持續的健康體驗。
          </p>
        </div>
      </section>

      <section
        style={{
          background: "#ece7df",
          padding: isMobile ? "72px 30px" : "96px 24px",
        }}
      >
        <div style={{ maxWidth: "980px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.3em",
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
              marginBottom: "32px",
              letterSpacing: "0.03em",
            }}
          >
            為什麼創立 EASE
          </h2>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "2.1",
              color: "#666",
              fontWeight: 300,
              maxWidth: "760px",
              letterSpacing: "0.05em",
            }}
          >
            在醫護工作與企業健康管理經驗中，我發現許多健康活動雖然投入資源，
            卻不一定能真正改變員工的行為。原因往往不是員工不重視健康，
            而是活動離真實生活太遠。
            <br />
            <br />
            因此創立 EASE，希望用更貼近職場需求的方式，
            讓健康變得容易開始，也更容易持續。
          </p>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: isMobile ? "72px 30px" : "110px 24px",
        }}
      >
        <div style={{ marginBottom: isMobile ? "48px" : "64px" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: "#8a847c",
              marginBottom: "16px",
              textTransform: "uppercase",
            }}
          >
            Background
          </p>

          <h2
            style={{
              fontFamily: serifFont,
              fontSize: isMobile ? "34px" : "42px",
              fontWeight: 400,
              letterSpacing: "0.03em",
              lineHeight: 1.35,
            }}
          >
            EASE 的專業來自四個領域
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fit, minmax(240px, 1fr))",
            gap: isMobile ? "36px" : "40px",
          }}
        >
          {backgrounds.map((item) => (
            <div
              key={item.id}
              style={{
                borderTop: "1px solid rgba(0,0,0,0.08)",
                paddingTop: "28px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  color: "#aaa",
                  fontFamily: "monospace",
                  marginBottom: "20px",
                  letterSpacing: "0.1em",
                }}
              >
                {item.id}
              </p>

              <h3
                style={{
                  fontFamily: serifFont,
                  fontSize: "24px",
                  fontWeight: 400,
                  marginBottom: "18px",
                  letterSpacing: "0.02em",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: "14px",
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
      </section>

      <section
        style={{
          background: "#fff",
          padding: isMobile ? "72px 30px" : "110px 24px",
        }}
      >
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: "#8a847c",
              marginBottom: "16px",
              textTransform: "uppercase",
            }}
          >
            Approach
          </p>

          <h2
            style={{
              fontFamily: serifFont,
              fontSize: isMobile ? "34px" : "42px",
              fontWeight: 400,
              marginBottom: isMobile ? "48px" : "64px",
              letterSpacing: "0.03em",
              lineHeight: 1.35,
            }}
          >
            我們如何協助企業
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "32px",
            }}
          >
            {process.map((item) => (
              <div
                key={item.step}
                style={{
                  background: "#f8f6f2",
                  padding: isMobile ? "32px 28px" : "40px 36px",
                  borderRadius: "4px",
                  border: "1px solid rgba(0,0,0,0.03)",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    color: "#aaa",
                    fontFamily: "monospace",
                    marginBottom: "24px",
                    letterSpacing: "0.1em",
                  }}
                >
                  {item.step}
                </p>

                <h3
                  style={{
                    fontFamily: serifFont,
                    fontSize: "24px",
                    fontWeight: 400,
                    marginBottom: "18px",
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    lineHeight: "2.1",
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
          正在規劃企業健康活動？
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
          一起打造更容易參與、更能持續的健康體驗。
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
          聯絡我們 →
        </a>
      </section>
    </main>
  );
}