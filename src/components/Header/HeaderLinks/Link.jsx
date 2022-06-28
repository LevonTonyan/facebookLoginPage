import React from "react";
import s from "./Link.module.css";
import {Link} from "react-router-dom";

const HeaderLink = function () {
    return (
        <div className={s.link}>
            <h1>Hello</h1>
            <a>Link</a>
        </div>

    );
};


export default HeaderLink;