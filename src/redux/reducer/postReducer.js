import {GET_ALL_POSTS} from "../actions/actions";

const postReducer =(state={posts:[],post:null}, action)=>{

  switch (action.type){
    case GET_ALL_POSTS:
      return {
        ...state, posts:action.payload
      };
  }

  return state
}

export {
  postReducer
}