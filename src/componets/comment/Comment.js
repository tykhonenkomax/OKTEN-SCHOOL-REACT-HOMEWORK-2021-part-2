import React from 'react';

const Comment = ({comment}) => {

  const {name, email} = comment
  return (
      <div>
        <div>name: {name}</div>
        <div>email: {email}</div>
        <hr/>
      </div>
  );
};

export {Comment};