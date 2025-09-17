import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, company, projectType, budget, timeline, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // ✅ Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Verify SMTP connection but do not break if it fails
    await transporter.verify().catch((err) => {
      console.error("SMTP Verify Failed:", err.message);
    });

    // ✅ Send confirmation email to user
    await transporter.sendMail({
      from: `"Waseem Riaz" <${process.env.EMAIL_USER}>`,
      to: "waseemriazoffical@gmail.com",
      subject: "✅ We received your message",
      text: `Hi ${name},

Thank you for contacting us! Here are the details you provided:

📌 Company: ${company || "N/A"}
📌 Project Type: ${projectType || "N/A"}
📌 Budget: ${budget || "N/A"}
📌 Timeline: ${timeline || "N/A"}
📌 Project Details: ${message || "N/A"}
`,
    });

    // ✅ Send notification email to yourself
    await transporter.sendMail({
      from: `"Portfolio Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Quote Request from ${name}`,
      text: `New Quote Request:

👤 Name: ${name}
📧 Email: ${email}
🏢 Company: ${company || "N/A"}
📌 Project Type: ${projectType || "N/A"}
💲 Budget: ${budget || "N/A"}
⏳ Timeline: ${timeline || "N/A"}
📝 Message: ${message || "N/A"}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
