import React from "react";
import s from "./Main.module.css";

import Photos from "../Photos/Photos";
import {Link, NavLink, Route, Routes} from "react-router-dom";
import Videos from "../Videos/Videos";
import GpsTracks from "../GpsTracks/GpsTracks";


const Main = function (props) {
    return (
        <div className={s.main_container}>
            <div className={s.menuButtons}>
                <NavLink to="/photos">Photos</NavLink>
                <NavLink to="/videos">Videos</NavLink>
                <NavLink to="/gpsTracks">GPS Tracks</NavLink>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Photos/>} />
                    <Route path="/photos" element={<Photos/>} />
                    <Route path="/videos" element={<Videos/>} />
                    <Route path="/gpsTracks" element={<GpsTracks/>} />
                </Routes>
            </div>

        </div>

    );
};


export default Main;