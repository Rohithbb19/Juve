import React from "react";
import UserCard from "./UserCard";

function UserList({ Users }){
    var userInfo = Users;

    if(userInfo == null){
      return <p>No Data</p>
    }

    return(userInfo.map((user)=><UserCard key={user.id} user = {user}/>))
}

export default UserList;