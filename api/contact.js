// api/contact.js
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  let data = {};
  try {
    data = req.body || {};
    if (typeof req.body === 'string') {
      data = JSON.parse(req.body);
    }
  } catch (err) {
    return res.status(400).json({ message: 'Invalid JSON' });
  }

  const { name, email, company, service, message } = data;
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Configure transporter for Zoho SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.ZOHO_SMTP_HOST,
    port: Number(process.env.ZOHO_SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_SMTP_USER,
      pass: process.env.ZOHO_SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.ZOHO_SMTP_USER}>`,
      to: 'info@growthiqx.com',
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || ''}\nService: ${service || ''}\nMessage: ${message}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Company:</b> ${company || ''}</p><p><b>Service:</b> ${service || ''}</p><p><b>Message:</b><br/>${message}</p>`
    });
    return res.status(200).json({ message: 'Form submitted and email sent successfully!' });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return res.status(500).json({ message: 'Failed to send email', details: error.message });
  }
};
