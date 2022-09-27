import React from 'react';
import {useEffect, useState} from "react";

import {commentsServices} from "../../services";
import {Comment} from "../comment/comment";
import {Outlet} from 'react-router-dom'


const Comments = () => {


  const [comments, setComments] = useState([]);

  useEffect(() => {
    commentsServices.getAll().then(({data}) => setComments(data))
  }, [])

  return (
<div>
  <Outlet/>
  <div>
    {
      comments.map(comment => <Comment key={comment.id} comment={comment}/>)
    }
  </div>
</div>

  );
};

export {Comments};