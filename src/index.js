import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux'

//provider gives app access to store
import { Provider } from 'react-redux'
import productsReducer from './reducers/products-reducer'
import userReducer from './reducers/user-reducer'





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


//The Provider gives the App access to the store.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
