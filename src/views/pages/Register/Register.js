import React from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        username: "",
        newPassword: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm((prev) => ({
            ...prev, [name]: value
        }))
    }

    const sendCode = (e) => {
        e.preventDefault();
        setForm({
            email: "",
            username: "",
            newPassword: "",
            confirmPassword: ""
        })
    }

    return (
        <div className="frame">
            <img className="logo" src="./assets/logo.png"/>
            <p className="label">Sign up to our [Website Name]</p>
            <div className="form-container">
                <div className="email">
                    <p className="label">Email address</p>
                    <input className="value" name="email" type="text" value={form.email} onChange={handleChange} />
                </div>
                <div className="username">
                    <p className="label">Username</p>
                    <input className="value" type="text" name="username" value={form.username} onChange={handleChange} />
                </div>
                <div className="new-password">
                    <p className="label">New password</p>
                    <input className="value" type="text" name="newPassword" value={form.newPassword} onChange={handleChange} />
                </div>
                <div className="confirm-password">
                    <p className="label">Confirm password</p>
                    <input className="value" type="text" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
                </div>
                <button className="send-code" onClick={sendCode}>Send code</button>
            </div>
            <div className="already-have-account">
                <span>Already have an account?&nbsp;</span>
                <span className="txt" onClick={() => navigate("/login")}>Sign in</span>
            </div>
        </div>
    );
}

export default Register;