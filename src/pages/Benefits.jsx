import React from "react";

const Benefits = () => {
  const benefitsList = [
    "Rich in antioxidants for better immunity",
    "Low-calorie snack, perfect for weight loss",
    "Good source of plant-based protein",
    "Supports heart and bone health",
    "Gluten-free and vegan friendly",
  ];

  return (
    <section style={{ padding: "40px 20px", background: "#f9f9f9" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Health Benefits</h2>
      <ul style={{ maxWidth: "600px", margin: "auto", listStyle: "none", padding: 0 }}>
        {benefitsList.map((benefit, index) => (
          <li
            key={index}
            style={{
              marginBottom: "12px",
              padding: "10px",
              background: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            {benefit}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Benefits;
