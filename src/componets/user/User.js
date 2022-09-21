import React from 'react';
import {Comments} from "../comments/Comments";

const User = ({user}) => {

  const {name, username} = user;

  return (
<div>
      <div>
        <h2>name: {name}</h2>
        <h2>username: {username}</h2>
      </div>
</div>
  );
};

export {User};