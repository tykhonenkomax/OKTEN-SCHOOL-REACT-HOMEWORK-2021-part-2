import {combineReducers} from "redux";
import {carReducer} from "../slice/car.slice";

const rootReducer = combineReducers({
 carReducer
})

export {
  rootReducer
}