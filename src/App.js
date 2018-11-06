import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './Login'
import ShowUser from './ShowUser'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.state.logged ? <ShowUser handleLogin={this.handleLogin} username={this.state.username}/> : <Login handleLogin={this.handleLogin} />}
      </div>
    );
  }
}

export default App;
