import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux'


const productsReducer = ( state = [], action ) => {
   return state
}

const userReducer = ( state = '', action ) => {
  return state
}

//combine productsReducer and userReducer:
const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
})


const store = createStore( reducer )

console.log( store.getState())


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
