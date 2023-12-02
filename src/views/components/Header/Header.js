import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import ProfilePic from "../../../assets/profile/profile.png";

function Header() {
    const navigate = useNavigate();

    return (
        <header>
            <div className="website-name">[Website Name]</div>
            <div className="search-bar">
                <input type="text" placeholder="Search" />
            </div>
            <div className="button-container">
                <button className="profile" onClick={() => navigate("/profile")}><img src={ProfilePic} className="profile-pic" /></button>
            </div>
        </header>
    );
}

export default Header;
