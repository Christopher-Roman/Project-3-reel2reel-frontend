import React from 'react'
import { Modal, Button, Header, Form, Label} from 'semantic-ui-react';

const ShowMovie = (props) => {
	return(
		<Modal open = {props.open}>
			<Header>Show Movie</Header>
			<Modal.Content>
				<Form>
					<Label>
						Movie Title
					</Label>
					<Label>
						Movie Description
					</Label>
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