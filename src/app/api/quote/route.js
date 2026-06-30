import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { 
      name, 
      email, 
      phone,
      businessName,
      issueType,
      accountPlatform,
      monthlyRevenue,
      productCategory,
      urgency,
      message,
      country 
    } = body;

    // ✅ Validate required fields
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

    // ✅ Verify SMTP connection
    await transporter.verify().catch((err) => {
      console.error("SMTP Verify Failed:", err.message);
    });

    // ✅ Send confirmation email to user
    await transporter.sendMail({
      from: `"Dropshipping & eBay Consulting Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ We've Received Your Dropshipping Inquiry",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c3e50;">Hi ${name},</h2>
          <p>Thank you for reaching out to our dropshipping and eBay consulting team! We've received your inquiry and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #2c3e50; margin-top: 0;">📋 Your Inquiry Details:</h3>
            <p><strong>📧 Email:</strong> ${email}</p>
            ${phone ? `<p><strong>📞 Phone:</strong> ${phone}</p>` : ''}
            ${country ? `<p><strong>📞 Country:</strong> ${country}</p>` : ''}
            ${businessName ? `<p><strong>🏢 Business Name:</strong> ${businessName}</p>` : ''}
            ${issueType ? `<p><strong>🔍 Issue Type:</strong> ${issueType}</p>` : ''}
            ${accountPlatform ? `<p><strong>📱 Platform:</strong> ${accountPlatform}</p>` : ''}
            ${monthlyRevenue ? `<p><strong>💰 Monthly Revenue:</strong> ${monthlyRevenue}</p>` : ''}
            ${productCategory ? `<p><strong>📦 Product Category:</strong> ${productCategory}</p>` : ''}
            ${urgency ? `<p><strong>⚡ Urgency:</strong> ${urgency}</p>` : ''}
            <p><strong>📝 Message:</strong> ${message}</p>
          </div>
          
          <p>Our team specializes in:</p>
          <ul>
            <li>eBay account management and optimization</li>
            <li>Dropshipping store setup and growth</li>
            <li>Product sourcing and supplier relations</li>
            <li>Listing optimization and SEO</li>
            <li>Order fulfillment and customer service</li>
            <li>Account suspension and policy compliance</li>
          </ul>
          
          <p>We look forward to helping you grow your dropshipping business!</p>
          
          <p style="color: #7f8c8d; font-size: 14px;">
            Best regards,<br>
            <strong>Your Dropshipping & eBay Consulting Team</strong>
          </p>
          
          <hr style="border: none; border-top: 1px solid #ecf0f1; margin: 20px 0;">
          <p style="color: #95a5a6; font-size: 12px;">
            This is an automated confirmation. Please do not reply to this email.
          </p>
        </div>
      `,
    });

    // ✅ Send notification email to your team
    await transporter.sendMail({
      from: `"Dropshipping Lead" <${process.env.EMAIL_USER}>`,
      to: "waseemriazoffical@gmail.com",
      subject: `📩 New Dropshipping Consultation Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c3e50;">📩 New Dropshipping Consultation Request</h2>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #2c3e50; margin-top: 0;">👤 Client Information:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${businessName ? `<p><strong>Business Name:</strong> ${businessName}</p>` : ''}
          </div>
          
          <div style="background-color: #e8f4fd; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #2c3e50; margin-top: 0;">📊 Business Details:</h3>
            ${issueType ? `<p><strong>Issue Type:</strong> ${issueType}</p>` : ''}
            ${accountPlatform ? `<p><strong>Platform:</strong> ${accountPlatform}</p>` : ''}
            ${monthlyRevenue ? `<p><strong>Monthly Revenue:</strong> $${monthlyRevenue}</p>` : ''}
            ${productCategory ? `<p><strong>Product Category:</strong> ${productCategory}</p>` : ''}
            ${urgency ? `<p><strong>Urgency Level:</strong> ${urgency}</p>` : ''}
          </div>
          
          <div style="background-color: #fdf6e3; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #2c3e50; margin-top: 0;">💬 Client Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #7f8c8d; font-size: 14px;">
            <strong>Priority:</strong> ${urgency === 'urgent' ? '🔴 URGENT - Respond ASAP' : urgency === 'within-week' ? '🟡 Respond within 48 hours' : '🟢 Respond within 72 hours'}
          </p>
          
          <hr style="border: none; border-top: 1px solid #ecf0f1; margin: 20px 0;">
          <p style="color: #95a5a6; font-size: 12px;">
            This is an automated notification from your dropshipping consulting website.
          </p>
        </div>
      `,
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