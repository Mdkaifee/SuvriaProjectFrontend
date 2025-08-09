import React from "react";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy - Suvria Premium Makhana</h1>
      <p className="last-updated">Last Updated: June 21 2025</p>

      <h2>Our Commitment to Your Privacy</h2>
      <p>
        At Suvria, we prioritize the security of your personal information as
        much as we value the purity of our Suvria Phool Makhana. This
        policy outlines how we collect, use, and protect your data when you
        interact with our website or purchase our{" "}
        <a href="#" className="highlight-link">Suvria Phool Makhana</a>.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>
          <strong>Personal Details:</strong> Name, email, and contact
          information when you create an account or make a purchase.
        </li>
        <li>
          <strong>Transaction Data:</strong> Shipping address and payment
          details for order processing.
        </li>
        <li>
          <strong>Usage Information:</strong> Browsing patterns and cookie data
          to enhance your experience with our makhana products.
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <h3>Order Fulfillment</h3>
      <p>Process payments and deliver your Phool Makhana purchases.</p>

      <h3>Quality Improvement</h3>
      <p>Analyze preferences to enhance our Makhana products.</p>

      <h3>Security Measures</h3>
      <p>
        All online purchases of Makhana on our website are processed through
        Razorpay, a PCI-DSS compliant payment gateway that uses 256-bit SSL
        encryption to ensure your payment information is secure.
      </p>

      <h2>Your Rights &amp; Choices</h2>
      <ul>
        <li>Access or update your personal information</li>
        <li>Opt-out of marketing communications</li>
        <li>
          Request deletion of account data (excluding transaction records
          required by Indian law)
        </li>
      </ul>

      <h2>Cookie Policy</h2>
      <p>
        We use cookies to remember your preferences and analyze site traffic.
        By continuing to browse our site, you consent to our use of cookies. You
        can manage cookie settings in your browser.
      </p>

      <h2>Contact Us</h2>
      <p>
        For privacy concerns regarding our Suvria Phool Makhana.
      </p>
      <p>
        Email:{" "}
        <a
          href="mailto:privacy@suvria.com"
          className="highlight-link"
        >
          privacy@suvria.com
        </a>
      </p>
      <p>
        Registered Office: Suvria Enterprises, Chandopatti, Samastipur,
        Bihar-848129, India
      </p>

      <p className="footer-note">
        We may update this policy to reflect changes in our products or legal
        requirements. Major changes will be notified via email or site banner.
      </p>
    </div>
  );
}
