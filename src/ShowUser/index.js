import React, { Component } from 'react';
import FavMovies from './FavMovies';
import OwnedMovies from './OwnedMovies';
import WatchList from './WatchList'
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
		const user = await fetch('http://localhost:9000/user', {
			credentials:'include'
		});
		console.log(user);
		const userParsedJSON = await user.json();
		console.log(userParsedJSON);
		this.setState({
				name: userParsedJSON.name,
				username: userParsedJSON.username,
				watchList: userParsedJSON.watchList,
				favMovies: userParsedJSON.favMovies,
				ownedMovies: userParsedJSON.ownedMovies
			})
		return userParsedJSON
	}
	componentDidMount(){
		this.getUser()
	}
	render() {
		return(
			<Grid textAlign="center">
				<div class="movie-container">
					<Container >
					<Grid textAlign="center">
							<Card.Content>
						<Header as="h1">Hey {this.props.username}!</Header>
						<img src='https://react.semantic-ui.com/images/avatar/small/matthew.png' class='ui-image' />
							</Card.Content>
						<Card>
							<Card.Header>
								Watch List!
							</Card.Header>

							<Card.Content>
							This is where the users watch list is going to go
							</Card.Content>

								<WatchList watchList={this.state.watchList}/>
						</Card>	

						<Card>
							<Card.Header>
								Fav Movies!
							</Card.Header>

							<Card.Content>
							This is where the users fav movies list is going to go
							</Card.Content>
								<FavMovies favMovies={this.state.favMovies}/>
						</Card>

						<Card>
							<Card.Header>
								Owned Movies
							</Card.Header>
							<Card.Content>
							This is where the users owned movie list is going to go
							</Card.Content>
								<OwnedMovies ownedMovies={this.state.ownedMovies}/>
						</Card>

						<Card>				
							<Card.Header>
								<MovieContainer />
							<br/>
							</Card.Header>
						</Card>
					</Grid>
					</Container>
				</div>
			</Grid>
		)
	}
}

export default ShowUser;