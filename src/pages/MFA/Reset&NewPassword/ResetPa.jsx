// src/pages/Auth/ResetPa/ResetPa.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftPanel from '../../../components/LeftPanel/LeftPanel';
import { forgotPassword } from "../../../services/authService";
import './resetPa.css';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [isLinkSent, setIsLinkSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    console.log('[Reset Password] Starting request for email:', email);

    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {
      const res = await forgotPassword(email);
      console.log('[Reset Password] Backend success response:', res);

      
      setIsLinkSent(true);

    } catch (err) {
      console.error('[Reset Password] Error sending reset link:', err);

      const errorMsg =
        err.response?.data?.message ||
        err.message ||
        'Failed to send reset link. Please try again later.';

      setError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  
  useEffect(() => {
    if (!isLinkSent) return;

    console.log('[Reset Password] Success screen visible. Countdown:', countdown);

    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(c => c - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      console.log('[Reset Password] Countdown finished → redirecting to /otp');
      navigate('/otp', { state: { email } });
    }
  }, [isLinkSent, countdown, navigate, email]);

  // Success view
  if (isLinkSent) {
    return (
      <div className="reset-container">
        <LeftPanel />

        <div className="right-panel">
          <div className="reset-form success-view">
            <div className="success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h2 className="form-title">Reset Link Sent!</h2>
            <p className="form-description">
              If <strong>{email}</strong> is registered, check your inbox (and spam folder) for the reset link.
            </p>

            <p className="redirect-info">
              Redirecting to OTP verification in {countdown}...
            </p>

            <button
              className="submit-btn active"
              onClick={() => {
                console.log('[Reset Password] User clicked "Go to Verification Now"');
                navigate('/otp', { state: { email } });
              }}
            >
              Go to Verification Now
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main form view
  return (
    <div className="reset-container">
      <LeftPanel />

      <div className="right-panel">
        <div className="reset-form">
          <h2 className="form-title">Reset Your Password</h2>
          <p className="form-description">
            Enter your registered email address and we'll send you a reset link.
          </p>

          {error && (
            <p className="error-message" style={{ color: '#d32f2f', marginBottom: '16px' }}>
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="input-label">Email address</label>
              <input
                type="email"
                className="input-field"
                placeholder="student@unilag.edu.ng"
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
                required
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              className={`submit-btn ${email.includes('@') && email.includes('.') && !isLoading ? 'active' : ''}`}
              disabled={!email.includes('@') || !email.includes('.') || isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}