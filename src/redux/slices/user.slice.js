import {createSlice} from "@reduxjs/toolkit";

let initialState = {
  users: [],
  currentUser: null,
  loader: false,
  error: null
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    getAll: (state, action) => {
      state.users = action.payload
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    }
  }
});

const {reducer: userReducer, actions: {getAll, setCurrentUser}} = userSlice;

const userAction = {
  getAll,
  setCurrentUser
}

export {
  userReducer,
  userAction
}
