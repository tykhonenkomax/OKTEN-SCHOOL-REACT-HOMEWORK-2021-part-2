import React from 'react';
import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {GET_ALL_USERS} from "../../redux";

import {userServices} from "../../services";
import {User} from "../user/User";


const Users = () => {


  const state = useSelector(state => state.userReducer);

  console.log(state)

  const dispatch = useDispatch();

  useEffect(() => {
    userServices.getAll().then(({data}) =>
        dispatch({type: GET_ALL_USERS, payload: data})
    )
  }, [])


  return (

      <div>
        {
          state.users.map(user => <User key={user.id} user={user}/>)
        }
      </div>

  );
};


export {Users};