import React from 'react';
import Logo from "../../Settings/logo.svg";
import ArrowButton from "./ArrowButton/ArrowButton";
import "./Hero.scss";

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