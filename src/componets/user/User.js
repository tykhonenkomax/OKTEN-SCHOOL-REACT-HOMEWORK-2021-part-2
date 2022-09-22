import React from 'react';


const User = ({user}) => {

  const {name, username} = user;

  return (
      <div key={user.id}>
        <div>
          <h2>name: {name}</h2>
          <h2>username: {username}</h2>
        </div>
      </div>
  );
};

export {User};