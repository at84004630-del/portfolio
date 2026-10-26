import { NextRequest, NextResponse } from "next/server";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, _honey } = body;

    // Honeypot check - silently drop bot submissions
    if (_honey) {
      return NextResponse.json({
        success: true,
        message: "Message processed successfully.",
      });
    }

    // Input validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, message: "Please provide your name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email format." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { success: false, message: "Please enter your message." },
        { status: 400 }
      );
    }

    const targetEmail = PORTFOLIO_DATA.personal.email;

    // Send via FormSubmit service to target inbox
    const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Referer: "https://portfolio-at84004630.vercel.app",
        Origin: "https://portfolio-at84004630.vercel.app",
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        _replyto: email.trim(),
        _subject: subject?.trim() || `Portfolio Contact Inquiry from ${name.trim()}`,
        message: message.trim(),
        _template: "table",
        _captcha: "false",
      }),
    });

    const data = await formSubmitResponse.json();

    // Check if form requires one-time email activation from the owner
    const isActivationNeeded =
      typeof data.message === "string" &&
      /activation|activate/i.test(data.message);

    if (isActivationNeeded) {
      return NextResponse.json({
        success: true,
        needsActivation: true,
        message:
          "FormSubmit has sent a one-time activation email to at84004630@gmail.com. Please check your inbox and click 'Activate Form' once to start receiving all messages directly!",
      });
    }

    const isSuccess =
      data.success === true ||
      data.success === "true" ||
      (typeof data.message === "string" && /success/i.test(data.message));

    if (isSuccess) {
      return NextResponse.json({
        success: true,
        needsActivation: false,
        message: "Your message has been sent successfully to Abhinav's inbox!",
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: data.message || "Failed to deliver email through service.",
      },
      { status: 502 }
    );
  } catch (error: unknown) {
    console.error("API /contact error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "An internal error occurred while dispatching your message.",
      },
      { status: 500 }
    );
  }
}
