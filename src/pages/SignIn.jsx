import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import "./SignIn.css";

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="signin-container">
      {/* Left Side - Form */}
      <div className="signin-form">
        <img src="/logo.png" alt="Suvria Logo" className="logo" />
        <h2>Welcome Back to Suvria Foods</h2>
        <p>Access your orders, special discounts and more.</p>

        <form>
          <label>Email address</label>
          <input type="email" placeholder="your.email@example.com" required />

          <label>Password</label>
          <input type="password" placeholder="********" required />

          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="sign-btn">Sign in</button>

          <p className="or-text">Or continue with</p>
  <div className="social-buttons">
            <button type="button" className="google-btn">
              <FaGoogle size={18} />
            </button>
            <button type="button" className="fb-btn">
              <FaFacebookF size={18} />
            </button>
          </div>
        </form>
 <p>
          Don’t have an account?{" "}
          <span
            className="create-account"
            onClick={() => navigate("/register")}
            style={{ cursor: "pointer", color: "#f49b23" }}
          >
            Create account
          </span>
        </p>

        <p className="privacy-text">
          We use bank-grade security with 256-bit SSL encryption.{" "}
          <span
            className="privacy-link"
            onClick={() => navigate("/privacy-policy")}
          >
            Read our privacy policy
          </span>
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="signin-image">
        <img src="/plain_makhana.png" alt="Phool Makhana" />
        <div className="image-caption">
          <h3>Discover Premium Quality</h3>
         <p>
  Access exclusive recipes and member-only discounts on our{" "}
  <span
    className="link"
    onClick={() => navigate("/products")}
    style={{ cursor: "pointer", color: "white", textDecoration: "underline" }}
  >
    Suvria Phool Makhana
  </span>
</p>

        </div>
      </div>
    </div>
  );
}
