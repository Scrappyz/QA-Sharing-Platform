import React from "react";
import "./AskQuestion.css";
import Header from "../../components/Header/Header.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";

function AskQuestion() {
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
                    <div className="top-label">Create Post</div>
                    <div className="title-container">
                        <p className="label">Title</p>
                        <input className="title" type="text" placeholder="e.g. What is 2+2?" />
                    </div>
                    <div className="body-container">
                        <p className="label">Body</p>
                        <div className="buttons-container">
                            <img className="bold-Ecy" src="./assets/bold.png"/>
                            <img className="italic-Z9T" src="./assets/italic.png"/>
                            <img className="s-GpZ" src="./assets/s.png"/>
                            <img className="razorblade-Auw" src="./assets/razorblade.png"/>
                            <img className="numbering-Hjf" src="./assets/numbering.png"/>
                            <img className="bullet-pDo" src="./assets/bullet.png"/>
                            <img className="spacing-9G5" src="./assets/spacing.png"/>
                            <img className="undo-sC5" src="./assets/undo.png"/>
                            <img className="redo-zGh" src="./assets/redo.png"/>
                        </div>
                        <textarea className="text-body" placeholder="Describe your post." />
                    </div>
                    <div className="tags-container">
                        <p className="label">Tags</p>
                        <input className="tags" type="text" placeholder="e.g. computer-science mathematics discrete-structures" />
                    </div>
                    <div className="review-question-Py3">Review Question</div>
                </div>
                <Sidebar buttons={{
                    // none
                }} />
            </div>
        </div>
    );
}

export default AskQuestion;