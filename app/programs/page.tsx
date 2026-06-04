"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const programCategories = [
  {
    number: "01",
    title: "健康數據與健康管理",
    subtitle: "Health Data & Wellness",
    description: "從數據了解身體狀況，建立正確健康觀念。",
    href: "/programs/health-data",
    items: ["上班族必懂的健檢數據", "從健檢報告看健康風險", "不是胖，是代謝出了問題", "久坐族健康管理"],
  },
  {
    number: "02",
    title: "體態管理與飲食觀念",
    subtitle: "Body Composition & Nutrition",
    description: "飲食觀念 × 體態管理，建立可持續的健康生活方式。",
    href: "/programs/body-composition",
    items: ["外食減脂策略", "增肌減脂一次搞懂", "不復胖生活管理", "上班族飲食規劃"],
  },
  {
    number: "03",
    title: "體能訓練與運動實作",
    subtitle: "Training & Movement",
    description: "透過實作體驗，建立正確訓練觀念。",
    href: "/programs/movement",
    items: ["上班族增肌入門", "居家／辦公室肌力訓練", "核心與穩定訓練", "動作品質與訓練效率"],
  },
  {
    number: "04",
    title: "疼痛改善與久坐修復",
    subtitle: "Pain Relief & Recovery",
    description: "改善久坐帶來的痠痛與身體失衡。",
    href: "/programs/pain-relief",
    items: ["肩頸腰背自救指南", "久坐造成的身體失衡", "辦公室痠痛改善", "日常修復伸展"],
  },
  {
    number: "05",
    title: "習慣養成與健康生活",
    subtitle: "Habits & Lifestyle",
    description: "從習慣開始，建立可持續的健康生活模式。",
    href: "/programs/habits-lifestyle",
    items: ["從三分鐘開始建立運動習慣", "如何維持運動動機", "建立可持續健康生活", "睡眠、壓力與恢復"],
  },
  {
    number: "06",
    title: "互動式健康工作坊",
    subtitle: "Interactive Wellness Workshops",
    description: "講座結合互動與實作，適合中小型企業健康活動。",
    href: "/programs/workshops",
    items: ["辦公室伸展帶動", "肩頸放鬆體驗", "彈力帶訓練體驗", "wellness mini session"],
  },
];

export default function ProgramsPage() {
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
          PROGRAMS
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
          課程主題分類
        </h1>

        <p
          style={{
            fontSize: "15px",
            color: "#5a5550",
            maxWidth: "680px",
            margin: "0 auto",
            lineHeight: "2.1",
            fontWeight: 300,
            letterSpacing: "0.04em",
          }}
        >
          專業健康講座 × 互動實作體驗，
          <br style={{ display: isMobile ? "none" : "block" }} />
          幫助企業提升員工健康力。
        </p>
      </section>

      <section
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: isMobile ? "40px 30px 90px" : "70px 24px 120px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fit, minmax(320px, 1fr))",
            gap: isMobile ? "28px" : "36px",
          }}
        >
          {programCategories.map((program) => (
            <a
              key={program.number}
              href={program.href}
              style={{
                background: "#fff",
                borderRadius: "4px",
                padding: isMobile ? "32px 28px" : "40px 38px",
                textDecoration: "none",
                color: "#2d2d2d",
                boxShadow: "0 20px 50px rgba(45,45,45,0.025)",
                display: "block",
                border: "1px solid rgba(0,0,0,0.035)",
              }}
            >
              <p
                style={{
                  fontFamily: serifFont,
                  fontSize: "28px",
                  color: "#c8bfb4",
                  marginBottom: "28px",
                  fontWeight: 400,
                  letterSpacing: "0.04em",
                }}
              >
                {program.number}
              </p>

              <p
                style={{
                  color: "#8a847c",
                  marginBottom: "12px",
                  fontSize: "11px",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  fontWeight: 400,
                }}
              >
                {program.subtitle}
              </p>

              <h2
                style={{
                  fontFamily: serifFont,
                  fontSize: isMobile ? "28px" : "30px",
                  lineHeight: 1.35,
                  marginBottom: "18px",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                }}
              >
                {program.title}
              </h2>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.9",
                  marginBottom: "28px",
                  fontSize: "14.5px",
                  fontWeight: 300,
                  letterSpacing: "0.03em",
                }}
              >
                {program.description}
              </p>

              <ul
                style={{
                  color: "#5f5a55",
                  lineHeight: "2.0",
                  paddingLeft: "18px",
                  marginBottom: "30px",
                  fontSize: "14px",
                  fontWeight: 300,
                  letterSpacing: "0.03em",
                }}
              >
                {program.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <span
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.22em",
                  borderBottom: "1px solid #2d2d2d",
                  paddingBottom: "4px",
                  display: "inline-block",
                }}
              >
                查看課程 →
              </span>
            </a>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: isMobile ? "72px 24px" : "96px 24px",
          textAlign: "center",
          background: "#fff",
        }}
      >
        <p
          style={{
            letterSpacing: "0.3em",
            fontSize: "11px",
            color: "#8a847c",
            marginBottom: 20,
            textTransform: "uppercase",
          }}
        >
          WORK WITH EASE
        </p>

        <h2
          style={{
            fontFamily: serifFont,
            fontSize: isMobile ? "34px" : "42px",
            marginBottom: 22,
            fontWeight: 400,
            letterSpacing: "0.03em",
          }}
        >
          不確定適合哪一種課程？
        </h2>

        <p
          style={{
            fontSize: "15px",
            color: "#666",
            lineHeight: "2.0",
            marginBottom: 36,
            fontWeight: 300,
            letterSpacing: "0.04em",
          }}
        >
          歡迎與 EASE 討論企業需求，
          <br />
          我們可以依照員工特性與活動目標，規劃最適合的健康方案。
        </p>

        <a
          href="/contact"
          style={{
            display: "inline-block",
            background: "#2d2d2d",
            color: "#f8f6f2",
            padding: "17px 44px",
            textDecoration: "none",
            fontSize: "12px",
            letterSpacing: "0.25em",
            borderRadius: "4px",
          }}
        >
          聯絡我們 →
        </a>
      </section>

      <Footer />
    </main>
  );
}