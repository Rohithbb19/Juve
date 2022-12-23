import React from "react";

function UserCard({user}){
    return(
        <div>
            <div>
                <img src={user.avatar}></img>
            </div>
            <div>
                <h3>{user.first_name} {user.last_name}</h3>
                <h4>{user.email}</h4>
            </div>
        </div>
    )
}

export default UserCard;