import React, { Component } from 'react';
import Login from './Login'
import MovieContainer from './MovieContainer'
import './App.css';

class App extends Component {
  constructor() {
  	super();

  	this.state = {
  		logged: false,
  		username: ''
  	}
  }
  handleLogin = (username, isLoggedIn) => {
  	this.setState({
  		username: username,
  		logged: isLoggedIn
  	})
  }
  render() {
    return (
      <div className="App">
        {this.state.logged ? <MovieContainer handleLogin={this.handleLogin} username={this.state.username}/> : <Login handleLogin={this.handleLogin} />}
      </div>
    );
  }
}

export default App;
