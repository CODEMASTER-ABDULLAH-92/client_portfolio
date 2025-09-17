import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, company, projectType, budget, timeline, message } = body;

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

    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS length:", process.env.EMAIL_PASS?.length);

    // ✅ Verify SMTP connection (logs error but doesn't break execution)
    await transporter.verify().catch((err) => {
      console.error("SMTP Verify Failed:", err);
    });

    // ✅ Send email
    const info = await transporter.sendMail({
      from: `"Muhammad Abdullah" <${process.env.EMAIL_USER}>`,
      to: email, // send confirmation to user
      subject: "✅ We received your message",
      text: `Hi ${name},

Thank you for contacting us. Here are the details you provided:

📌 Company: ${company || "N/A"}
📌 Project Type: ${projectType || "N/A"}
📌 Budget: ${budget || "N/A"}
📌 Timeline: ${timeline || "N/A"}
📌 Project Details: ${message || "N/A"}

We will get back to you soon.

- Muhammad Abdullah`,
    });

    return new Response(JSON.stringify({ success: true, info }), {
      status: 200,
    });

  } catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
