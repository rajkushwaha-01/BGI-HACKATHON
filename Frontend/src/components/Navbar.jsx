import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">

      <h2 className="logo">DirectFarm</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link> 
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>

    </div>
  );
}