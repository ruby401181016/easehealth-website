"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const programTopics = {
  nutrition: {
    label: "飲食體態 Nutrition",
    topics: [
      "久坐族救星：國手教你無痛減脂",
      "燃燒脂肪關鍵策略：外食族也適用",
      "增肌減脂一次搞懂：零基礎也能做",
      "為什麼瘦了又復胖？體態維持的關鍵機制",
    ],
  },
  healthData: {
    label: "健康數據管理 Health Data",
    topics: [
      "上班族必懂健檢數據",
      "代謝症候群與慢性疲勞",
      "內分泌失衡與體態變化",
      "久坐族健康管理",
    ],
  },
  movement: {
    label: "運動實作 Movement",
    topics: [
      "上班族增肌入門：建立力量與代謝基礎",
      "不去健身房也能練：居家／辦公室肌力訓練",
      "練對比練多更重要：動作品質與訓練效率",
      "打造不容易受傷的身體：上班族功能性訓練",
    ],
  },
  recovery: {
    label: "疼痛修復 Recovery",
    topics: ["久坐肩頸腰痛修復", "身體失衡修復", "滑鼠手與腕痛改善", "活動能力重建"],
  },
  lifestyle: {
    label: "習慣養成 Lifestyle",
    topics: [
      "從三分鐘開始：讓運動融入生活",
      "明明知道卻做不到？破解健康行動卡關點",
      "環境正在影響你：打造健康的生活空間",
      "找到適合你的運動方式",
    ],
  },
  workshops: {
    label: "健康工作坊 Workshops",
    topics: ["MOVE LAB", "人體使用說明書", "Office Athlete", "BODY RESET"],
  },
  custom: {
    label: "其他 Other",
    topics: ["尚未確定，想先討論"],
  },
};

type ProgramKey = keyof typeof programTopics;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
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

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: "none",
    borderBottom: "1px solid rgba(0,0,0,0.12)",
    background: "transparent",
    padding: "14px 0",
    fontSize: "14.5px",
    color: "#2d2d2d",
    outline: "none",
    fontFamily: sansFont,
    fontWeight: 300,
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: sansFont,
    fontSize: "11px",
    letterSpacing: "0.25em",
    color: "#8a847c",
    textTransform: "uppercase",
    marginBottom: "6px",
    fontWeight: 400,
  };

  const contactTextStyle: React.CSSProperties = {
    fontFamily: sansFont,
    color: "#b8b3ac",
    fontSize: "13.5px",
    lineHeight: "2.0",
    fontWeight: 300,
    marginBottom: "10px",
    letterSpacing: "0.04em",
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
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
          background: "#ece7df",
          padding: isMobile ? "56px 24px 48px" : "80px 24px 70px",
          textAlign: "center",
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
          CONTACT
        </p>

        <h1
          style={{
            fontFamily: serifFont,
            fontSize: "clamp(34px, 5vw, 44px)",
            marginBottom: 24,
            fontWeight: 400,
            letterSpacing: "0.04em",
          }}
        >
          合作洽詢
        </h1>

        <p
          style={{
            fontSize: "15px",
            color: "#5a5550",
            maxWidth: "720px",
            margin: "0 auto",
            lineHeight: "2.1",
            fontWeight: 300,
            letterSpacing: "0.04em",
          }}
        >
          健康講座 ｜ 健康工作坊 ｜ 運動實作
          <br />
          留下您的合作需求，我們將與您聯繫
        </p>
      </section>

      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: isMobile ? "36px 20px 90px" : "70px 24px 120px",
          display: "flex",
          gap: isMobile ? "48px" : "80px",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flex: isMobile ? "1 1 100%" : "1 1 540px",
            order: isMobile ? 1 : 2,
            background: "#fff",
            padding: isMobile ? "36px 24px" : "52px 48px",
            borderRadius: "4px",
            boxShadow: "0 20px 50px rgba(45,45,45,0.025)",
            minHeight: "400px",
          }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gap: "36px" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                    gap: "36px",
                  }}
                >
                  <div>
                    <p style={labelStyle}>Name *</p>
                    <input required name="name" placeholder="您的姓名" style={inputStyle} />
                  </div>

                  <div>
                    <p style={labelStyle}>Company *</p>
                    <input required name="company" placeholder="公司 / 單位名稱" style={inputStyle} />
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                    gap: "36px",
                  }}
                >
                  <div>
                    <p style={labelStyle}>Position</p>
                    <input name="position" placeholder="職稱" style={inputStyle} />
                  </div>

                  <div>
                    <p style={labelStyle}>Phone *</p>
                    <input required name="phone" placeholder="聯絡電話" style={inputStyle} />
                  </div>
                </div>

                <div>
                  <p style={labelStyle}>Email *</p>
                  <input required type="email" name="email" placeholder="Email 地址" style={inputStyle} />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                    gap: "36px",
                  }}
                >
                  <div>
                    <p style={labelStyle}>Program Interest *</p>
                    <select
                      required
                      name="program"
                      value={selectedProgram}
                      onChange={(e) => {
                        setSelectedProgram(e.target.value);
                        setSelectedTopic("");
                      }}
                      style={{ ...inputStyle, cursor: "pointer" }}
                    >
                      <option value="" disabled>
                        請選擇合作需求
                      </option>

                      {Object.entries(programTopics).map(([key, program]) => (
                        <option key={key} value={key}>
                          {program.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <p style={labelStyle}>Topic *</p>
                    <select
                      required
                      name="topic"
                      value={selectedTopic}
                      disabled={!selectedProgram}
                      onChange={(e) => setSelectedTopic(e.target.value)}
                      style={{
                        ...inputStyle,
                        cursor: selectedProgram ? "pointer" : "not-allowed",
                        color: selectedProgram ? "#2d2d2d" : "#aaa",
                      }}
                    >
                      <option value="" disabled>
                        {selectedProgram ? "請選擇課程內容" : "請先選擇合作需求"}
                      </option>

                      {selectedProgram &&
                        programTopics[selectedProgram as ProgramKey].topics.map((topic) => (
                          <option key={topic} value={topic}>
                            {topic}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                <div>
                  <p style={labelStyle}>Participants</p>
                  <input name="participants" placeholder="預估參與人數，例如：50人" style={inputStyle} />
                </div>

                <div>
                  <p style={labelStyle}>Message *</p>
                  <textarea
                    required
                    name="message"
                    placeholder="請簡單描述您的需求、希望主題、活動時間或場地形式"
                    rows={4}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      lineHeight: "1.9",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    marginTop: "16px",
                    width: "100%",
                    padding: "18px 24px",
                    border: "none",
                    background: "#2d2d2d",
                    color: "#f8f6f2",
                    fontSize: "12px",
                    letterSpacing: "0.25em",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                >
                  送出合作需求 →
                </button>
              </div>
            </form>
          ) : (
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <h3
                style={{
                  fontFamily: serifFont,
                  fontSize: "26px",
                  fontWeight: 400,
                  marginBottom: "16px",
                }}
              >
                Thank You
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: "2.0",
                  fontWeight: 300,
                }}
              >
                合作需求已成功送出。EASE 團隊將於 1-2 個工作天內與您聯繫。
              </p>
            </div>
          )}
        </div>

        <div
          style={{
            flex: isMobile ? "1 1 100%" : "1 1 380px",
            order: isMobile ? 2 : 1,
          }}
        >
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: "#8a847c",
              marginBottom: "16px",
              textTransform: "uppercase",
              fontWeight: 400,
            }}
          >
            Work With EASE
          </p>

          <h2
            style={{
              fontFamily: serifFont,
              fontSize: isMobile ? "30px" : "32px",
              lineHeight: 1.4,
              fontWeight: 400,
              marginBottom: "28px",
              letterSpacing: "0.03em",
            }}
          >
            打造真正融入
            <br />
            生活與工作的健康體驗
          </h2>

          <p
            style={{
              fontSize: "14.5px",
              lineHeight: "2.1",
              color: "#666",
              fontWeight: 300,
              marginBottom: 0,
              letterSpacing: "0.04em",
            }}
          >
            EASE 提供企業健康講座、運動實作課程、疼痛修復主題與互動式健康工作坊。
            <br />
            <br />
            依照企業規模、活動目標與員工需求，規劃最適合的方案。
          </p>
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

            <p style={contactTextStyle}>Instagram：easehealth</p>
            <p style={contactTextStyle}>Email：contact@easehealthtw.com</p>
            <p style={contactTextStyle}>Location：Taiwan</p>
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