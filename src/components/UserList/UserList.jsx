import React from "react";
import UserCard from "../Usercard/UserCard";
import './UserList.css'

function UserList({ Users }){
    var userInfo = Users;

    if(userInfo == null){
      return <p>No Data</p>
    }

    return(
      <div className="userList">
        {(userInfo.map((user)=><UserCard key={user.id} user = {user}/>))}
      </div>
    )
}

export default UserList;