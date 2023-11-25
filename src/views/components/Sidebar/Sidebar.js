import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
    const navigate = useNavigate();

    return (
        <div className="sidebar-container">
            <button className="home-btn">Pagong</button>
            <button className="home-btn">Pagong</button>
        </div>
    )
}

export default Sidebar;