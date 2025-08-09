import React, { useState } from "react";

export default function TrackOrders() {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    // For demo, fake a status
    setStatus(`Order ${orderId} is currently being processed.`);
  };

  return (
    <div className="page-container">
      <h1>Track Orders</h1>
      <form onSubmit={handleTrack}>
        <label>
          Enter your Order ID:
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
          />
        </label>
        <button type="submit">Track</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
