import React, {useEffect, useState} from 'react';
import {postsServices} from "../../services";
import {Post} from "../post/post";
import {Outlet} from 'react-router-dom'

const Posts = () => {

  const[posts,setPosts]= useState([])

  useEffect(()=>{
    postsServices.getAll().then(({data}) => setPosts(data))
  },[])

  return (
      <div>

<Outlet/>
        {
          posts.map(post=><Post key={post.id} post={post}/>)
        }
      </div>
  );
};

export {Posts};