import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Navbar.module.css";

import { Link } from "react-router-dom";

export default function Navbar(props){
    return(
        <div className={style.container}>
            <SearchBar onSearch={props.onSearch}/>
            <Link to='/about'>About</Link>
            <Link to='/home'>Home</Link>
        </div>
    )
}