import React from "react";
import "./VerifyCode.css";
import { useNavigate } from "react-router-dom";

function VerifyCode() {
    const navigate = useNavigate();

    return (
        <div className="verify-code-frame">
            <img className="logo" src="./assets/logo.png"/>
            <p className="label">An email containing the verification code has been sent to [Your Email]</p>
            <div className="form-container">
                <div className="verification-code">
                    <p className="label">Verification code</p>
                    <input className="value" type="text" placeholder="XXXXXX"/>
                </div>
                <button className="verify-btn" onClick={() => navigate("/")}>Verify</button>
            </div>
            <div className="already-have-account">
                <span>Already have an account?&nbsp;</span>
                <span className="txt" onClick={() => navigate("/login")}>Sign in</span>
            </div>
        </div>
    );
}

export default VerifyCode;