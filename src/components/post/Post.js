import React from 'react';

const Post = ({post}) => {


  return (

      <div className='postStyle'>
        {post.id}) POST: {post.title}
      </div>

  );
};


export {Post};