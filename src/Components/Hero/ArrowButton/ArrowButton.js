import React from "react";
import Arrow from "./Arrow/Arrow";
import "./ArrowButton.scss";

const ArrowButton = (props) => {
    return (
        <button className="arrow-button" onMouseEnter={
            console.log("dd")
        }>
            <Arrow />
            <Arrow />
            <Arrow />
        </button>
    )
}

export default ArrowButton;