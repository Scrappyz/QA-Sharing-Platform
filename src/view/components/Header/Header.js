import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className="header-eN5">
            <p className="website-name-82M">[Website Name]</p>
            <div className="search-bar-RXF">Search</div>
            <button className="profile-Tyj" onClick={() => navigate("/profile")}>Profile</button>
        </div>
    )
}