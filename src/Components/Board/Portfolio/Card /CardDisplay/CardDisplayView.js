import React from "react";
import CardDisplayModle from "./CardDisplayModel";
import "./CardDisplayView.scss";
import Card from "../Card";

const CardDisplayView = (props) => {
    var shouldRenderContent = CardDisplayModle[props.currentDisplay];
    const titleComponent = shouldRenderContent.title;
    const descriptionComponent = shouldRenderContent.description;
    const sourceComponent = shouldRenderContent.source; // link
    const demoComponent = shouldRenderContent.demo;   // link 

    return (
        <div className="caret-display-container">
            <h3 >{titleComponent}</h3>
            <p  >{descriptionComponent}</p>
            <a >{sourceComponent}</a>
            <br />
            <a >{demoComponent}</a>
        </div>
    )
}


export default CardDisplayView;
