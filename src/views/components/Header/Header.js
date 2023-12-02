import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
    const navigate = useNavigate();

    return (
        <header>
            <div className="website-name">[Website Name]</div>
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                {/* You can add additional styling or features to your search bar */}
            </div>
            <div className="button-container">
                <button className="profile" onClick={() => navigate("/profile")}>Profile</button>
                {/* Add more buttons as needed */}
            </div>
        </header>
    );
}

export default Header;
