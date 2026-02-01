import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/auth/login`,
      { email, password }
    );
    localStorage.setItem("token", res.data.token);
    navigate("/");
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3>Login</h3>
      <form onSubmit={submit}>
        <input className="form-control mb-2" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" className="form-control mb-2" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button className="btn btn-success w-100">Login</button>
      </form>
      <p className="mt-3">No account? <Link to="/signup">Signup</Link></p>
    </div>
  );
}
