import React from 'react';
import "./Header.scss";
import MenuItem from "./MenuItem/MenuItem";

const Header = (props) => {
    return (
        <div className="header">
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
    )
}

export default Header;
