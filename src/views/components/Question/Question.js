import React from "react";
import "./Question.css";

function Question(props) {
    return (
        <div className="question-info-container">
            <div className="stats-container">
                <div className="votes">{props.votes} votes</div>
                <div className="answers">{props.answers} answers</div>
                <div className="views">{props.views} views</div>
            </div>
            <div className="question-container">
                <div className="question">{props.question}</div>
                <ul className="tags-container">
                    {props.tags.map((t) => <li>#{t}</li>)}
                </ul>
            </div>
            <div className="submitted-by">Submitted by: {props.submittedBy}</div>
        </div>
    )
}

Question.defaultProps = {
    votes: 0,
    answers: 0,
    views: 0,
    question: "No Question",
    tags: [],
    submittedBy: "None"
};


export default Question;