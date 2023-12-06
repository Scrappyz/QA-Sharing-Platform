import React from "react";
import "./CreatePost.css";
import Header from "../../components/Header/Header.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";

function CreatePost() {
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
                    <div className="top-label">Create Post</div>
                    <div className="title-container">
                        <p className="label">Title</p>
                        <input className="title" type="text" placeholder="e.g. What is 2+2?" />
                    </div>
                    <div className="body-container">
                        <p className="label">Body</p>
                        <div className="buttons-container">
                            <img className="heading-btn" src="./assets/icons/heading.png" />
                            <img className="bold-btn" src="./assets/icons/bold.png"/>
                            <img className="italic-btn" src="./assets/icons/italic.png"/>
                            <img className="link-btn" src="./assets/icons/link.png"/>
                            <img className="image-btn" src="./assets/icons/image.png"/>
                            <img className="numbering-btn" src="./assets/icons/number_list.png"/>
                            <img className="bullet-btn" src="./assets/icons/bullet_list.png"/>
                            <img className="undo-btn" src="./assets/icons/undo.png"/>
                            <img className="redo-btn" src="./assets/icons/redo.png"/>
                        </div>
                        <textarea className="text-body" placeholder="Describe your post." />
                    </div>
                    <div className="tags-container">
                        <p className="label">Tags</p>
                        <input className="tags" type="text" placeholder="e.g. computer-science mathematics discrete-structures" />
                    </div>
                    <button className="review-question-btn">Review Question</button>
                </div>
                <Sidebar buttons={{
                    // none
                }} />
            </div>
        </div>
    );
}

export default CreatePost;