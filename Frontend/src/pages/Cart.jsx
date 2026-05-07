import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

export default function Cart({ cart, setCart }) {

  const removeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <span>{item.name}</span>
            <span>₹{item.price}</span>

            <button onClick={() => removeItem(index)}>
              Remove
            </button>
          </div>
        ))
      )}

      <h2>Total: ₹{totalPrice}</h2>

      <Link to="/payment">
        <button className="checkout-btn">Proceed to Payment</button>
      </Link>

    </div>
  );
}