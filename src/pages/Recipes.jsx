import React from "react";

const Recipes = () => {
  const recipes = [
    { title: "Roasted Makhana Snack", description: "Crunchy and healthy roasted fox nuts with spices." },
    { title: "Makhana Kheer", description: "A creamy, rich dessert made with milk and fox nuts." },
    { title: "Makhana Curry", description: "Savory curry with fox nuts and aromatic spices." },
  ];

  return (
    <section style={{ padding: "40px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Makhana Recipes</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        {recipes.map((recipe, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "8px",
              padding: "20px",
              width: "250px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recipes;
