import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, company, email, message } = body;

    const result = await resend.emails.send({
      from: "EASE Health <ruby@easehealthtw.com>",
      to: "ruby@easehealthtw.com",
      subject: `網站測試 - ${company}`,
      html: `
        <h2>測試成功</h2>

        <p>姓名: ${name}</p>
        <p>公司: ${company}</p>
        <p>Email: ${email}</p>
        <p>內容: ${message}</p>
      `,
    });

    console.log(result);

    if (result.error) {
      return NextResponse.json(
        {
          error: result.error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "server error",
      },
      { status: 500 }
    );
  }
}