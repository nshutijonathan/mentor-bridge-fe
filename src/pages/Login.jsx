import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/auth.css";

export default function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailOrUsername,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("accessToken", data.accessToken);
        navigate("/home");
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page login-bg">
      <div className="auth-card">
        <div className="auth-form">
          <img
            src="/logo.png"
            alt="District 114"
            className="logo"
          />

          <h2>Log in</h2>
          <p className="subtext">
            Don't have an account? <a href="/signup">Request account</a>.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Username or Email</label>
              <div className="input-line">
                <input
                  type="text"
                  value={emailOrUsername}
                  onChange={(e) => setEmailOrUsername(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Password</label>
              <div className="input-line">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>
            </div>

            {error && (
              <div className="error-message" style={{ color: "red", marginBottom: "1rem", fontSize: "0.9rem" }}>
                {error}
              </div>
            )}

            <div className="auth-links">
              <span></span>
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="auth-btn" disabled={isLoading}>
              {isLoading ? "LOGGING IN..." : "LOG IN"}
            </button>
          </form>
        </div>

        <div className="auth-image">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop&crop=center&auto=format"
            alt="mentorship"
          />
        </div>
      </div>
    </div>
  );
}
