import React from 'react';
import {useDispatch} from "react-redux";
import {userAction} from "../../redux";

const User = ({user}) => {
const dispatch = useDispatch();
  return (

      <div>
        name:{user.name}
        <button onClick={()=>dispatch(userAction.setCurrentUser(user))}>select</button>
      </div>

  );
};


export {User};