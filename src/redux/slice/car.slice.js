import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carServices} from "../../services";


let initialState = {
  cars: [],
  carForUpdate: null,
  error: null,
  loading: false
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
      try {
        const {data} = await carServices.getAll();
        return data
      } catch (e) {
        return rejectWithValue(e.response.data)
      }
    }
);

const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({cars}, {rejectWithValue}) => {
      try {
        const {data} = await carServices.createCar(cars);
        return data
      } catch (e) {
        return rejectWithValue(e.response.data)
      }
    }
);

const getById = createAsyncThunk(
    'carSlice/getById',
    async ({id}, {rejectedWithValue}) => {
      try {
        const {data} = await carServices.getById(id);
        return data
      } catch (e) {
        return rejectedWithValue(e.response.data)
      }
    }
);

const updateCarById = createAsyncThunk(
    'carSlice/updateCarById',
    async ({id, cars}, {rejectedWithValue}) => {
      try {
        const {data} = await carServices.updateById(id, cars);
        return data
      } catch (e) {
        return rejectedWithValue(e.response.data)
      }
    }
);

const deleteCarById = createAsyncThunk(
    'carSlice/deleteCarById',
    async ({id}, {rejectedWithValue}) => {
      try {
        const {data} = await carServices.deleteCar(id);
        return data
      } catch (e) {
        return rejectedWithValue(e.response.data)
      }
    }
);


const carSlice = createSlice({
  name: "carSlice",
  initialState,
  reducers: {
    setUpdateCarById: (state, action) => {
      state.carForUpdate = action.payload
    }
  },
  extraReducers: {
    [getAll.fulfilled]: (state, action) => {
      state.cars = action.payload
      state.error = null
    },
    [getAll.pending]: (state, action) => {
      state.loading = true
    },
    [createCar.fulfilled]:(state,action)=>{
      state.cars.push(action.payload)
    }

  }
});


const {reducer: carReducer, actions: {setUpdateCarById}} = carSlice;

const carAction = {
  getAll,
  createCar,
  getById,
  updateCarById,
  deleteCarById,
  setUpdateCarById
}

export {
  carReducer,
  carAction,
}