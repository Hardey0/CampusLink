import axios from "axios";
import API_URL from "../config/api";

// Forgot Password
export const forgotPassword = (email) =>
  axios.post(`${API_URL}/auth/forgot-password`, { email });

// Verify OTP
export const verifyOtp = (email, otp) =>
  axios.post(`${API_URL}/auth/verify-otp`, { email, otp });

// Reset Password
export const resetPassword = (email, otp, newPassword) =>
  axios.post(`${API_URL}/auth/reset-password`, {
    email,
    otp,
    newPassword,
  });

  export const resendOtp = (email) =>
  axios.post(`${API_URL}/auth/resend-otp`, { email });