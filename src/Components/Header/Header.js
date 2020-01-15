import React from 'react';
import "./Header.scss";
import MenuItem from "./MenuItem/MenuItem";

const Header = (props) => {
    return (
        <div className="header">
            <MenuItem itemContent="ABOUT ME" />
            <MenuItem itemContent="PORTOLIO" />
            <MenuItem itemContent="CONTACT" />
        </div>
    )
}

export default Header;
