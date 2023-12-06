import React from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    return (
        <div className="login-frame">
            <img className="logo" src="/assets/logo-aMF.png"/>
            <p className="label">Sign in to [Website Name]</p>
            <div className="form-container">
                <div className="email">
                    <p className="label">Email address</p>
                    <input type="text" className="value" />
                </div>
                <div className="password">
                    <p className="label">Password</p>
                    <input type="text" className="value" />
                </div>
                <button className="sign-in" onClick={() => navigate("/")}>Sign in</button>
            </div>
            <div className="verify-container">
                <span>New User?&nbsp;</span>
                <span className="create-account" onClick={() => navigate("/register")}>Create an account</span>
            </div>
        </div>
    );
}

export default Login;