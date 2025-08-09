import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <section style={{ padding: "40px 20px", background: "#eee" }}>
      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
        Subscribe to Our Newsletter
      </h2>
      <p style={{ textAlign: "center", marginBottom: "20px" }}>
        Get the latest recipes, health tips, and offers straight to your inbox.
      </p>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            flex: "1",
            minWidth: "250px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            background: "#8B4513",
            color: "white",
            cursor: "pointer",
          }}
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
