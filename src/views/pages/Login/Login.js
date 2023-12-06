import React, { useState } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }

    const signIn = () => {
        if(form.email.length === 0) {
            alert("[ERROR] Email cannot be empty");
        } else if(form.password.length === 0) {
            alert("[ERROR] Password cannot be empty");
        } else {
            navigate("/");
        }
    }

    return (
        <div className="login-frame">
            <img className="logo" src="./assets/logo.png"/>
            <p className="label">Sign in to [Website Name]</p>
            <div className="form-container">
                <div className="email">
                    <p className="label">Email address</p>
                    <input type="text" className="value" name="email" value={form.email} onChange={handleChange} />
                </div>
                <div className="password">
                    <p className="label">Password</p>
                    <input type="password" className="value" name='password' value={form.password} onChange={handleChange} />
                </div>
                <button className="sign-in" onClick={signIn}>Sign in</button>
            </div>
            <div className="verify-container">
                <span>New User?&nbsp;</span>
                <span className="create-account" onClick={() => navigate("/register")}>Create an account</span>
            </div>
        </div>
    );
}

export default Login;