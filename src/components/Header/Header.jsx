import React from "react";
import s from "./Header.module.css";
import logo from "./logo.jpg";

import HeaderLink from "./HeaderLinks/Link";

const Header = function () {
    return (
        <div id="header-container">
            <div className={s.black}>
                <img src={logo} alt="Hey"/>
                <div className={s.linkContainer}>
                    <a href='#s'>Gallery</a>
                    <a href='#s'>News</a>
                    <a href='#s'>Upcoming</a>
                </div>

            </div>

        </div>

    );
};


export default Header;