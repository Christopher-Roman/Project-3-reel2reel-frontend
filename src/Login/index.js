import React, { Component } from 'react';

class Login extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			password: ''
		}
	}
	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}
	handleSubmit = async (e) => {
		e.preventDefault();

		const loginResponse = await fetch('http://localhost:9000/auth/login', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(this.state),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const parsedResponse = await loginResponse.json();
		if(parsedResponse.data === 'login successful') {
			console.log('Successful login');
			this.props.history.push('/movies');
		}		
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Username</label>
				<input type='text' name='username' onChange={this.handleChange} /><br />
				<label>Password</label>
				<input type='password' name='password' onChange={this.handleChange} /><br />
				<button type='Submit'>Login</button>
			</form>
		)
	}
}

export default Login;