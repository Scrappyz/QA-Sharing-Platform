import React from "react";
import "./Question.css";

function Question() {
    return (
        <div className="question-info-container">
            <div className="stats-container">
                <div className="votes">Votes</div>
                <div className="answers">Answers</div>
                <div className="views">Views</div>
            </div>
            <div className="question-container">
                <div className="question">Question 1</div>
                <ul className="tags-container">
                    <li>Tag 1</li>
                </ul>
            </div>
            <div className="submitted-by">Submitted by: </div>
        </div>
    )
}

export default Question;