// setNewPassword.jsx
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../../../services/authService";
import LeftPanel from "../../../components/LeftPanel/LeftPanel";
import "./resetPa.css";

export default function SetNewPassword() {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;
  const otp = location.state?.otp;

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [shake, setShake] = useState(false);

  const [validations, setValidations] = useState({
    required: false,
    minLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  // Real-time validation
  useEffect(() => {
    setValidations({
      required: newPassword.length > 0,
      minLength: newPassword.length >= 8,
      hasUppercase: /[A-Z]/.test(newPassword),
      hasLowercase: /[a-z]/.test(newPassword),
      hasNumber: /[0-9]/.test(newPassword),
      hasSpecialChar: /[^A-Za-z0-9]/.test(newPassword),
    });
  }, [newPassword]);

  const passwordsMatch =
    confirmPassword.length > 0 && newPassword === confirmPassword;

  const isFormValid =
    validations.required &&
    validations.minLength &&
    validations.hasUppercase &&
    validations.hasLowercase &&
    validations.hasNumber &&
    validations.hasSpecialChar &&
    passwordsMatch;

  // Password strength level (0-4)
  const strength = Object.values(validations).filter(Boolean).length;
  const strengthText = ["Too weak", "Weak", "Fair", "Good", "Strong"][strength];
  const strengthColor = ["#d32f2f", "#f57c00", "#ff9800", "#4caf50", "#2e7d32"][
    strength
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    if (!email || !otp) {
      setErrorMessage("Session expired. Please restart password reset.");
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage("");

      const response = await resetPassword(email, otp, newPassword);

      console.log("Password reset success:", response.data);

      alert("Password has been reset successfully!");
      navigate("/login");
    } catch (err) {
      console.error("Reset error:", err.response?.data || err.message);
      setErrorMessage(
        err.response?.data?.message ||
          "Failed to reset password. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="reset-container">
      <LeftPanel />

      <div className="right-panel">
        <div className="reset-form">
          <h2 className="form-title">Set a New Password</h2>
          <p className="form-description">
            Your new password must be at least 8 characters long and include
            uppercase, lowercase, numbers, and special characters.
          </p>

          {errorMessage && (
            <div
              className="error-message"
              style={{
                color: "#d32f2f",
                marginBottom: "15px",
                textAlign: "center",
              }}
            >
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* New Password */}
            <div className="input-group password-group">
              <label className="input-label">New Password</label>
              <div className="password-wrapper">
                <input
                  type={showNewPassword ? "text" : "password"}
                  className={`input-field ${shake ? "shake" : ""}`}
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-visibility-btn"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  tabIndex="-1"
                >
                  {showNewPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                </button>
              </div>
            </div>

            {/* Password Strength Bar */}
            {newPassword.length > 0 && (
              <div
                className="password-strength"
                style={{ marginBottom: "16px" }}
              >
                <div
                  className="strength-bar"
                  style={{
                    width: `${(strength / 6) * 100}%`,
                    backgroundColor: strengthColor,
                  }}
                />
                <span
                  style={{
                    color: strengthColor,
                    fontSize: "13px",
                    marginLeft: "8px",
                  }}
                >
                  {strengthText}
                </span>
              </div>
            )}

            {/* Validation Rules */}
            <div className="requirements" style={{ marginBottom: "24px" }}>
              <div
                className={`requirement ${validations.required ? "valid" : ""}`}
              >
                <svg
                  className="check-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Password is required</span>
              </div>
              <div
                className={`requirement ${validations.minLength ? "valid" : ""}`}
              >
                <svg
                  className="check-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>At least 8 characters</span>
              </div>
              <div
                className={`requirement ${validations.hasUppercase ? "valid" : ""}`}
              >
                <svg
                  className="check-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>At least one uppercase letter (A-Z)</span>
              </div>
              <div
                className={`requirement ${validations.hasLowercase ? "valid" : ""}`}
              >
                <svg
                  className="check-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>At least one lowercase letter (a-z)</span>
              </div>
              <div
                className={`requirement ${validations.hasNumber ? "valid" : ""}`}
              >
                <svg
                  className="check-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>At least one number (0-9)</span>
              </div>
              <div
                className={`requirement ${validations.hasSpecialChar ? "valid" : ""}`}
              >
                <svg
                  className="check-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>At least one special character (!@#$%^&* etc.)</span>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="input-group password-group">
              <label className="input-label">Confirm New Password</label>
              <div className="password-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className={`input-field ${shake ? "shake" : ""}`}
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-visibility-btn"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  tabIndex="-1"
                >
                  {showConfirmPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                </button>
              </div>

              {confirmPassword.length > 0 && (
                <span
                  className={
                    passwordsMatch ? "success-message" : "error-message"
                  }
                >
                  {passwordsMatch
                    ? "Passwords match"
                    : "Passwords do not match"}
                </span>
              )}
            </div>

            <button
              type="submit"
              className={`submit-btn ${isFormValid ? "active" : ""}`}
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function EyeOpenIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeClosedIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M2 2l20 20M6.712 6.72C3.664 8.795 2 12 2 12s5.636 7 12 7c2.05 0 3.817-.727 5.271-1.712M11 5.058A11.994 11.994 0 0112 5c6.363 0 10 7 10 7s-.692 1.332-2 2.833M9.5 9.5a3 3 0 014.95 2.95" />
    </svg>
  );
}
