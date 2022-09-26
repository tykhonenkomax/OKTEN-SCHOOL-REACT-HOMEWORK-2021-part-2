import React from 'react';

const Album = ({album}) => {

  console.log(album)
  return (

      <div>
        <div>title:{album.title}</div>
      </div>
  );
};

export {Album};