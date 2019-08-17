import React from "react";
import "./MenuItem.scss";

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