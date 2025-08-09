import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const [hasItem, setHasItem] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 199.0;
  const gstRate = 0.05;
  const navigate = useNavigate();

  const totalPrice = pricePerItem * quantity; // total price with GST included
  const subtotal = totalPrice / (1 + gstRate); // price without GST
  const gst = subtotal * gstRate; // GST amount

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const removeItem = () => {
    setHasItem(false);
  };

  if (!hasItem) {
    return (
      <div className="cart-container empty-cart">
        <h2>Your Cart (0)</h2>
        <div className="empty-cart-content">
          <div className="empty-cart-icon">🛒</div>
          <p className="empty-text">Your cart is empty</p>
          <Link to="/products" className="browse-btn">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart ({quantity})</h2>

      <div className="cart-item">
        <img src="/suvria-makhana-pack.png" alt="Makhana" className="item-image" />
        <div className="item-details">
          <h3>Suvria Phool Makhana 100g</h3>
          <p className="price">₹{pricePerItem.toFixed(2)}</p>
          <div className="qty-control">
            <button onClick={decreaseQty}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQty}>+</button>
          </div>
        </div>
        <button className="remove-btn" onClick={removeItem}>×</button>
      </div>

      <div className="order-summary">
        <h3>Order Summary</h3>
        <div className="summary-row">
          <span>Subtotal (excluding GST)</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="summary-row">
          <span>Tax (GST 5%)</span>
          <span>₹{gst.toFixed(2)}</span>
        </div>
        <hr />
        <div className="summary-total">
          <strong>Total (GST Included)</strong>
          <strong>₹{totalPrice.toFixed(2)}</strong>
        </div>
        <p className="gst-note">*GST is already included in the total amount</p>

        <input type="text" placeholder="Promo Code" className="promo-input" />
        <button className="apply-link">Apply Promo Code</button>

        <button className="checkout-btn" onClick={() => navigate("/signin")}>
          Sign in to Checkout
        </button>
        <p className="free-shipping">Free shipping on all orders</p>
      </div>
    </div>
  );
}
