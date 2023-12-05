import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import DefaultProfilePic from "../../../assets/profile/defaultProfile.png";

function Header(props) {
    const navigate = useNavigate();

    return (
        <header>
            <div className="website-name">{props.title}</div>
            <div className="search-bar">
                <input type="text" placeholder="Search" />
            </div>
            <div className="button-container">
                <button className="profile" onClick={() => navigate("/profile")}><img src={props.profilePic} className="profile-pic" /></button>
            </div>
        </header>
    );
}

Header.defaultProps = {
    title: "[Website Name]",
    profilePic: DefaultProfilePic
}

export default Header;
