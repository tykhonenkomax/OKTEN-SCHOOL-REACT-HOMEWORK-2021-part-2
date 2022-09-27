import React from 'react';

import {Link} from "react-router-dom";


const Comment = ({comment}) => {

  return (
      <div>

        <div>
          {comment.id} -- {comment.email}
         <span><Link to={comment.postId.toString()}> comment: {comment.name} </Link></span>
        </div>
      </div>


  );
};

export {Comment};