import {GET_ALL_COMMENTS} from "../actions/actions";

const commentReducer = (state = {comments: [], comment: null}, action) => {
  switch (state.type) {
    case GET_ALL_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
  }
  return state
}
export {
  commentReducer
}