// Otp.jsx
import React, { useState, useRef, useEffect } from "react";
import { verifyOtp, resendOtp } from "../../../services/authService";
import { useNavigate } from "react-router-dom";
import LeftPanel from "../../../components/LeftPanel/LeftPanel";
import { useLocation } from "react-router-dom";

import "./Otp.css";

export default function Otp() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(59);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const userEmail = location.state?.email;

  // Timer countdown
  useEffect(() => {
    let interval = null;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);

    if (text.length === 0) return;

    const newOtp = [...otp];
    for (let i = 0; i < text.length; i++) {
      newOtp[i] = text[i];
    }
    setOtp(newOtp);

    const nextIndex = text.length < 6 ? text.length : 5;
    inputRefs.current[nextIndex]?.focus();
  };

  if (!userEmail) {
    console.error("No email provided to OTP page");
  }

  const handleSubmit = async () => {
    const code = otp.join("");
    if (code.length !== 6) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await verifyOtp(userEmail, code); // now defined
      console.log("Backend response:", response.data);
      navigate("/SetPass");
    } catch (err) {
      console.error("Verification error:", err.response?.data || err.message);
      setErrorMessage(
        err.response?.data?.message ||
          "Invalid or expired code. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleResendCode = async () => {
    setTimer(59);
    setIsTimerActive(true);
    setOtp(["", "", "", "", "", ""]);
    setErrorMessage("");
    inputRefs.current[0]?.focus();

    try {
      const response = await resendOtp(userEmail);
      console.log("Resend OTP response:", response.data);
    } catch (err) {
      console.error("Resend OTP error:", err.response?.data || err.message);
      setErrorMessage(err.response?.data?.message || "Failed to resend OTP.");
    }
  };

  const isCodeComplete = otp.every((digit) => digit !== "");

  return (
    <div className="otp-container">
      <LeftPanel />

      <div className="right-panel">
        <div className="otp-form">
          <h2 className="otp-title">Multi-Factor Authentication</h2>
          <p className="otp-description">
            Enter the 6-digit code sent to your email or phone
          </p>

          {errorMessage && (
            <div
              className="error-message"
              style={{
                color: "#d32f2f",
                marginBottom: "16px",
                textAlign: "center",
              }}
            >
              {errorMessage}
            </div>
          )}

          <div className="otp-input-section">
            <label className="otp-label">Verification Code</label>
            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  className="otp-input"
                  disabled={isSubmitting}
                />
              ))}
            </div>
          </div>

          <div className="otp-actions">
            {isTimerActive ? (
              <span className="timer">
                Resend in 00:{timer.toString().padStart(2, "0")}
              </span>
            ) : (
              <button
                className="resend-btn"
                onClick={handleResendCode}
                disabled={isSubmitting}
              >
                Resend Code
              </button>
            )}

            <button
              className={`submit-btn ${isCodeComplete ? "active" : ""}`}
              onClick={handleSubmit}
              disabled={!isCodeComplete || isSubmitting}
            >
              {isSubmitting ? "Verifying..." : "Verify"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
