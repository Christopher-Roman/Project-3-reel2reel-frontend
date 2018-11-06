import React, { Component } from 'react';
import FavMovies from './FavMovies';
import OwnedMovies from '../OwnedMovies';
import WatchList from '../WatchList'
import MovieContainer from '../MovieContainer';
import { Grid, Card, Container, Header  } from 'semantic-ui-react';

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
		<div class="movie-container">
			<Container>
				<Card.Content>

					<Header as="h1">Hey {this.props.username}!</Header>
			  <img src='https://react.semantic-ui.com/images/avatar/small/matthew.png' class='ui-image' />
			  	{/* this is a place holder for the users image if they so choose to put one*/}


				<Card.Header>

					Watch List!
				<Card.Content>
				This is where the users watch list is going to go
				</Card.Content>
					<WatchList watchList={this.state.watchList}/>
				</Card.Header>
				<br/>
				<Card.Header>
				
					Fav Movies!
				<Card.Content>
				This is where the users fav movies list is going to go
				</Card.Content>
					<FavMovies favMovies={this.state.favMovies}/>
				</Card.Header>
				<br/>
				<Card.Header>
				
					Owned Movies
				<Card.Content>
				This is where the users owned movie list is going to go
				</Card.Content>

					<OwnedMovies ownedMovies={this.state.ownedMovies}/>

				</Card.Header>
				<br/>
				
				<Card.Header>
				
					<MovieContainer />
				
				</Card.Header>
				<br/>

				</Card.Content>
			
			</Container>
		</div>
		)
	}
}

export default ShowUser;