import React from "react";
import { Link } from "react-router-dom";
import "./Success.css";

export default function Success({ cart }) {

  const totalPrice = cart?.reduce(
    (total, item) => total + item.price,
    0
  ) || 0;

  return (
    <div className="success-container">

      <h1>🎉 Order Placed Successfully!</h1>

      <h2>Total Paid: ₹{totalPrice}</h2>

      <p>Thank you for your purchase.</p>

      <Link to="/">
        <button className="home-btn">Back to Home</button>
      </Link>

    </div>
  );
}