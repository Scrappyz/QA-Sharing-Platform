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
                    <div className="questions-container">
                        <Question votes={1261} answers={30} views={5230} question="What the dog doing?" tags={["beast"]} submittedBy="Jimbo" />
                        <Question votes={1261} answers={30} views={5230} question="What the dog doing?" tags={["beast"]} submittedBy="Jimbo" />
                        <Question votes={1261} answers={30} views={5230} question="What the dog doing?" tags={["beast"]} submittedBy="Jimbo" />
                        <Question votes={1261} answers={30} views={5230} question="What the dog doing?" tags={["beast"]} submittedBy="Jimbo" />
                        <Question votes={1261} answers={30} views={5230} question="What the dog doing?" tags={["beast"]} submittedBy="Jimbo" />
                        <Question votes={1261} answers={30} views={5230} question="What the dog doing?" tags={["beast"]} submittedBy="Jimbo" />
                        <Question votes={1261} answers={30} views={5230} question="What the dog doing?" tags={["beast"]} submittedBy="Jimbo" />
                        <Question votes={1261} answers={30} views={5230} question="What the dog doing?" tags={["beast"]} submittedBy="Jimbo" />
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