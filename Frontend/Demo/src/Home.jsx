import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  // 🔒 Protect Home page
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-dark bg-dark px-4">
        <span className="navbar-brand fw-bold">🧕 Burka Store</span>
        <button className="btn btn-outline-light" onClick={logout}>
          Logout
        </button>
      </nav>

      {/* TITLE */}
      <div className="container text-center mt-4">
        <h2 className="fw-bold">Burka Collection</h2>
        <p className="text-muted">
          Modest fashion with comfort & elegance
        </p>
      </div>

      {/* PRODUCTS */}
      <div className="container mt-4 mb-5">
        <div className="row">

          {/* CARD 1 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="/image1.jpg"
                className="card-img-top"
                alt="Classic Black Burka"
              />
              <div className="card-body text-center">
                <h6 className="card-title">Classic Black Burka</h6>
                <p className="text-muted mb-1">₹2,499</p>
                <button className="btn btn-dark btn-sm w-100">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="/image2.jpg"
                className="card-img-top"
                alt="Designer Burka"
              />
              <div className="card-body text-center">
                <h6 className="card-title">Designer Burka</h6>
                <p className="text-muted mb-1">₹3,299</p>
                <button className="btn btn-dark btn-sm w-100">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="/image5.jpg"
                
                alt="Daily Wear Burka"
              />
              <div className="card-body text-center">
                <h6 className="card-title">Daily Wear Burka</h6>
                <p className="text-muted mb-1">₹1,999</p>
                <button className="btn btn-dark btn-sm w-100 ">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="/image4.jpg"
                className="card-img-top"
                alt="Premium Abaya Burka"
              />
              <div className="card-body text-center">
                <h6 className="card-title">Premium Abaya Burka</h6>
                <p className="text-muted mb-1">₹3,999</p>
                <button className="btn btn-dark btn-sm w-100">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-dark text-light py-4">
        <div className="container text-center">
          <h6 className="fw-bold">🧕 Burka Store</h6>
          <small className="text-secondary">
            © 2026 Burka Store. All rights reserved.
          </small>
        </div>
      </footer>
    </>
  );
}
