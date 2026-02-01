import { useState } from "react";
import axios from "axios";

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const sendOtp = async () => {
    await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/send-otp`, { email });
    setStep(2);
  };

  const verifyOtp = async () => {
    await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/verify-otp`, { email, otp });
    setStep(3);
  };

  const resetPassword = async () => {
    await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/reset-password`, {
      email,
      newPassword: password
    });
    alert("Password reset successful");
  };

  return (
    <div className="container col-md-4 mt-5">
      <div className="card p-4">
        <h5 className="text-center">Forgot Password</h5>

        {step === 1 && (
          <>
            <input className="form-control mb-2" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <button className="btn btn-dark w-100" onClick={sendOtp}>Send OTP</button>
          </>
        )}

        {step === 2 && (
          <>
            <input className="form-control mb-2" placeholder="Enter OTP" onChange={e => setOtp(e.target.value)} />
            <button className="btn btn-dark w-100" onClick={verifyOtp}>Verify OTP</button>
          </>
        )}

        {step === 3 && (
          <>
            <input type="password" className="form-control mb-2" placeholder="New Password" onChange={e => setPassword(e.target.value)} />
            <button className="btn btn-success w-100" onClick={resetPassword}>Reset Password</button>
          </>
        )}
      </div>
    </div>
  );
}
