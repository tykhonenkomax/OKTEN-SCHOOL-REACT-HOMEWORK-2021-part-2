import {GET_ALL_USERS} from "../actions/actions";

const userReducer = (state = {users: [], user: null}, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload
      };
  }

  return state
}

export {
  userReducer
}