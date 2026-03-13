import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/auth.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name || !email || !password || !confirmPassword || !role) {
      setError("All fields are required");
      return false;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Account created successfully! Redirecting to login...");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setError(data.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page signup-bg">
      <div className="auth-card reverse">
        <div className="auth-image">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop&crop=center&auto=format" alt="mentor" />
        </div>

        <div className="auth-form">
          <img src="/logo.png" alt="District 114" className="logo"/>

          <h2>Create a New Account</h2>
          <p className="subtext">
            Come join our community! Lets set up your account. Already have one? <a href="/login">Sign in here</a>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Username</label>
              <div className="input-line">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Email</label>
              <div className="input-line">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              <small className="password-hint">Min 8 characters, 1 lowercase, 1 uppercase, 1 number, and 1 special character.</small>
            </div>

            <div className="input-group">
              <label>Re-Enter Password</label>
              <div className="input-line">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>
            </div>

            <div className="role-group">
              <label className="role-label">Your Role</label>
              <div className="role">
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="mentor"
                    checked={role === "mentor"}
                    onChange={(e) => setRole(e.target.value)}
                    disabled={isLoading}
                  /> Mentor
                </label>

                <label>
                  <input
                    type="radio"
                    name="role"
                    value="mentee"
                    checked={role === "mentee"}
                    onChange={(e) => setRole(e.target.value)}
                    disabled={isLoading}
                  /> Mentee
                </label>
              </div>
            </div>

            {error && (
              <div className="error-message" style={{ color: "red", marginBottom: "1rem", fontSize: "0.9rem" }}>
                {error}
              </div>
            )}

            {success && (
              <div className="success-message" style={{ color: "green", marginBottom: "1rem", fontSize: "0.9rem" }}>
                {success}
              </div>
            )}

            <p className="terms">
              By submitting the form you agree to our Terms of Service.
            </p>

            <button type="submit" className="auth-btn" disabled={isLoading}>
              {isLoading ? "CREATING ACCOUNT..." : "JOIN"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
