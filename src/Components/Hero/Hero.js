import React from 'react';
import "./Hero.scss";
import Logo from "../../Settings/logo.svg";
import ArrowButton from "./ArrowButton/ArrowButton";

const Hero = (props) => {
    return (
        <div className="hero">
            <img src={Logo} className="hero-image" />
            <p className="hero-display">Bread·On·Mars</p>
            <p className="hero-slogan"> live a life as colourful as possible</p>
            <ArrowButton />
        </div>
    )
}

export default Hero;