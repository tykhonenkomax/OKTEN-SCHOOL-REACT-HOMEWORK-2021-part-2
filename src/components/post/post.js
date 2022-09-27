import React from 'react';


const Post = ({post}) => {

  return (

      <h1>
        title: {post.title}
        <hr/>
      </h1>


  );
};

export {Post};