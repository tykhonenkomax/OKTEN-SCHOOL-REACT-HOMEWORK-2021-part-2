import {useReducer} from "react";

import {DEC, INC, RES, SET} from "./count.actions";

const reducer = (state, action) => {

  switch (action.type) {
    case INC:
      return {count1: state.count1 + 1}
    case DEC:
      return {count1: state.count1 + 1}
    case RES:
      return {count1: state.count1 = 0}
    case SET:
      return {count1: action.payload = 10}
  }
}

const useCounter1Reducer = ()=>useReducer(reducer, {count1:0})

export {
  useCounter1Reducer
}