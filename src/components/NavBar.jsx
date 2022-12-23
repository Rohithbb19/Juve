import React from "react";

function NavBar(props){

    return(
        <nav>
            <button onClick={props.OnClick}>Get User</button>
        </nav>
    )
}

export default NavBar;