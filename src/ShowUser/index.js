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
		const user = await fetch('http://localhost:9000/user?');
		console.log(user);
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
		<Container >
			<Card>
				<Card.Content>

					<Header as="h1">Hello, {this.props.username}!</Header>


				<Card.Header>
				
					Watch List!
					<WatchList watchList={this.state.watchList}/>
				</Card.Header>
				<br/>
				<Card.Header>
				
					Fav Movies!
					<FavMovies favMovies={this.state.favMovies}/>
				</Card.Header>
				<br/>
				<Card.Header>
				
					Owned Movies
					<OwnedMovies ownedMovies={this.state.ownedMovies}/>
				</Card.Header>
				<br/>
				
				<Card.Header>
				
					<MovieContainer />
				
				</Card.Header>
				<br/>

				</Card.Content>
			
			</Card>
		</Container>
		)
	}
}

export default ShowUser;