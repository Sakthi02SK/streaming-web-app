import React from "react";
import logo from "./Assets/logo.svg";
import "./CSS/header.css";

function Header({searchText, search}){
    return(
        <header className="d-flex justify-content-between align-items-center p-3">
            <img src={logo} className="logo" alt="Logo"/>
            <div className="d-flex justify-content-between text-white align-items-center">
                <div className="inputBox">
                    <input 
                        type="text" 
                        placeholder="Search ..." 
                        className="px-4 py-3"
                        value={searchText}
                        onChange={search}
                    />
                    <i className="fa-solid fa-magnifying-glass searchIcon"></i>
                </div>
                <i className="fa-solid fa-video mx-2 d-none d-md-block"></i>
                <i className="fa-solid fa-bars mx-2 d-none d-md-block"></i>
                <i className="fa-regular fa-bell mx-2 d-none d-md-block"></i>
                <i className="fa-solid fa-circle-user mx-2"></i>
            </div>
        </header>
    );
}

export default Header;