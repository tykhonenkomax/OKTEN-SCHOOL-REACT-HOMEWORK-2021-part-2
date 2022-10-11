import React from 'react';

import {useSelector} from "react-redux";

const Header = () => {

  const {currentUser} = useSelector(state => state.userReducer);
  const {currentPost} = useSelector(state => state.postReducer);
  const {currentComment} = useSelector(state => state.commentReducer);


  return (

      <div>
        {currentUser && currentUser.name}
        <hr/>
        {currentPost && currentPost.title}
        <hr/>
        {currentComment && currentComment.email}
      </div>

  );
};


export {Header};