import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {


  return (
      <div>
        <div>name:{user.name}</div>
        <div>username:{user.username}</div>
        <div>
          <Link to={'/users/' + user.id} state={{...user}}>details</Link>
        </div>
        <div>
          <Link to={'/users/two/' + user.id}>details2</Link>
        </div>
      </div>
  );
};

export default User;