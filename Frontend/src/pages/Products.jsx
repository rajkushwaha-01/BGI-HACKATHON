import React from 'react'
import { Link } from "react-router-dom";
import "./Products.css";

export default function Products({ cart, setCart }) {
   const products = [
    { id: 1, name: "Tomato", price: 40, quantity: "1kg" },
    { id: 2, name: "Potato", price: 30, quantity: "1kg" },
    { id: 3, name: "Onion", price: 25, quantity: "1kg" },
    { id: 4, name: "Carrot", price: 60, quantity: "1kg" }
  ];


  const handleCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    
      <div className="products-container">

        <h1>Products</h1>

        <div className="products-grid">
        {products.map((item) => (

          <div className="product-card" key={item.id}>

             <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <p>{item.quantity}</p>
           
           <button className="cart-btn"
              onClick={() => handleCart(item)}
            >
              Add to cart
            </button>

          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Cart Items: {cart.length}</h3>

        <Link to="/cart">
          <button className="go-cart-btn">Go to Cart</button>
        </Link>

        {cart.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </div>
      </div>
  
  );
}
