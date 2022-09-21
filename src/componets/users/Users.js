import React from 'react';
import {useEffect, useState} from "react";

import {usersServices} from "../../services";
import {User} from "../user/User";

const Users = () => {


  const [users, setUsers] = useState([])

  useEffect(() => {
    usersServices.getAll().then(({data}) => setUsers(data))
  }, [])


  return (
      <div>
        {
          users.map(user => <User key={user.id} user={user}/>)
        }
      </div>
  );
};

export {Users};