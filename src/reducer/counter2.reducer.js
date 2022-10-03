import {useReducer} from "react";

import {DEC, INC, RES, SET} from "./count.actions";

const reducer = (state, action) => {

  switch (action.type) {
    case INC:
      return {count2: state.count2 + 1}
    case DEC:
      return {count2: state.count2 + 1}
    case RES:
      return {count2: state.count2 = 0}
    case SET:
      return {count2: action.payload = 20}
  }
}

const useCounter2Reducer = () => useReducer(reducer, {count2: 0})

export {
  useCounter2Reducer
}