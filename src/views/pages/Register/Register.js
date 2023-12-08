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

    const sendCode = () => {
        if(form.email.length === 0) {
            alert("[ERROR] Email cannot be empty");
        } else if(!RegExp("[a-zA-Z0-9]+@").test(form.email)) {
            alert("[ERROR] Not a valid email address");
        } else if(form.username.length === 0) {
            alert("[ERROR] Username cannot be empty");
        } else if(form.newPassword.length === 0) {
            alert("[ERROR] New password cannot be empty");
        } else if(form.confirmPassword.length === 0) {
            alert("[ERROR] Confirm password cannot be empty");
        } else {
            navigate("/verifycode", {state: {email: form.email}});
        }
    }

    return (
        <div className="register-frame">
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
                    <input className="value" type="password" name="newPassword" value={form.newPassword} onChange={handleChange} />
                </div>
                <div className="confirm-password">
                    <p className="label">Confirm password</p>
                    <input className="value" type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
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