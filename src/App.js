import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './Login'
import MovieContainer from './MovieContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <MovieContainer />
      </div>
    );
  }
}

export default App;
