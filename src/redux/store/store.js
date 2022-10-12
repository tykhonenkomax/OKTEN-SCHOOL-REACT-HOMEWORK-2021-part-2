import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {carReducer} from "../slice/car.slice";

const rootReducer = combineReducers({
  carReducer
});

const setupStore = () => configureStore({
  reducer: rootReducer
});

export {
  setupStore
}

