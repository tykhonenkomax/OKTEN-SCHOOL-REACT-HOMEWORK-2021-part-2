import {createSlice} from "@reduxjs/toolkit";

let initialState = {
  comment: [],
  currentComment: null,
  loading: false,
  error: null

};
const commentSlice = createSlice({
  name: 'commentSlice',
  initialState,
  reducers: {
    getAll: (state, action) => {
      state.comment = action.payload
    }
  }
});

const {reducer: commentReducer, actions: {getAll}} = commentSlice;

const commentAction = {
  getAll
}
export {
  commentReducer,
  commentAction
}