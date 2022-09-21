import React, {useEffect, useState} from 'react';

import {commentsServices} from "../../services";
import {Comment} from "../comment/Comment";


const Comments = () => {

  const [comments, setComments] = useState([])

  useEffect(() => {

    commentsServices.getAll().then(({data}) => setComments(data))

  }, [])

  return (
      <div>
        {
          comments.map(comments => <Comment key={comments.id} comment={comments}/>)
        }
      </div>
  );
};

export {Comments};