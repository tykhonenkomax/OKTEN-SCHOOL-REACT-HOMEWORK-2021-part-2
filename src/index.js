import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";

const initialUserReducerState = {users: [], user: null}

const userReducer = (state = initialUserReducerState, action) => {
  switch (action.type) {

    case 'GET-USERS':
      return {
        ...state,
        users: action.payload
      };

    case 'CHOOSE_USER':
      let id = action.payload
      let user = state.users.find(value => value.id === id)
      return {
        ...state,
        user: user
      }

    default:
      return state;

  }}


  const initialPostReducerState = {posts: [], post: null}

  const postReducer = (state = initialPostReducerState, action) => {
    switch (action.type) {

      case 'GET-POSTS':
        return {
          ...state,
          users: action.payload
        };

      case 'CHOOSE_POST':
        let id = action.payload
        let post = state.posts.find(value => value.id === id)
        return {
          ...state,
          post: post
        }

      default:
        return state;

    }}

    const initialCommentReducerState = {comments: [], comment: null}

    const commentReducer = (state = initialCommentReducerState, action) => {
      switch (action.type) {

        case 'GET-COMMENTS':
          return {
            ...state,
            comments: action.payload
          };

        case 'CHOOSE_COMMENT':
          let id = action.payload
          let comment = state.comments.find(value => value.id === id)
          return {
            ...state,
            comment: comment
          }

        default:
          return state;

      }}

      const reducers = combineReducers({
        userReducer,
        postReducer,
        commentReducer
      });
      
  let store = createStore(reducers);

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
      <Provider store={store}>
        <App/>
      </Provider>
  );

