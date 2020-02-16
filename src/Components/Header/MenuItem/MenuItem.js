import React from "react";
import "./MenuItem.scss";

const MenuItem = (props) => {
    return (
        <button className="menu-buttons" href={"." + props.itemContent}> {props.itemContent} </button>
    )
}

export default MenuItem;