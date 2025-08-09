import React from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
    const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/signin"); // redirect to your signin route
  };
  return (
    <div className="contact-page">
      <h1 className="contact-title">Get in Touch with Suvria</h1>
      <p className="contact-subtitle">
        Have questions about our premium makhana products? Our team is here to
        help with orders, bulk purchases, or any nutritional inquiries.
      </p>

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Message"></textarea>
         <button
            className="contact-button"
            onClick={handleLoginClick}
          >
            Login to Send Message
          </button>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-card">
            <h3>Contact Information</h3>
            <div className="info-item">
              <span className="icon">📞</span>
              <div>
                <strong>Sales & Support</strong>
                <p>+91 77109 63902</p>
                <p>9 AM - 7 PM, Monday to Saturday</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">✉️</span>
              <div>
                <strong>Email</strong>
                <p>
                  <a href="mailto:care@suvria.com" className="link-hover">
                    care@suvria.com
                  </a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">🏢</span>
              <div>
                <strong>Corporate Office</strong>
                <p>
                  Suvria Enterprises <br />
                  Chandopatti, Samastipur <br />
                  Bihar-848129, India
                </p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="map-container">
 <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.114345345471!2d85.834605!3d25.667504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed894d8844eef3%3A0x52f07bc6e4ef715e!2sPatna%20Diesel!5e0!3m2!1sen!2sin!4v1754776852474!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Patna Diesel"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Common Questions */}
      <div className="faq-section">
        <h2>Common Questions</h2>
        <div className="faq-item">
          <p className="faq-question">What's your return policy?</p>
          <p className="faq-answer">No return policy for food products.</p>
        </div>
        <div className="faq-item">
          <p className="faq-question">Do you offer bulk pricing?</p>
          <p className="faq-answer">
            Yes! Email our sales team at{" "}
            <a
              href="mailto:abhinav@suvria.com"
              className="link-hover"
            >
              abhinav@suvria.com
            </a>{" "}
            for customized quotes on orders over 50kg.
          </p>
        </div>
      </div>
    </div>
  );
}
