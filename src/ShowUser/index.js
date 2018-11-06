import React, { Component } from 'react';
import MovieContainer from '../MovieContainer';

class User extends Component {
	render() {
		return(
			<div>
				<h1>Hello, {this.props.username}!</h1>
				<div>
					<label>Watch List!</label>
				</div><br /><br />
				<div>
					<label>Fav Movies!</label>
				</div><br /><br />
				<div>
					<label>Owned Movies</label>
				</div><br /><br />
				<div>
					<label>Search Movies!</label><br /><br />
					<MovieContainer />
				</div>



			</div>

		)
	}
}

export default User;