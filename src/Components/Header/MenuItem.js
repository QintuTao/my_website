import React from "react";
import Button from "@material/react-button";
import "./MenuItem.scss";

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button className="button-alternate"> Hello World </Button>
        )
    }
}

export default MenuItem;