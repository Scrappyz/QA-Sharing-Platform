import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
    const navigate = useNavigate();

    return (
        <header>
            <div className="website-name">[Website Name]</div>
            <div className="search-bar">Search</div>
            <button className="profile" onClick={() => navigate("/profile")}>Profile</button>
        </header>
    )
}

export default Header;