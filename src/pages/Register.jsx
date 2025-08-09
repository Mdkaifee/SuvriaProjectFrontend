import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  return (
    <div className="register-container">
      <img src="/logo.png" alt="Suvria Logo" className="register-logo" />

      <div className="register-card">
        <h2 className="register-title">Create an Account</h2>

        <form className="register-form">
          <label>Full Name</label>
          <input type="text" placeholder="Your full name" />

          <label>Email Address</label>
          <input type="email" placeholder="you@example.com" />

          <label>Password</label>
          <input type="password" placeholder="Create a password" />

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" />

          <div className="newsletter">
            <input type="checkbox" id="newsletter" />
            <label htmlFor="newsletter">
              Subscribe to our newsletter for exclusive offers and updates
            </label>
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <p className="signin-text">
          Already have an account?{" "}
          <Link to="/signin" className="signin-link">Sign In</Link>
        </p>

        <hr className="divider" />

        <p className="terms-text">
          By signing up, you agree to our{" "}
          <Link to="/terms" className="terms-link">Terms of Service</Link> and{" "}
          <Link to="/privacy-policy" className="privacy-link">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}
