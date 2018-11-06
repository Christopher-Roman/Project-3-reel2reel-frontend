import React, { Component } from 'react';
import MovieContainer from '../MovieContainer';
import { Grid, Card, Container, Header  } from 'semantic-ui-react';

class User extends Component {
	render() {
		return(
		<Container >
			<Card>
				<Card.Content>

					<Header as="h1">Hello, {this.props.username}!</Header>


				<Card.Header>
				
					Watch List!
				
				</Card.Header>
				<br/>
				<Card.Header>
				
					Fav Movies!
				
				</Card.Header>
				<br/>
				<Card.Header>
				
					Owned Movies
				
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

export default User;