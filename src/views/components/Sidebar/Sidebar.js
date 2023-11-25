import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Sidebar.css";

function Sidebar(props) {
    const navigate = useNavigate();

    return (
        <div className="sidebar-container">
            {props.buttons.map((b) => <button className="btn">{b}</button>)}
        </div>
    )
}

Sidebar.propTypes = {
    buttons: PropTypes.array
}

export default Sidebar;