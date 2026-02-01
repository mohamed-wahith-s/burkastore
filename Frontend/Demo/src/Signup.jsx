import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await axios.post(
      `${import.meta.env.VITE_API_URL}/api/auth/signup`,
      { name, email, password }
    );
    navigate("/login");
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3>Signup</h3>
      <form onSubmit={submit}>
        <input className="form-control mb-2" placeholder="Name" onChange={e => setName(e.target.value)} />
        <input className="form-control mb-2" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" className="form-control mb-2" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button className="btn btn-primary w-100">Signup</button>
      </form>
      <p className="mt-3">Have account? <Link to="/login">Login</Link></p>
    </div>
  );
}
