import React from 'react'
import MovieContainer from '../MovieContainer'
import { Modal, Button, Header, Form, Label} from 'semantic-ui-react';

const ShowMovie = (props) => {
	console.log(props.searchedMovie);
	return(
		<Modal open = {props.open}>
			<Header>Show Movie</Header>
			<Modal.Content>
				<Form>
					<img src={props.searchedMovie.poster_400x570} /> <br /><br />
					<Label>
						Movie Title: {props.searchedMovie.title}
					</Label> <br /><br />
					<Label>
						Movie Release Date: {props.searchedMovie.release_date}
					</Label>
					<br />
					<br />
					<Modal.Actions>
						<Button type="submit">Add Movie to FavList
						</Button>
						<Button type="submit">Add Movie to OwnedList
						</Button>
						<Button type="submit">Add Movie to WatchList
						</Button>
					</Modal.Actions>
				</Form>
			</Modal.Content>
		</Modal>
	)
}

export default ShowMovie;