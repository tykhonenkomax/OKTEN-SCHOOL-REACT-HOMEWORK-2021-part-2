import {combineReducers} from "redux";

import {userReducer, postReducer, commentReducer} from "../reducer";

let reducer = combineReducers({
  userReducer,
  postReducer,
  commentReducer
})

export {
  reducer
}