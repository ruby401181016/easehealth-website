export default function Footer() {
  // 同步風格 A 的高級感字體系統
  const serifFont = "'Cormorant Garamond', 'Playfair Display', 'Noto Serif TC', Georgia, serif";
  const sansFont = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans TC', Helvetica, Arial, sans-serif";

  // 優化後的精緻聯絡資訊樣式（思源細黑體 + 高級霧灰白）
  const contactTextStyle = {
    fontFamily: sansFont,
    color: "#b8b3ac", // 帶有一點點暖調的霧灰白，比純白更有質感
    fontSize: "13.5px", // 稍微縮小字級，營造微縮精緻感
    lineHeight: "2.0",
    fontWeight: 300,
    marginBottom: "10px",
    letterSpacing: "0.04em",
  };

  return (
    <footer
      style={{
        background: "#2d2d2d", // 溫潤沉穩的深灰
        color: "#f8f6f2",
        padding: "100px 24px 48px", // 稍微加高上襯，讓收尾更具儀式感
        fontFamily: sansFont,
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          display: "grid",
          // 在大螢幕上使用 1.4 : 1 的不對稱高級感佈局，手機平板則自動轉單欄
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "64px",
        }}
      >
        {/* 左側：品牌定調 */}
        <div style={{ maxWidth: "420px" }}>
          <h2
            style={{
              fontFamily: serifFont, // 改用優雅明體
              fontSize: "30px", // 稍微收斂，更顯內斂
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
              color: "#a19b93", // 調淡內文顏色，降低視覺噪音
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

        {/* 右側：聯絡資訊 */}
        <div>
          <p
            style={{
              fontFamily: sansFont,
              letterSpacing: "0.3em", // 加寬英文字距，精品感指標
              fontSize: "11px",
              color: "#7e7871", // 讓標題顏色沉下去
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

      {/* 底部版權宣告 */}
      <div
        style={{
          maxWidth: "1180px",
          margin: "80px auto 0", // 拉開版權宣告的間距
          borderTop: "1px solid rgba(255,255,255,0.06)", // 讓分界線極度淡化隱約
          paddingTop: 32,
          color: "#7e7871", // 微縮降噪
          fontSize: "12px",
          letterSpacing: "0.06em",
          fontFamily: sansFont,
          fontWeight: 300,
        }}
      >
        © 2026 EASE WELLNESS. All rights reserved.
      </div>
    </footer>
  );
}