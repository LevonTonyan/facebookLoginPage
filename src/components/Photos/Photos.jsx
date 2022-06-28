import React from "react";
import s from "./Photos.module.css";
import Mountains from "./../../images/Mountains.jpg";


const Photos = function (props) {
    return (
        <div className={s.image_container}>
            <img src={Mountains}/>
            </div>

            );
            };


export default Photos;