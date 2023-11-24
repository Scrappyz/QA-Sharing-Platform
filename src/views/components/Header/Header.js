import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
    const navigate = useNavigate();

    return (
        <header>
            <p className="website-name">[Website Name]</p>
            <div className="search-bar">Search</div>
            <button className="profile" onClick={() => navigate("/profile")}>Profile</button>
        </header>
    )
}

export default Header;