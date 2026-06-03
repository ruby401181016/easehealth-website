"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  // 💡 同步風格 A 的高級感字體系統
  const serifFont = "'Cormorant Garamond', 'Playfair Display', 'Noto Serif TC', Georgia, serif";
  const sansFont = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans TC', Helvetica, Arial, sans-serif";

  const inputStyle = {
    width: "100%",
    border: "none",
    borderBottom: "1px solid rgba(0,0,0,0.12)",
    background: "transparent",
    padding: "14px 0", // 稍微拉大輸入框上下內襯
    fontSize: "14.5px", // 精緻微縮字級
    color: "#2d2d2d",
    outline: "none",
    fontFamily: sansFont, // 確保輸入文字為思源黑體
    fontWeight: 300,
    transition: "border-color 0.3s ease",
  };

  const labelStyle = {
    fontFamily: sansFont,
    fontSize: "11px",
    letterSpacing: "0.25em", // 加寬英文字標
    color: "#8a847c", // 暖調霧灰
    textTransform: "uppercase" as const,
    marginBottom: "6px",
    fontWeight: 400,
  };

  const contactTextStyle = {
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
        background: "#f8f6f2", // EASE 經典米白
        color: "#2d2d2d",
        fontFamily: sansFont,
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <Navbar />

      {/* Header Banner */}
      <section
        style={{
          background: "#ece7df", // 沉穩沙色
          padding: "80px 24px 70px", // 🚀 統一收緊上下留白
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
            fontFamily: serifFont, // 換上優雅明體
            fontSize: "clamp(34px, 5vw, 44px)",
            marginBottom: 24,
            fontWeight: 400,
            letterSpacing: "0.04em",
          }}
        >
          企業合作洽詢
        </h1>

        <p
          style={{
            fontSize: "15px",
            color: "#5a5550", // 空氣感深暖灰
            maxWidth: "720px",
            margin: "0 auto",
            lineHeight: "2.1", // 釋放行高壓力
            fontWeight: 300,
            letterSpacing: "0.04em",
          }}
        >
          健康講座 ｜ 健康工作坊 ｜ 運動實作 ｜ 企業 Wellness 活動
          <br />
          歡迎留下您的需求，我們將與您聯繫討論最適合的合作方式。
        </p>
      </section>

      {/* Main Content Form Section */}
      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "70px 24px 140px", // 🚀 頂部對齊優化
          display: "flex",
          gap: "80px",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* Left Side Info */}
        <div style={{ flex: "1 1 380px" }}>
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
              fontFamily: serifFont, // 換上優雅明體
              fontSize: "32px",
              lineHeight: 1.4,
              fontWeight: 400,
              marginBottom: "28px",
              letterSpacing: "0.03em",
            }}
          >
            打造更容易參與的
            <br />
            企業健康體驗
          </h2>

          <p
            style={{
              fontSize: "14.5px",
              lineHeight: "2.1",
              color: "#666",
              fontWeight: 300,
              marginBottom: "44px",
              letterSpacing: "0.04em",
            }}
          >
            EASE 提供企業健康講座、運動實作課程、疼痛修復主題與互動式健康工作坊。
            <br />
            <br />
            依照企業規模、活動目標與員工需求，規劃最適合的健康促進方案。
          </p>

          <div
            style={{
              borderTop: "1px solid rgba(0,0,0,0.06)",
              paddingTop: "28px",
            }}
          >
            <p
              style={{
                color: "#7e7871",
                lineHeight: "2.0",
                fontSize: "14px",
                fontWeight: 300,
                letterSpacing: "0.02em",
              }}
            >
              Email：ruby401181016@gmail.com
              <br />
              Location：Taiwan
            </p>
          </div>
        </div>

        {/* Right Side Form Card */}
        <div
          style={{
            flex: "1 1 540px",
            background: "#fff",
            padding: "52px 48px",
            borderRadius: "4px", // 精品微圓角
            boxShadow: "0 20px 50px rgba(45,45,45,0.025)", // 更隱約優雅的陰影
            minHeight: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gap: "36px" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "36px",
                  }}
                >
                  <div>
                    <p style={labelStyle}>Name *</p>
                    <input
                      required
                      name="name"
                      placeholder="您的姓名"
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <p style={labelStyle}>Company *</p>
                    <input
                      required
                      name="company"
                      placeholder="公司 / 單位名稱"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "36px",
                  }}
                >
                  <div>
                    <p style={labelStyle}>Position</p>
                    <input
                      name="position"
                      placeholder="職稱"
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <p style={labelStyle}>Phone *</p>
                    <input
                      required
                      name="phone"
                      placeholder="聯絡電話"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <p style={labelStyle}>Email *</p>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email 地址"
                    style={inputStyle}
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "36px",
                  }}
                >
                  <div>
                    <p style={labelStyle}>Program Interest *</p>
                    <select
                      required
                      name="program"
                      defaultValue=""
                      style={{ ...inputStyle, cursor: "pointer" }}
                    >
                      <option value="" disabled>請選擇合作需求</option>
                      <option value="飲食體態">飲食體態 Nutrition</option>
                      <option value="健康數據">健康數據 Health Data</option>
                      <option value="運動實作">運動實作 Movement</option>
                      <option value="疼痛修復">疼痛修復 Recovery</option>
                      <option value="習慣養成">習慣養成 Lifestyle</option>
                      <option value="健康工作坊">健康工作坊 Workshops</option>
                      <option value="企業 Wellness 活動">企業 Wellness 活動</option>
                      <option value="其他">其他</option>
                    </select>
                  </div>

                  <div>
                    <p style={labelStyle}>Format</p>
                    <select
                      name="format"
                      defaultValue=""
                      style={{ ...inputStyle, cursor: "pointer" }}
                    >
                      <option value="" disabled>請選擇活動形式</option>
                      <option value="企業講座">企業講座</option>
                      <option value="運動實作課程">運動實作課程</option>
                      <option value="互動工作坊">互動工作坊</option>
                      <option value="健康月活動">健康月活動</option>
                      <option value="年度健康促進規劃">年度健康促進規劃</option>
                      <option value="尚未確定">尚未確定，想先討論</option>
                    </select>
                  </div>
                </div>

                <div>
                  <p style={labelStyle}>Participants</p>
                  <input
                    name="participants"
                    placeholder="預估參與人數，例如：50人"
                    style={inputStyle}
                  />
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
                    letterSpacing: "0.25em", // 提高按鈕質感
                    cursor: "pointer",
                    borderRadius: "4px", // 微圓角
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  送出合作需求 &rarr;
                </button>
              </div>
            </form>
          ) : (
            /* 送出表單成功畫面 */
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "#ece7df",
                  margin: "0 auto 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  color: "#2d2d2d",
                }}
              >
                ✓
              </div>

              <h3
                style={{
                  fontFamily: serifFont, // 換上優雅明體
                  fontSize: "26px",
                  fontWeight: 400,
                  marginBottom: "16px",
                  letterSpacing: "0.03em",
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
                  maxWidth: "340px",
                  margin: "0 auto 36px",
                  letterSpacing: "0.03em",
                }}
              >
                合作需求已成功送出。我們非常期待與您討論企業健康講座、工作坊或活動規劃。
                EASE 團隊將於 1-2 個工作天內與您聯繫。
              </p>

              <button
                onClick={() => setSubmitted(false)}
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid #2d2d2d",
                  paddingBottom: "4px",
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                  color: "#2d2d2d",
                  cursor: "pointer",
                  fontFamily: sansFont,
                }}
              >
                返回表單修改
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer Section 🚀 已同步高訂不對稱深灰系統 */}
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