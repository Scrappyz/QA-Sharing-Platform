import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Header from "../../components/Header/Header.js";
import Sidebar from '../../components/Sidebar/Sidebar.js';
import Question from '../../components/Question/Question.js';

function Home() {
    const navigate = useNavigate();
    const default_profile = "./assets/profile/defaultProfile.png";
    return (
        <div className="frame">
            <Header />
            <div className="main-container">
                <Sidebar buttons={{
                    Home: {
                        path: "/",
                        icon: "./assets/icons/home.png"
                    }, 
                    User: {
                        path: "/profile",
                        icon: "./assets/icons/users.png"
                    },
                    Saves: {
                        path: null,
                        icon: "./assets/icons/saves.png"
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
                        <Question votes={1261} answers={30} views={5230} question="Explain the concept of recursion and provide an example" tags={["computer-science"]} user={{name: "Fredrick Aquilino", profile: default_profile}} postDate={new Date("2023-12-5")} />
                        <Question votes={1600} answers={22} views={7300} question="Describe the differences between a stack and a queue data structure" tags={["computer-science", "data-structures"]} user={{name: "Trent Sullivan", profile: default_profile}} postDate={new Date("2023-7-21")} />
                        <Question votes={2100} answers={28} views={7800} question="What is the purpose of an API?" tags={["computer-science"]} user={{name: "Kory Lorete", profile: default_profile}} postDate={new Date("2023-8-15")} />
                        <Question votes={1500} answers={20} views={5600} question="What is the significance of the Big O notation in algorithm analysis?" tags={["computer-science", "algorithms"]} user={{name: "Alexis Baldedara", profile: default_profile}} postDate={new Date("2023-8-29")} />
                        <Question votes={328} answers={8} views={933} question="Solve the equation: 3x+5x-2 = 0" tags={["mathematics", "algebra"]} user={{name: "Darryl Matthew", profile: default_profile}} postDate={new Date("2023-5-26")} />
                        <Question votes={1400} answers={11} views={6200} question="What is the process of photosynthesis, and what role does it play in plants?" tags={["biology"]} user={{name: "Darryl Matthew", profile: default_profile}} postDate={new Date("2023-6-6")} />
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