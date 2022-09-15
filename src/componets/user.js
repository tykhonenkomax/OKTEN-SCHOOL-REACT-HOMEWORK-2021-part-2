import React from 'react';

const User = ({user, userSearch}) => {

  return (
      <div>
        <div className='myNameStyle'><span className='myNameStyle'>My name:</span>  {user.username} {user.name}</div>
        <button className='button' onClick={()=>{
          userSearch(user.id);
        }}>Details</button>
      </div>
  );
};

export default User;