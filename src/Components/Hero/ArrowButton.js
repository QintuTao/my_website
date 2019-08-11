import React from "react";
import "./ArrowButton.scss";

class Arrow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p className="arrow"></p>
        )
    }
}

class ArrowButton extends React.Component {
    constructor(props) {
        super(props);
    }

   
    render() {
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
}

export default ArrowButton;