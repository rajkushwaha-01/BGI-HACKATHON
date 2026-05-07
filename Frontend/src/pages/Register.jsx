import "./Auth.css";
import React from 'react'
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div className="auth-container">
        <form className="auth-form">
          <h2>Register</h2>

          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Village/City" />
          <input type="text" placeholder="Pincode" />
          
          <select>
            <option>Select Role</option>
            <option>Customer</option>
            <option>Seller</option>
          </select>
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />

          <button>Register</button>

          <p>
            Already have an account? <Link to="/">Login</Link>
          </p>

        </form>
      </div>
    </>
  );
}
