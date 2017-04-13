import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import manageRestaurants from './reducers/manageRestaurants';

import { comineReducers } from 'redux';

const rootReducer = combineReducers({
  books: booksReducer,
  authors: authorsReducer
});

export const store = createStore(rootReducer);

function booksReducer(state = [], action) {
  switch (action.type) {

     case "ADD_BOOK":
      return state.concat(action.book);

    case "REMOVE_BOOK":
      const idx = state.indexOf(action.id);
      return [ ...state.slice(0, idx), ...state.slice(idx + 1) ];

    default:
      return state;
  }
}

function authorsReducer(state = [], action) {
  switch (action.type) {

    case "ADD_AUTHOR":
      return state.concat(action.author);

    case "REMOVE_AUTHOR":
      const idx = state.indexOf(action.id);
      return [ ...state.slice(0, idx), ...state.slice(idx + 1) ];

    default:
      return state;
  }
}
