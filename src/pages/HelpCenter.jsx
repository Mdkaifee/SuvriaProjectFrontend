import React from "react";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import "./HelpCenter.css";

export default function HelpCenter() {
  return (
    <div className="helpcenter-container">
      <h1 className="helpcenter-title">
        Hassle-Free Shipping & Quality Assurance for Your Makhana Orders
      </h1>
      <p className="helpcenter-subtitle">
        We guarantee the freshness of your lotus seeds from our Bihar farms to your doorstep.
      </p>

      <section className="helpcenter-section">
        <h2>Shipping Policy</h2>
        <h3>Delivery Schedule</h3>
        <ul>
          <li>Metro Cities: 2-3 business days</li>
          <li>Tier 2/3 Cities: 4-5 business days</li>
          <li>Rural Areas: 5-7 business days</li>
        </ul>

        <h3>Shipping Charges</h3>
        <p><strong>FREE</strong> – Free shipping on all orders</p>
        <p>No minimum order value required</p>
        <p>
          *Applicable to all{" "}
          <Link to="/products" className="makhana-link">
            makhana products
          </Link>{" "}
          across India
        </p>
        <p>Secure packaging for makhana packets</p>
      </section>

      {/* Freshness Guaranteed with Image */}
      <section className="helpcenter-section freshness-section">
        <img
          src="/suvria-makhana-pack.png"
          alt="suvria-makhana-pack"
          className="freshness-image"
        />
        <div>
          <h2>Freshness Guaranteed</h2>
          <ul>
            <li>Food-grade inner lining</li>
            <li>Moisture-proof barrier</li>
            <li>Reinforced outer cover</li>
          </ul>
        </div>
      </section>

      <section className="helpcenter-section">
        <h2>Returns & Quality Assurance</h2>
        <p>No return policy for food products.</p>
        <p>Did we make a mistake?</p>
        <Link to="/contact" className="contact-btn">
          <FiMail className="mail-icon" /> Contact Us
        </Link>
        <p>We assure you, we don't charge customers for our mistakes.</p>
      </section>

      <section className="helpcenter-section">
        <h2>Our Quality Checks</h2>
        <ul>
          <li>🔍 Hand-sorted phool makhana</li>
          <li>📦 Batch-tested before shipping</li>
          <li>📅 6-month freshness guarantee</li>
        </ul>
      </section>

      <section className="helpcenter-section">
        <h2>Need Help with Your Order?</h2>
        <Link to="/contact" className="contact-btn">
          <FiMail className="mail-icon" /> Contact Support
        </Link>
      </section>
    </div>
  );
}
