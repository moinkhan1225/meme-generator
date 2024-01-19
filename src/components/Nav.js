import React from "react";
import Logo from "../Images/troll-face.jpg"
export default function Nav(){
    return(
        <div className="nav-bar">
            <img src={Logo} className="nav-logo" onMouseEnter={handleMouseEvent} alt="logo-here"/>
            <span className="nav-text">Meme Generator</span>
            <span className="nav-about">React Course - Project 3</span>
        </div>
    )
}
function handleMouseEvent(){
    console.log("Mouse entered into Image");
}
