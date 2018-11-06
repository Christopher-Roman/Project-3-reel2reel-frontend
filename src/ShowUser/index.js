import React, { Component } from 'react';
import MovieContainer from '../MovieContainer';
// import FavMovies from './FavMovies';
// import WatchList from './WatchList';
// import OwnedMovies from './OwnedMovies'

class ShowUser extends Component {
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
					<MovieContainer />
				</div>
			</div>
		)
	}
}

export default ShowUser;