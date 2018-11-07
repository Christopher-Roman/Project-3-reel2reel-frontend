import React, { Component } from 'react';
import { Search, Button, Form, Input } from 'semantic-ui-react';


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
        	<div class="movie-info">

		            <Form onSubmit={this.searchMovie}><br/>Find a Movie <br /><br />
						<Input type="text" name="search" value={this.state.search} onChange={this.handleChange} /> <br /><br />
					<Button color="green">search</Button>
					</Form>
			</div>
        )
    }
}
export default MovieContainer;
