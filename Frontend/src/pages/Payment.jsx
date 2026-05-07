import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./Payment.css";

export default function Payment({ cart }) {
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  const totalPrice = cart?.reduce(
    (total, item) => total + item.price,
    0
  );

  const handlePayment = () => {

    if (!cardNumber || !name || !expiry || !cvv) {
      alert("Please fill all fields");
      return;
    }
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      navigate("/success");
    }, 2000);
  };

  return (
    <div className="payment-container">

      <h1>Payment</h1>

      <h2>Total Amount: ₹{totalPrice}</h2>

      <div className="payment-form">

        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name on Card"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="row">

          <input
            type="text"
            placeholder="Expiry Date"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
          />

          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
        <button onClick={handlePayment} disabled={loading}>
          {loading ? "Processing..." : "Pay Now"}
        </button>

      </div>
    </div>
  );
}