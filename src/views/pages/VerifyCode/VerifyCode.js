import React, {useState} from "react";
import "./VerifyCode.css";
import { useNavigate } from "react-router-dom";

function VerifyCode() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        code: ""
    });

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }));
    }

    const verify = () => {
        if(form.code.length === 0) {
            alert("[ERROR] Must provide verification code");
            return;
        } 

        if(form.code.length !== 6 || isNaN(form.code)) {
            alert("[ERROR] Code must be 6 digits");
            return
        }
        
        alert("[SUCCESS] You have been verified");
        navigate("/");
    }

    return (
        <div className="verify-code-frame">
            <img className="logo" src="./assets/logo.png"/>
            <p className="label">An email containing the verification code has been sent to [Your Email]</p>
            <div className="form-container">
                <div className="verification-code">
                    <p className="label">Verification code</p>
                    <input className="value" type="text" placeholder="XXXXXX" name="code" value={form.code} onChange={handleChange}/>
                </div>
                <button className="verify-btn" onClick={verify}>Verify</button>
            </div>
            <div className="already-have-account">
                <span>Already have an account?&nbsp;</span>
                <span className="txt" onClick={() => navigate("/login")}>Sign in</span>
            </div>
        </div>
    );
}

export default VerifyCode;