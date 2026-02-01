import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [forgotEmail, setForgotEmail] = useState("");
  const [showForgot, setShowForgot] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://burkastore.onrender.com/api/auth/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://burkastore.onrender.com/api/auth/forgot-password",
        { email: forgotEmail }
      );

      alert("OTP sent to your email");
      navigate("/verify-otp", { state: { email: forgotEmail } });
    } catch (err) {
      alert(err.response?.data?.message || "Failed to send OTP");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h3 className="text-center mb-3">
          {showForgot ? "Forgot Password" : "Login"}
        </h3>

        {/* LOGIN FORM */}
        {!showForgot && (
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className="btn btn-dark w-100 mb-2">Login</button>

            <div className="text-center">
              <button
                type="button"
                className="btn btn-link p-0"
                onClick={() => setShowForgot(true)}
              >
                Forgot password?
              </button>
            </div>

            <div className="text-center mt-2">
              Don’t have an account? <Link to="/signup">Signup</Link>
            </div>
          </form>
        )}

        {/* FORGOT PASSWORD FORM */}
        {showForgot && (
          <form onSubmit={handleForgotPassword}>
            <div className="mb-3">
              <label>Enter your email</label>
              <input
                type="email"
                className="form-control"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                required
              />
            </div>

            <button className="btn btn-dark w-100 mb-2">
              Send OTP
            </button>

            <div className="text-center">
              <button
                type="button"
                className="btn btn-link p-0"
                onClick={() => setShowForgot(false)}
              >
                Back to Login
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
