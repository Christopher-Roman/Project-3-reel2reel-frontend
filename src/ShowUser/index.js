import React, { Component } from 'react';
import MovieContainer from '../MovieContainer';
import { Grid, Card, Container, Header  } from 'semantic-ui-react';

class User extends Component {
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
				</Card.Header>
				<br/>
				<Card.Header>
				
					Fav Movies!
				<Card.Content>
				This is where the users fav movies list is going to go
				</Card.Content>
				</Card.Header>
				<br/>
				<Card.Header>
				
					Owned Movies
				<Card.Content>
				This is where the users owned movie list is going to go
				</Card.Content>
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

export default User;