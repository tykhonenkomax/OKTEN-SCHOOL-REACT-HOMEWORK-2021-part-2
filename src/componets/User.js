import React from 'react';

const User = ({user, handleId}) => {

  return (
      <div>
        <div>name:{user.name}</div>
        <div>username:{user.username}</div>
        <button onClick={() => {handleId(user.id);}}>PUSH</button>
      </div>
  );
};

export {User};
