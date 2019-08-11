import React from 'react';
import "./Header.scss";
import MenuItem from "./MenuItem";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        )
    }
}

export default Header;