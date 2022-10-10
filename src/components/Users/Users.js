import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {userAction} from "../../redux";
import {userAxiosServices} from "../../services";
import {User} from "../User";

const Users = () => {

  const dispatch = useDispatch();
  const {users} = useSelector(state => state.useReducer);

  useEffect(() => {
    userAxiosServices.getAll().then(({data}) => dispatch(userAction.getAll(data)))
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