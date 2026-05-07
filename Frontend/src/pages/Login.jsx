import React from 'react'
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Login() {
    return (
        <>
            <div className="auth-container">
                <form className="auth-form">
                    <h2>Login</h2>

                    <input type="text" placeholder="Email or Phone" />

                    <input type="password" placeholder="Password" />

                    <button>Login</button>

                    <p>
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </form>
            </div>


        </>

    )
}
