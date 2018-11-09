import React, { Component } from 'react';
import FavMovies from './FavMovies';
import OwnedMovies from './OwnedMovies';
import WatchList from './WatchList'
import ShowMovie from '../ShowMovie'
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
		const user = await fetch(process.env.REACT_APP_SERVER + '/user', {
			credentials:'include'
		});
		const userParsedJSON = await user.json();
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
	deleteWatchListMovie = async (id) => {
		const deleteMovieResponse = await fetch(process.env.REACT_APP_SERVER + '/movie/deleteWatchList/' + id, { 
			method: 'DELETE', 
			credentials: 'include'
		});
		const deleteMovieParsed = deleteMovieResponse.json();
		this.getUser()
	}
	deleteOwnedMovie = async (id) => {
		const deleteMovieResponse = await fetch(process.env.REACT_APP_SERVER + '/movie/deleteOwnedMovie/' + id, { 
			method: 'DELETE', 
			credentials: 'include'
		});
		const deleteMovieParsed = deleteMovieResponse.json();
		this.getUser()
	}
	deleteFavMovie = async (id) => {
		const deleteMovieResponse = await fetch(process.env.REACT_APP_SERVER + '/movie/deleteFavMovie/' + id, { 
			method: 'DELETE', 
			credentials: 'include'
		});
		const deleteMovieParsed = deleteMovieResponse.json();
		this.getUser()
	}
	render() {
		return(
			<Grid textAlign="center">
				<div className="movie-container">
					<Container >

						<Grid textAlign="center">
							<Card.Content>
								<Header as="h1">Hey {this.props.username}!</Header>
								<img src='https://react.semantic-ui.com/images/avatar/small/matthew.png' className='ui-image' />
							</Card.Content>
							<Card>
								<Card.Header>
									Watch List!
								</Card.Header>
								<Card.Content>
								</Card.Content>
								<WatchList watchList={this.state.watchList} deleteWatchListMovie={this.deleteWatchListMovie}/>
							</Card>	
							<Card>
								<Card.Header>
									Fav Movies!
								</Card.Header>
								<Card.Content>
								</Card.Content>
								<FavMovies favMovies={this.state.favMovies} deleteFavMovie={this.deleteFavMovie} />
							</Card>
							<Card>
								<Card.Header>
									Owned Movies
								</Card.Header>
								<Card.Content>
								</Card.Content>
								<OwnedMovies ownedMovies={this.state.ownedMovies} deleteOwnedMovie={this.deleteOwnedMovie} />
							</Card>
							<Card>				
								<Card.Header>
									<MovieContainer getUser={this.getUser} />
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