import React from 'react'
// import MovieContainer from '../MovieContainer'
import { Modal, Button, Header, Form, Label} from 'semantic-ui-react';

const ShowMovie = (props) => {
	console.log(props.searchedMovie);
	return(
		<Modal open = {props.open}>
			<Header>Show Movie</Header>
			<Modal.Content class = "mainModal">
			        <Label as='a' color='#596e79' font-size="20pt" ribbon>
						{props.searchedMovie.title}
        			</Label>
				<Form>
					<img src={props.searchedMovie.poster_400x570} alt=""/> <br /><br />
					<Label>
						Movie Title: {props.searchedMovie.title}
					</Label> <br /><br />
					<Label>
						Movie Release Date: {props.searchedMovie.release_date}
					</Label>
					<br />
					<br />
					<Modal.Actions>
						<Button type="submit" onClick={props.closeAndAddToFavMovies}>Add Movie to FavList
						</Button>
						<Button type="submit" onClick={props.closeAndAddToOwnedMovies}>Add Movie to OwnedList
						</Button>
						<Button type="submit" onClick={props.closeAndAddToWatchList}>Add Movie to WatchList
						</Button>
					</Modal.Actions>
				</Form>
			</Modal.Content>
		</Modal>
	)
}

export default ShowMovie;