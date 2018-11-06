import React, { Component } from 'react';
import FavMovies from './FavMovies';
import OwnedMovies from './OwnedMovies';
import WatchList from './WatchList'
import MovieContainer from '../MovieContainer';

class ShowUser extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			name: '',
			watchList: [],
			favMovies: [],
			ownedMovies: []
		}
	}
	getUser = async () => {
		const user = await fetch('http://localhost:9000/user');
		const userParsedJSON = await user.json();
		return userParsedJSON
	}
	componentDidMount(){
		this.getUser().then((user) => {
			this.setState({
				username: user.data.username,
				name: user.data.name,
				watchList: user.data.watchList,
				favMovies: user.data.favMovies,
				ownedMovies: user.data.ownedMovies
			}).catch((err) => {
				console.log(err);
			})
		})
	}
	render() {
		return(
			<div>
				<h1>Hello, {this.props.username}!</h1>
				<div>
					<label>Watch List!</label>
					<WatchList watchList={this.state.watchList}/>
				</div><br /><br />
				<div>
					<label>Fav Movies!</label>
					<FavMovies favMovies={this.state.favMovies}/>
				</div><br /><br />
				<div>
					<label>Owned Movies</label>
					<OwnedMovies ownedMovies={this.state.ownedMovies}/>
				</div><br /><br />
				<div>
					<MovieContainer />
				</div>
			</div>
		)
	}
}

export default ShowUser;