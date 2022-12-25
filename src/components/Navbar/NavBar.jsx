import React from "react";
import './NavBar.css'
function NavBar(props){

    return(
        <nav className="navBar">
            <div className="navName">
            <img className="navImg" src="src\assets\Juve.png"/>    
            <h3 >uve</h3>
            </div>
            <div className="mainBorder">
            <div className="diagonalBorder"></div>
            <div className="borderMain">
            <button className="navButton" onClick={props.OnClick}>Get User</button>
            </div>
            </div>
        </nav>
    )
}

export default NavBar;