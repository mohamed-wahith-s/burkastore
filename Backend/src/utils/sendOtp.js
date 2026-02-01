import nodemailer from "nodemailer";

export const sendOtpMail = async (email, otp) => {
  console.log("📨 sendOtpMail called");
  console.log("EMAIL_USER:", process.env.EMAIL_USER ? "FOUND" : "MISSING");
  console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "FOUND" : "MISSING");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const info = await transporter.sendMail({
    from: `Burka Store <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your OTP Code",
    html: `<h2>Your OTP is: ${otp}</h2>`
  });

  console.log("✅ Mail sent:", info.messageId);
};
