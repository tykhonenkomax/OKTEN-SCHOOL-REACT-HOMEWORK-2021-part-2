import {createSlice} from "@reduxjs/toolkit";

let initialState = {
  users: [],
  currentUser: null,
  loading: false,
  error: null
};

const userSlice = createSlice({
  name: userSlice,
  initialState,
  reducers:{
    getAll:(state, action)=>{
      state.users=action.payload
    }
  }
});
const {reducer:userReducer,actions:{getAll}}=userSlice;

const userAction={
  getAll
}

export {
  userReducer,
    userAction
}

