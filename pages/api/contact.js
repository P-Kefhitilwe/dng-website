import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, country, message } = req.body;

  // Validate required fields
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }

  try {
    // Create the email transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Format the data
    const formattedPhone = phone || 'Not provided';
    const formattedCountry = country || 'Not provided';
    const formattedMessage = message || 'No message provided';

    // Build the email HTML
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Inter', Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #15803d; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .body { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 16px; }
          .label { font-weight: bold; color: #15803d; }
          .value { margin-top: 4px; }
          .divider { border-top: 1px solid #e5e7eb; margin: 20px 0; }
          .footer { text-align: center; color: #6b7280; font-size: 12px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🟢 New DnG Distributor Lead</h2>
          </div>
          <div class="body">
            <div class="field">
              <div class="label">📛 Full Name</div>
              <div class="value"><strong>${name}</strong></div>
            </div>
            <div class="field">
              <div class="label">📧 Email Address</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            <div class="field">
              <div class="label">📞 Phone Number</div>
              <div class="value"><a href="tel:${phone}">${formattedPhone}</a></div>
            </div>
            <div class="field">
              <div class="label">🌍 Country</div>
              <div class="value">${formattedCountry}</div>
            </div>
            <div class="field">
              <div class="label">💬 Message</div>
              <div class="value" style="background: white; padding: 12px; border-radius: 4px; border: 1px solid #e5e7eb;">
                ${formattedMessage}
              </div>
            </div>
            <div class="divider"></div>
            <p style="font-size: 14px; color: #6b7280;">
              This lead came from the DnG website join form.
              Reply directly to this email to contact the prospect.
            </p>
          </div>
          <div class="footer">
            DnG Worldwide | 1 Account, 1 System, 200 Countries
          </div>
        </div>
      </body>
      </html>
    `;

    // Plain text version for email clients that don't support HTML
    const textContent = `
      NEW DNG DISTRIBUTOR LEAD
      -----------------------
      Name: ${name}
      Email: ${email}
      Phone: ${formattedPhone}
      Country: ${formattedCountry}
      Message: ${formattedMessage}
      -----------------------
      Reply to this email to contact the prospect.
    `;

    // Configure the email
    const mailOptions = {
      from: `"DnG Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `🟢 New DnG Lead: ${name}`,
      text: textContent,
      html: htmlContent,
      replyTo: email,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Log success in the terminal
    console.log(`✅ Lead email sent for: ${name} (${email})`);

    // Return success response
    res.status(200).json({
      message: 'Thank you! We will contact you soon.'
    });

  } catch (error) {
    console.error('❌ Email sending error:', error);
    res.status(500).json({
      message: 'Failed to submit. Please try again or contact us directly.'
    });
  }
}