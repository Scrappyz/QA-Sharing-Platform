import React from "react";
import { useNavigate } from "react-router-dom";
import "./SidebarLeft.css";

function SidebarLeft() {
    const navigate = useNavigate();

    return (
        <div className="sidebar-left-container">
            <button className="home-btn" onClick={() => navigate("/")}>Home</button>
            <button className="users-btn" onClick={() => navigate("/users")}>Users</button>
            <button className="saves-btn" onClick={() => navigate("/saves")}>Saves</button>
        </div>
    )
}

export default SidebarLeft;