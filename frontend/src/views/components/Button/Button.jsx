import React from "react";

function Button(props) {
    return (
        <button><img src={props.icon} /></button>
    )
}

Button.defaultProps = {
    label: "",
    fontStyle: "Calibri",
    fontSize: "16px",
    color: "#ffffff",
    backgroundColor: null,
    icon: null
}

Button.propTypes = {
    label: PropTypes.string
}

export default Button;