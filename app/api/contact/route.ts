import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const receiverEmail =
  process.env.CONTACT_RECEIVER_EMAIL || "ruby@easehealthtw.com";

const fromEmail = "EASE Health <contact@easehealthtw.com>";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      company,
      position,
      phone,
      email,
      program,
      topic,
      participants,
      message,
    } = body;

    if (!name || !company || !phone || !email || !program || !topic || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const adminEmail = await resend.emails.send({
      from: fromEmail,
      to: receiverEmail,
      replyTo: email,
      subject: `EASE Health｜新的合作需求 - ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.8; color:#2d2d2d;">
          <h2 style="font-weight:400;">新的合作需求表單</h2>

          <p><strong>姓名：</strong>${name}</p>
          <p><strong>公司：</strong>${company}</p>
          <p><strong>職稱：</strong>${position || "-"}</p>
          <p><strong>電話：</strong>${phone}</p>
          <p><strong>Email：</strong>${email}</p>
          <p><strong>合作需求：</strong>${program}</p>
          <p><strong>主題：</strong>${topic}</p>
          <p><strong>參與人數：</strong>${participants || "-"}</p>

          <hr style="border:none; border-top:1px solid #e5e0d8; margin:24px 0;" />

          <p><strong>需求內容：</strong></p>
          <p style="white-space: pre-line;">${message}</p>
        </div>
      `,
    });

    const autoReply = await resend.emails.send({
      from: fromEmail,
      to: email,
      replyTo: receiverEmail,
      subject: "EASE Health｜我們已收到您的合作需求",
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.9; color:#2d2d2d;">
          <p style="letter-spacing:0.2em; color:#8a847c; font-size:12px;">EASE HEALTH</p>

          <h2 style="font-weight:400; margin-bottom:24px;">
            我們已收到您的合作需求
          </h2>

          <p>${name} 您好，</p>

          <p>
            感謝您提交 EASE Health 的合作洽詢。
            我們已收到您的資訊，團隊將於 1-2 個工作天內與您聯繫。
          </p>

          <p>
            您提交的合作方向為：<br />
            <strong>${program}</strong><br />
            <strong>${topic}</strong>
          </p>

          <p>
            若有更詳細的活動時間、預算、企業需求或希望補充的資訊，
            也歡迎直接回覆此信件。
          </p>

          <div style="margin-top:32px; padding-top:24px; border-top:1px solid #e5e0d8;">
            <p style="margin:0;">
              EASE Health<br />
              Corporate Wellness Studio<br />
              contact@easehealthtw.com
            </p>
          </div>
        </div>
      `,
    });

    console.log("Admin email:", adminEmail);
    console.log("Auto reply:", autoReply);

    if (adminEmail.error || autoReply.error) {
      return NextResponse.json(
        {
          error: adminEmail.error?.message || autoReply.error?.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      adminEmail: adminEmail.data,
      autoReply: autoReply.data,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Email send failed" },
      { status: 500 }
    );
  }
}