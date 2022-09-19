import React, {useEffect, useState} from 'react';
import {getUsers, getUsersId} from "../services";
import {User} from "./User";

const Users = () => {

  let [users,setUsers]=useState([])
  let [user,setUser]=useState(null)

  useEffect(()=>{

    getUsers().then(value => setUsers(value.data))

  },[])

 const handleId =(id)=>{
   getUsersId(id).then(value => setUser(value.data))
  }

  return (
      <div>
        <div>{user && (<div>{user.name}</div>)}</div>
        <hr/>
        {
          users.map(value => <User key={value.id} user={value} handleId={handleId}/>)
        }
      </div>
  );
};

export {Users};