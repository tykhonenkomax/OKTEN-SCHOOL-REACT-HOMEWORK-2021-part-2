import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentAxiosServices} from "../../services";

let initialState = {
  comment: [],
  currentComment: null,
  loading: false,
  error: null
};

const getAll = createAsyncThunk(
    'commentSlice/getAll',
    async (_,{rejectWithValue})=>{
      try {
        const {data} = await commentAxiosServices.getAll();
        return data
      }catch (e) {
        return rejectWithValue(e.response.data)
      }
    }
);

const commentSlice = createSlice({
  name: 'commentSlice',
  initialState,
  reducers: {
    // getAll: (state, action) => {
    //   state.comment = action.payload
    // },
    getCurrentComment: (state, action) => {
      state.currentComment = action.payload
    }
  }
});

const {reducer: commentReducer, actions: {getCurrentComment}} = commentSlice;

const commentAction = {
  getAll,
  getCurrentComment
}
export {
  commentReducer,
  commentAction
}