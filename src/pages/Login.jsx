import "../assets/styles/auth.css";

export default function Login() {
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

          <div className="input-group">
            <label>Username or Email</label>
            <div className="input-line">
              <input type="text" />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-line">
              <input type="password" />
            </div>
          </div>

          <div className="auth-links">
            <span></span>
            <a href="#">Forgot Password?</a>
          </div>

          <button className="auth-btn">LOG IN</button>
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
