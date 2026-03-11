import "../assets/styles/auth.css";
import districtLogo from "../assets/district-114-logo.svg";

export default function Signup() {
  return (
    <div className="auth-page signup-bg">
      <div className="auth-card reverse">
        <div className="auth-image">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop&crop=center&auto=format" alt="mentor" />
        </div>

        <div className="auth-form">
          <img src={districtLogo} alt="District 114" className="logo"/>

          <h2>Create a New Account</h2>
          <p className="subtext">
            Come join our community! Lets set up your account. Already have one? <a href="/login">Sign in here</a>
          </p>

          <div className="input-group">
            <label>Username</label>
            <div className="input-line">
              <input type="text" />
            </div>
          </div>

          <div className="input-group">
            <label>Email</label>
            <div className="input-line">
              <input type="email" />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-line">
              <input type="password" />
            </div>
            <small className="password-hint">Min 8 characters, 1 lowercase, 1 uppercase, 1 number, and 1 special character.</small>
          </div>

          <div className="input-group">
            <label>Re-Enter Password</label>
            <div className="input-line">
              <input type="password" />
            </div>
          </div>

          <div className="role-group">
            <label className="role-label">Your Role</label>
            <div className="role">
              <label>
                <input type="radio" name="role"/> Mentor
              </label>

              <label>
                <input type="radio" name="role"/> Mentee
              </label>
            </div>
          </div>

          <p className="terms">
            By submitting the form you agree to our Terms of Service.
          </p>

          <button className="auth-btn">JOIN</button>
        </div>
      </div>
    </div>
  );
}
