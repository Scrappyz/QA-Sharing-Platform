import React from "react";
import "./Question.css";
import PropTypes from "prop-types";
import {shortenNumber} from "../../../helpers/utility.js";

function Question(props) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <div className="question-info-container">
            <div className="stats-container">
                <div className="votes">{shortenNumber(props.votes)} votes</div>
                <div className="answers">{shortenNumber(props.answers)} answers</div>
                <div className="views">{shortenNumber(props.views)} views</div>
            </div>
            <div className="question-container">
                <div className="question">{props.question}</div>
                <div className="tags-container">
                    {props.tags.map((t) => <p>#{t}&nbsp;</p>)}
                </div>
            </div>
            <div className="user-info-container">
                <p className="submitted-by"><img className="profile-pic" src={props.user.profile} /> {props.user.name}</p>
                <p className="post-date">{months[props.postDate.getMonth()]} {props.postDate.getDate()}, {props.postDate.getFullYear()}</p>
            </div>
        </div>
    )
}

Question.propTypes = {
    votes: PropTypes.number,
    answers: PropTypes.number,
    views: PropTypes.number,
    question: PropTypes.string,
    tags: PropTypes.array,
    user: PropTypes.object
}

Question.defaultProps = {
    votes: 0,
    answers: 0,
    views: 0,
    question: "No Question",
    tags: [],
    user: {
        profile: null,
        name: ""
    },
    postDate: new Date()
};

export default Question;