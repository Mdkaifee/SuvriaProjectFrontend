import React from "react";
import { Link } from "react-router-dom";
import "./Terms.css";

function Terms() {
  return (
    <div className="terms-container">
      <h1>Terms of Service - Suvria Premium Makhana</h1>
      <p><strong>Effective Date:</strong> June 21, 2025</p>

      <h2>Welcome to Suvria</h2>
      <p>
        By accessing our platform for organic makhana purchases, you agree to
        these terms governing your use of Suvria's services for{" "}
        <Link to="/products" className="terms-link">
          Suvria Phool Makhana
        </Link>.
      </p>

      <h2>1. Account Responsibilities</h2>
      <ul>
        <li>Must be 18+ to purchase makhana snacks</li>
        <li>Accurate information required for Suvria Phool Makhana deliveries</li>
        <li>Secure your login credentials for site access</li>
      </ul>

      <h2>2. Ordering Guidelines</h2>
      <h3>Product Availability</h3>
      <p>Suvria Phool Makhana stock is subject to seasonal farming cycles</p>

      <h3>Pricing</h3>
      <p>Suvria Phool Makhana 100g price includes GST and packaging</p>

      <h2>3. Returns & Quality Assurance</h2>
      <p>No return policy for food products.</p>
      <p>
        <strong>Did we make a mistake?</strong>{" "}
        <Link to="/contact" className="terms-link">
          Contact Us
        </Link>
        . We assure you, we don’t charge customers for our mistakes.
      </p>

      <h2>4. Content Usage</h2>
      <p>
        All makhana recipes and product images are Suvria's intellectual
        property. Share via social media links only.
      </p>

      <h2>5. Liability Disclaimer</h2>
      <ul>
        <li>Not liable for allergic reactions to Makhana/Lotus Seeds</li>
        <li>Delivery delays due to Bihar farming region logistics</li>
      </ul>

      <h2>6. Legal Jurisdiction</h2>
      <p>
        Disputes governed by Indian Consumer Protection Act 2019. Exclusive
        jurisdiction: Courts in Patna, Bihar
      </p>

      <h2>7. Policy Changes</h2>
      <p>
        May update terms for new products features. Continued use after changes
        implies acceptance
      </p>

      <h3>Questions about our Suvria Phool Makhana policies?</h3>
      <p>
        Email:{" "}
        <a href="mailto:legal@suvria.com" className="terms-link">
          legal@suvria.com
        </a>
      </p>
    </div>
  );
}

export default Terms;
