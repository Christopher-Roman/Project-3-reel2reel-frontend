import React, { Component } from 'react';
import { Form, Label, Button} from 'semantic-ui-react';

class Login extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			password: ''
		}
	}
	handleInput = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}
	handleSubmit = async (e) => {
		e.preventDefault();
		this.props.handleLogin(this.state.username, true)

		// const loginResponse = await fetch('http://localhost:9000/auth/login', {
		// 	method: 'POST',
		// 	credentials: 'include',
		// 	body: JSON.stringify(this.state),
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	}
		// });
		// const parsedResponse = await loginResponse.json();
		// console.log(loginResponse);
		// if(parsedResponse.data === 'login successful') {
		// 	console.log('Successful login');
		// 	this.props.history.push('/movies');
		// }	

	}
	render() {
		return (
			
				<Form onSubmit={this.handleSubmit}>
					<Label>Username</Label>
					<Form.Input type='text' name='username' onChange={this.handleInput} value={this.state.username} placeholder='username' verticalalign="middle"/><br />
					<Label>Password</Label>
					<Form.Input type='password' name='password' onChange={this.handleInput} value={this.state.password} placeholder='password' /><br />
					<Button type='Submit'>Login</Button>
				</Form>
			
		)
	}
}

export default Login;