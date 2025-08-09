import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left section: Logo and description */}
        <div className="footer-section">
          <h2 className="logo">Suvria<span className="tm">™</span></h2>
          <p>100% Natural Makhana</p>
          <p>Sourced directly from Mithila farms</p>
          <p>Blends natural goodness with great taste</p>
          <p>Make every bite a step toward a healthier you</p>
        </div>

        {/* Explore Makhana */}
        <div className="footer-section">
          <h4>Explore Makhana</h4>
          <Link to="/benefits">Health Benefits</Link>
          <Link to="/recipes">Makhana Recipes</Link>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h4>Company</h4>
          <Link to="/about">Our Story</Link>
          <Link to="/blog">Quality Promise</Link>
          <Link to="/newsletter">Our Newsletter</Link>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <p>Suvria Enterprises</p>
          <p>Samastipur, Bihar 848129</p>
          <p>Phone: +91 77109 63902</p>
          <p>Email: care@suvria.com</p>
         <div className="social-icons">
  <a
    href="https://wa.me/917710963902" // WhatsApp chat link
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsapp />
  </a>
  <a
    href="https://www.facebook.com/YourPageName"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://www.instagram.com/YourProfileName"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </a>
  <a
    href="https://www.youtube.com/YourChannelName"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaYoutube />
  </a>
  <a
    href="https://www.pinterest.com/YourProfileName"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaPinterestP />
  </a>
</div>

        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 Suvria. All rights reserved.</span>
        <div className="footer-links">
          <Link to="/contact">Contact Us</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/shipping-returns">Shipping & Returns</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
