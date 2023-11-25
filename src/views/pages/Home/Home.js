import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Header from "../../components/Header/Header.js";
import SidebarLeft from '../../components/SidebarLeft/SidebarLeft.js';
import Question from '../../components/Question/Question.js';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="frame">
            <Header />
            <div className="main-container">
                <SidebarLeft />
                <div className="content-container">
                    <div className="menu-container">
                        <div className="top-questions">Top Questions</div>
                        <ul className="filter-container">
                            <li className="trending-btn">Trending</li>
                            <li className="top-btn">Top</li>
                            <li className="recent-btn">Recent</li>
                        </ul>
                    </div>
                    <div className="questions-c81">
                        <Question votes={1261} answers={30} views={5230} question="What the dog doing?" tags={["beast"]} submittedBy="Jimbo" />
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
                <div className="sidebar-right-Mtm">
                    <button className="ask-question" onClick={() => navigate("/askquestion")}>Ask Question</button>
                </div>
            </div>
        </div>
    );
}

export default Home;