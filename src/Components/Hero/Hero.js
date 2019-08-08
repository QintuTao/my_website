import React from 'react';
import "./Hero.scss";
import Logo from "../../Settings/logo.svg";

class Hero extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className = "hero">
                <img src={Logo} className="hero-image" />
                <p className="hero-display">qintu.ca</p>
            </div>
            
        )
    }
}

export default Hero