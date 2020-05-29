import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux'


const productsReducer = ( state = [], action ) => {
   return state
}

const userReducer = ( state = '', { type, payload} ) => {
  switch ( type ) {
    case 'updateUser':
      return payload
  }
  return state
}

//combine productsReducer and userReducer:
const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
})

//create store and prepopulate state:
const store = createStore( 
    allReducers, {
      products: [{ name: 'iPhone' }],
      user: 'Michael'
    },
    window.devToolsExtension && 
      window.devToolsExtension()
  )




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
