import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//connect components to the store:
import { connect } from 'react-redux'

import { updateUser } from './actions/user-actions'

class App extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }  
}
//connect can receive 3 props:
//mapStateToProps which receives the state of the store

//mapActionsToProps allows us to dispatch actions easily
   //  so we don't have to use dispatch in the components themselves.
   // we can call functions that will automatically dispatch actions to store.

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
})

const mapActionsToProps = {
  onUpdateUser: updateUser
}
  

export default connect(mapStateToProps, mapActionsToProps)(App);
