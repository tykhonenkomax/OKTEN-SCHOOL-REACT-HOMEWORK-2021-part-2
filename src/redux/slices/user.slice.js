import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userAxiosServices} from "../../services";

let initialState = {
  users: [],
  currentUser: null,
  loader: false,
  error: null
};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
      try {
        const {data} = await userAxiosServices.getAll();
        return data
      } catch (e) {
        return rejectWithValue(e.response.data)
      }
    }
);

const getById = createAsyncThunk(
    'userSlice/getById',
    async ({id},{rejectWithValue})=>{
try {
const {data} = await  userAxiosServices.getById(id);
return data
}catch (e) {
return rejectWithValue(e.response.data)
}
    }
);

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    // getAll: (state, action) => {
    //   state.users = action.payload
    // },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    }
  },
  extraReducers: {
    [getAll.fulfilled]: (state, action) => {
      state.users = action.payload
    }
  }
});

const {reducer: userReducer, actions: {setCurrentUser}} = userSlice;

const userAction = {
  getAll,
  setCurrentUser
}

export {
  userReducer,
  userAction
}
