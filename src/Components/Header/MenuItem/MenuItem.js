import React from "react";
import "./MenuItem.scss";

// todo: figure out passing component's state while going to other pages

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="menu-buttons"> Hello World </button>
        )
    }
}

export default MenuItem;