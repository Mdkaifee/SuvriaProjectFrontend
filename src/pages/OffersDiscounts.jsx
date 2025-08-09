import React from "react";

export default function OffersDiscounts() {
  const offers = [
    { title: "Flat 20% Off", desc: "On your first order above ₹999", code: "WELCOME20" },
    { title: "Buy 1 Get 1 Free", desc: "On selected categories", code: "B1G1FREE" },
    { title: "Free Shipping", desc: "On orders above ₹499", code: "FREESHIP" },
  ];

  return (
    <div className="page-container">
      <h1>Offers & Discounts</h1>
      <ul>
        {offers.map((offer, idx) => (
          <li key={idx} style={{ marginBottom: "20px" }}>
            <h3>{offer.title}</h3>
            <p>{offer.desc}</p>
            <code>{offer.code}</code>
          </li>
        ))}
      </ul>
    </div>
  );
}
