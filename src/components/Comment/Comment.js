import React from 'react';

import {useDispatch} from "react-redux";
import {commentAction} from "../../redux";

const Comment = ({comment}) => {

const dispatch = useDispatch();

  return (
<div>
      <div>
       email: {comment.email}
        <button onClick={()=>dispatch(commentAction.getCurrentComment(comment))}>select</button>
      </div>
</div>

  );
};


export {Comment};