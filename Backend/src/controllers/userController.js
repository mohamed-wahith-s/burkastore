import User from "../models/User.js";
import { sendOtpMail } from "../utils/sendOtp.js";

export const forgotPassword = async (req, res) => {
  try {
    console.log("🔵 Forgot password API called");

    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ User not found");
      return res.status(404).json({ message: "User not found" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    user.otp = otp;
    user.otpExpiry = Date.now() + 5 * 60 * 1000;
    await user.save();

    console.log("📨 Sending OTP email...");
    await sendOtpMail(email, otp);

    console.log("✅ OTP mail function finished");

    res.json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("🔥 Forgot password error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
