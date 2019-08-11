import React from "react";
import "./Hero.scss";
import Button from "@material/react-button";

class ArrowButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button>Hello World!</Button>
        )
    }
}

export default ArrowButton;