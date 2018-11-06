import React, { Component } from 'react';
import MovieContainer from '../MovieContainer';
import { Grid, Label, Row, Item } from 'semantic-ui-react';

class User extends Component {
	render() {
		return(
			<Grid style={{ height: '100%' }} verticalAlign='middle' stackable>
				<Grid.Column>

					<h1>Hello, {this.props.username}!</h1>


				<Item>
				
					<Label>Watch List!</Label>
				
				</Item>
				
				<Item>
				
					<Label>Fav Movies!</Label>
				
				</Item>
				
				<Item>
				
					<Label>Owned Movies</Label>
				
				</Item>
				
				<Item>
				
					<MovieContainer />
				
				</Item>


				</Grid.Column>
			
			</Grid>

		)
	}
}

export default User;