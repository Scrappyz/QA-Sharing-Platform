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
                        <input className="title" type="text" placeholder="Title" />
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
                        <textarea className="text-body" placeholder="Describe your problem" />
                    </div>
                    <div className="tags-pmX">
                        <div className="tags-xMw">Tags</div>
                        <div className="shape-gHw">
                        </div>
                    </div>
                    <div className="review-question-Py3">Review Question</div>
                </div>
                <Sidebar buttons={{
                    // none
                }} />
            </div>
        </div>
        // <div className="AskQuestion-QFK">
        //     <div className="main-ccH">
        //         <div className="selection-F2y">
        //         <div className="auto-group-eik3-9u3">
        //             <div className="AskQuestion-4WD">Add Question</div>
        //             <img className="line-2-j6Z" src="REPLACE_IMAGE:36:690"/>
        //         </div>
        //         <div className="line-1-ejK">
        //         </div>
        //         <div className="create-post-b8m">Create Post</div>
        //         </div>
        //         <div className="AskQuestion-WFj">Add Question</div>
        //         <div className="title-container">
        //         <div className="label">Title</div>
        //         <div className="shape-qBX">
        //         </div>
        //         </div>
        //         <div className="body-container">
        //         <div className="label">Body</div>
        //         <div className="buttons-container">
        //             <img className="bold-Ecy" src="./assets/bold.png"/>
        //             <img className="italic-Z9T" src="./assets/italic.png"/>
        //             <img className="s-GpZ" src="./assets/s.png"/>
        //             <img className="razorblade-Auw" src="./assets/razorblade.png"/>
        //             <img className="numbering-Hjf" src="./assets/numbering.png"/>
        //             <img className="bullet-pDo" src="./assets/bullet.png"/>
        //             <img className="spacing-9G5" src="./assets/spacing.png"/>
        //             <img className="undo-sC5" src="./assets/undo.png"/>
        //             <img className="redo-zGh" src="./assets/redo.png"/>
        //         </div>
        //         <div className="text-body">
        //         </div>
        //         </div>
        //         <div className="tags-pmX">
        //         <div className="tags-xMw">Tags</div>
        //         <div className="shape-gHw">
        //         </div>
        //         </div>
        //         <div className="review-question-Py3">Review Question</div>
        //    </div>
        // </div>
    );
}

export default AskQuestion;