import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Sidebar.css";

function Sidebar(props) {
    const navigate = useNavigate();

    return (
        <div className="sidebar-container">
            <div className="btn-list">
                {Object.entries(props.buttons).map(([key, val]) => <button className="btn" onClick={() => navigate(val.path)}>{key}</button>)}
            </div>
        </div>
    )
}

Sidebar.propTypes = {
    buttons: PropTypes.array
}

export default Sidebar;