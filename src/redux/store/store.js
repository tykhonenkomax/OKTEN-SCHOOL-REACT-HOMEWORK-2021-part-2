import {reducer} from "../index";
import {createStore} from "redux";

let store = createStore(reducer)

export {
  store
}