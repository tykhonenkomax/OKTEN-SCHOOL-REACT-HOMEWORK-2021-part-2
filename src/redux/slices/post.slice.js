import {createSlice} from "@reduxjs/toolkit";

let initialState = {
  posts: [],
  currentPost: null,
  loader: false,
  error: null
};
const postSlice = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {
    getAll: (state, action) => {
      state.posts = action.payload
    },
    getCurrentPost:(state, action)=>{
      state.currentPost=action.payload
    }
  }
});

const {reducer:postReducer,actions:{getAll,getCurrentPost}} =postSlice;

const postAction={
  getAll,
  getCurrentPost
}

export {
    postReducer,
    postAction
}