import nodemailer from "nodemailer";

export const sendOtpMail = async (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    console.log("📨 Trying to send email...");

    const info = await transporter.sendMail({
      from: `Burka Store <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp}`
    });

    console.log("✅ Email sent:", info.response);
    return true;

  } catch (error) {
    console.error("❌ Mail error:", error.message);
    return false;
  }
};
