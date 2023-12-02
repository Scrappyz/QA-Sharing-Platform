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
                                <div className="questions-container">
                                    <div className="questions">
                                        <p className="value">[x]</p>
                                        <p className="txt">Questions</p>
                                    </div>
                                    <div className="upvotes">
                                        <p className="value">[x]</p>
                                        <p className="txt">Upvotes</p>
                                    </div>
                                </div>
                                <div className="auto-group-zdaz-iFj">
                                    <div className="answers-fAy">
                                        <p className="x-oHB">[x]</p>
                                        <p className="answers-YEm">Answers</p>
                                    </div>
                                    <div className="upvotes-tJd">
                                        <p className="x-qUm">[x]</p>
                                        <p className="upvotes-yay">Upvotes</p>
                                    </div>
                                </div>
                                <div className="total-upvotes-Keq">
                                    <p className="x-mWq">[x]</p>
                                    <p className="total-upvotes-6Z7">Total Upvotes</p>
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