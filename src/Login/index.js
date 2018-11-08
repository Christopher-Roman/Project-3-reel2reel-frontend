import React, { Component } from 'react';
import { Form, Label, Button, Grid, Card} from 'semantic-ui-react';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            username: '',
            password: '',
            loginUsername: '',
            loginPassword: ''
            // todo: keep these for registration and add login variables too
        }
    }
    handleInput = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    handleRegisterSubmit = async (e) => {
        e.preventDefault();
        this.props.handleLogin(this.state.username, true)
        const registerResponse = await fetch(process.env.REACT_APP_SERVER + '/auth/register', {
            method: 'POST',
            credentials: 'include',
            // body: JSON.stringify(this.state),
            body: JSON.stringify({
                name: this.state.name,
                username: this.state.username,
                password: this.state.password
                // just put the fields that apply for registration
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const parsedResponse = await registerResponse.json();
        console.log(registerResponse);
    }
    handleLoginSubmit = async (e) => {
        e.preventDefault();
    	console.log(process.env.SERVER);
        const loginResponse = await fetch(process.env.REACT_APP_SERVER + '/auth/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                loginUsername: this.state.loginUsername,
                loginPassword: this.state.loginPassword
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const parsedResponse = await loginResponse.json();
        console.log(loginResponse);
        // make sure login is fine
        this.props.handleLogin(this.state.loginUsername, true)
    }
    render() {
        return (
            <Grid textAlign="center">
                <div className="login-form">
                    <Grid.Column style={{ maxWidth: 300 }} >
                        <Form onSubmit={this.handleRegisterSubmit}>
                            <Label color="teal">Name</Label>
                            <Form.Input fluid icon="user" size="large" type='text' name='name' onChange={this.handleInput} value={this.state.name} placeholder='name' verticalalign="middle"/><br />
                            <Label color="teal">Username</Label>
                            <Form.Input fluid icon="user" size="large" type='text' name='username' onChange={this.handleInput} value={this.state.username} placeholder='username' verticalalign="middle"/><br />
                            <Label color="teal">Password</Label>
                            <Form.Input fluid icon="lock"  size="large" type='password' name='password' onChange={this.handleInput} value={this.state.password} placeholder='password' /><br />
                            <Button color="green" type='Submit'>Register</Button>
                        </Form> <br/>
                        <Form onSubmit={this.handleLoginSubmit}>
                            <Label>Username</Label>
                            <Form.Input fluid icon="user" size="large" type='text' name='loginUsername' onChange={this.handleInput} value={this.state.loginUsername} placeholder='username' verticalalign="middle"/><br />
                            <Label>Password</Label>
                            <Form.Input fluid icon="lock"  size="large" type='password' name='loginPassword' onChange={this.handleInput} value={this.state.loginPassword} placeholder='password' /><br />
                            <Button color="green" type='Submit'>Login</Button>
                        </Form>                    
                    </Grid.Column>
                </div>
            </Grid>
        )
    }
}

export default Login;