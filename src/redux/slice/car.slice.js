import {createSlice} from "@reduxjs/toolkit";
// import {createAsyncThunk} from "@reduxjs/toolkit/src/createAsyncThunk";
// import {carServices} from "../../services";


let initialState = {
  cars: [],
  currentCar: null,
  loading: false,
  error: null
};

// const getAll = createAsyncThunk(
//     'carSlice/getAll',
//     async (_, {rejectWithValue}) => {
//       try {
//         const {data} = await carServices.getAll();
//         return data
//       } catch (e) {
//         return rejectWithValue(e.response.data)
//       }
//     }
// );

const carSlice = createSlice({
  name: "carSlice",
  initialState,
  reducers: {
    getAll: (state, action) => {
      state.cars = action.payload
    }
  },
  extraReducers: {}
});

const {reducer: carReducer, actions: {getAll}} = carSlice;

const carAction = {
  getAll
}

export {
  carReducer,
  carAction
}