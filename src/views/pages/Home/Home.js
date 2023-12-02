import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Header from "../../components/Header/Header.js";
import Sidebar from '../../components/Sidebar/Sidebar.js';
import Question from '../../components/Question/Question.js';

function Home() {
    const navigate = useNavigate();

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
                    <div className="menu-container">
                        <div className="top-questions">Top Questions</div>
                        <ul className="filter-container">
                            <li className="btn">Trending</li>
                            <li className="btn">Top</li>
                            <li className="btn">Recent</li>
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
                <Sidebar buttons={{
                    "Ask Question": {
                        path: "/askquestion"
                    }
                }} />
            </div>
        </div>
    );
}

export default Home;