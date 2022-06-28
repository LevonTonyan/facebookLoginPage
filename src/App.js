import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {NavLink} from "react-router-dom";
import Photos from "./components/Photos/Photos";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>

                <Main/>



            </div>
        </BrowserRouter>

    );
}

export default App;
