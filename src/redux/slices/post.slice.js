import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postAxiosServices} from "../../services";

let initialState = {
  posts: [],
  currentPost: null,
  loader: false,
  error: null
};

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_,{rejectWithValue})=>{
      try {
        const {data} = await postAxiosServices.getAll();
        return data
      }catch (e){
        return rejectWithValue(e.response.data)
      }
    }

);

const postSlice = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {
    // getAll: (state, action) => {
    //   state.posts = action.payload
    // },
    getCurrentPost: (state, action) => {
      state.currentPost = action.payload
    }
  },
  extraReducers:{
    [getAll.fulfilled]:(state,action)=>{
      state.posts=action.payload
    }

  }
});

const {reducer: postReducer, actions: {getCurrentPost}} = postSlice;

const postAction = {
  getAll,
  getCurrentPost
}

export {
  postReducer,
  postAction
}