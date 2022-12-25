import React from "react";
import './UserCard.css'

function UserCard({user}){
    return(
        <div className="mainCard">
            <div>
                <img className="cardImg" src={user.avatar}></img>
            </div>
            <div className="cardInfo">
                <h3 className="cardName">{user.first_name} {user.last_name}</h3>
                <h4 className="cardEmail">{user.email}</h4>
            </div>
        </div>
    )
}

export default UserCard;