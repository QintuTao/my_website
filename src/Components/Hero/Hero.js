import React from 'react';
import "./Hero.scss";
import Logo from "../../Settings/logo.svg";
import ArrowButton from "./ArrowButton";

class Hero extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className = "hero">
                <img src={Logo} className="hero-image" />
                <p className="hero-display">qintu.ca</p>
                <p className="hero-slogan"> live a life as colourful as possible</p>
                <ArrowButton />
            </div>
        )
    }
}

export default Hero