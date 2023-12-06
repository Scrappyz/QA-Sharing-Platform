import React from 'react';
import "./Login.css";

function Login() {
    return (
        <div className="frame">
            <img className="logo-Pus" src="/assets/logo-aMF.png"/>
            <p className="sign-in-to-website-name-HkM">Sign in to [Website Name]</p>
            <div className="form-ktq">
                <div className="email-4ed">
                <p className="text-145">Email address</p>
                <div className="shape-vwj">
                </div>
                </div>
                <div className="password-qYu">
                <p className="text-Ar5">Password</p>
                <div className="shape-u2y">
                </div>
                </div>
                <div className="sign-in-E5F">Sign in</div>
            </div>
            <div className="verify-3oP">
                <span className="verify-3oP-sub-0">New User? </span>
                <span className="verify-3oP-sub-1">Create an account</span>
            </div>
        </div>
    );
}

export default Login;