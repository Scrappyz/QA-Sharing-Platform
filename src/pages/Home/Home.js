import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="Home-keD">
            <div className="main-JQq">
                <div className="sidebar-left-2bj">
                <p className="Home-wTo">Home</p>
                <p className="users-TBF">Users</p>
                <p className="saves-b2Z">Saves</p>
                </div>
                <div className="auto-group-uvxp-WQR">
                    <div className="auto-group-jp3s-rDP">
                        <div className="top-questions-n73">Top Questions</div>
                        <div className="filter-tvm">
                        <div className="trending-32y">Trending</div>
                        <div className="top-VQm">Top</div>
                        <div className="recent-kbb">Recent</div>
                    </div>
                </div>
                <div className="questions-c81">
                    <div className="question-1-9td">
                        <div className="auto-group-msuz-5GV">
                            <div className="votes-bVj">Votes</div>
                            <div className="answers-jM3">Answers</div>
                            <div className="views-fkV">Views</div>
                        </div>
                        <div className="auto-group-8aks-c9w">
                            <div className="question-1-YJV">Question 1</div>
                            <div className="tags-TgM">Tags</div>
                        </div>
                        <div className="submitted-by--aky">Submitted by: </div>
                    </div>
                    <div className="question-2-tWm">
                    <div className="auto-group-mcxt-1bP">
                        <div className="votes-Ldf">Votes</div>
                        <div className="answers-fR3">Answers</div>
                        <div className="views-Prq">Views</div>
                    </div>
                    <div className="auto-group-vk7s-jQu">
                        <div className="question-2-GQq">Question 2</div>
                        <div className="tags-zLq">Tags</div>
                    </div>
                    <div className="submitted-by--vVP">Submitted by: </div>
                    </div>
                    <div className="question-3-DjP">
                    <div className="auto-group-nx29-8rM">
                        <div className="votes-fbP">Votes</div>
                        <div className="answers-CbK">Answers</div>
                        <div className="views-Xdb">Views</div>
                    </div>
                    <div className="auto-group-utrb-UHw">
                        <div className="question-3-cQ9">Question 3</div>
                        <div className="tags-wxD">Tags</div>
                    </div>
                    <div className="submitted-by--sqs">Submitted by: </div>
                    </div>
                    <div className="question-4-ACh">
                    <div className="auto-group-sjh7-H2R">
                        <div className="votes-Q73">Votes</div>
                        <div className="answers-WQy">Answers</div>
                        <div className="views-SpR">Views</div>
                    </div>
                    <div className="auto-group-mqh3-n7b">
                        <div className="question-4-Jrd">Question 4</div>
                        <div className="tags-RgM">Tags</div>
                    </div>
                    <div className="submitted-by--ZGm">Submitted by: </div>
                    </div>
                    <div className="question-5-4UR">
                    <div className="auto-group-qtqr-Pmb">
                        <div className="votes-uV3">Votes</div>
                        <div className="answers-3bF">Answers</div>
                        <div className="views-BBf">Views</div>
                    </div>
                    <div className="auto-group-wpos-Jn5">
                        <div className="question-5-2i5">Question 5</div>
                        <div className="tags-ZCD">Tags</div>
                    </div>
                    <div className="submitted-by--V5s">Submitted by: </div>
                    </div>
                </div>
                </div>
                <div className="sidebar-right-Mtm">Ask Question</div>
            </div>
            <div className="header-eN5">
                <p className="website-name-82M">[Website Name]</p>
                <div className="search-bar-RXF">Search</div>
                <button className="profile-Tyj" onClick={() => navigate("/profile")}>Profile</button>
            </div>
        </div>
    );
}

export default Home;