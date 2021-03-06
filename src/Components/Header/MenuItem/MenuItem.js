import React from "react";
import "./MenuItem.scss";

/**
 * @param {{ itemContent: {}; }} props
 */
const MenuItem = (props) => {
    return (
        <button className="menu-buttons" href={"." + props.itemContent}> {props.itemContent} </button>
        // TODO: add anchor link to menu buttons
    )
}

export default MenuItem;
