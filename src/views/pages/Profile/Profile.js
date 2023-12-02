import React from "react";
import "./Profile.css";
import Header from "../../components/Header/Header.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import ProfilePic from "../../../assets/profile/profile.png";

function Profile() {
    return (
        <div className="frame">
            <Header />
            <div className="main-container">
                <Sidebar buttons={{
                    Home: {
                        path: "/"
                    }, 
                    User: {
                        path: null
                    },
                    Saves: {
                        path: null
                    }
                }} />
                <div className="content-container">
                    <div className="profile-container">
                        <img className="profile-pic" src={ProfilePic} />
                        <div className="name-container">
                            <p className="name">Your Name</p>
                            <p className="extra-info">Joined on [Month/Day/Year]</p>
                        </div>
                    </div>
                    <div className="bottom-container">
                        <div className="stats-container">
                            <p className="stats-txt">Stats</p>
                            <div className="user-stats-container">
                                <div className="posts-container">
                                    <div className="posts">
                                        <p className="value">[x]</p>
                                        <p className="txt">Questions</p>
                                    </div>
                                    <div className="upvotes">
                                        <p className="value">[x]</p>
                                        <p className="txt">Upvotes</p>
                                    </div>
                                </div>
                                <div className="comments-container">
                                    <div className="comments">
                                        <p className="value">[x]</p>
                                        <p className="txt">Comments</p>
                                    </div>
                                    <div className="upvotes">
                                        <p className="value">[x]</p>
                                        <p className="txt">Upvotes</p>
                                    </div>
                                </div>
                                <div className="total-upvotes-container">
                                    <p className="value">[x]</p>
                                    <p className="txt">Total Upvotes</p>
                                </div>
                            </div>
                        </div>
                        <div className="information-nRw">
                            <p className="information-XuK">Information</p>
                        <div className="auto-group-jyau-U3s">
                            <p className="full-name-Nuw">Full Name</p>
                            <p className="age-u9B">Age</p>
                        </div>
                        </div>
                    </div>
                </div>
                <Sidebar buttons={{
                    Summary: {
                        path: null
                    },
                    Posts: {
                        path: null
                    },
                    Comments: {
                        path: null
                    }
                }} />
            </div>
        </div>
    );
}

export default Profile;