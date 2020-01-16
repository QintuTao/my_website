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

            <h4> Description</h4>
            <p  >{descriptionComponent}</p>
            <p ><b>Source Link:</b> <a href={sourceComponent}>{sourceComponent}</a></p>
            <p><b>Demo Link:</b> <a href={sourceComponent}>{demoComponent}</a></p>
        </div>
    )
}


export default CardDisplayView;
