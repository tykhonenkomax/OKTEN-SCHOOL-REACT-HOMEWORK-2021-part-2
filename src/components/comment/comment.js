import React from 'react';

import {Link, Outlet} from "react-router-dom";


const Comment = ({comment}) => {

  return (
      <div>

        <div>
          <Link to={`posts/${comment.id}`}> comment: {comment.name}</Link>
        </div>

        <div><Outlet/></div>
      </div>


  );
};

export {Comment};