import React, {useEffect, useState} from 'react';

import {postsServices} from "../../services/posts.axios.services";
import {Post} from "../post/post";

const Posts = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    postsServices.getAll().then(({data}) => setPosts(data))
  }, [])

  return (

      <div>
        {
          posts.map(post => <Post key={post.id} post={post}/>)
        }


      </div>

  );
};

export {Posts};