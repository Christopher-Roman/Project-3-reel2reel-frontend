import React, { Component } from 'react';
import { Grid, Search, Button, Form } from 'semantic-ui-react';


class MovieContainer extends Component {
	constructor(){
		super();

		this.state = {
			search: ''
		}
	}
	searchMovie = async (e) => {
		e.preventDefault();

		// fetch call to your backend localhost:5000?movie=terminator
		const searchResult = await fetch('http://localhost:9000/movie/search?searchTerm=' + this.state.search)
		const foundMovie = await searchResult.json();
		console.log('here is foundMovie');
		console.log(foundMovie);
		// return searchResult;
	}
	handleChange = (e) => {
		this.setState({
			search: e.currentTarget.value
		})
	}
    render(){

        return(
        	<Grid columns={1} divided textAlign='center' style={{ height: '100%' }} stackable>
	            <Form onSubmit={this.searchMovie}><br/>Find a Movie <br /><br />
					<Search type="text" name="search" value={this.state.search} onChange={this.handleChange} /> <br />
				<Button color="green">search</Button>
				</Form>
			</Grid>
        )
    }
}
export default MovieContainer;
