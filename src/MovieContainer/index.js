import React, { Component } from 'react';
import ShowMovie from '../ShowMovie'
import { Search, Button, Form, Input, Grid } from 'semantic-ui-react';


class MovieContainer extends Component {
	constructor(){
		super();

		this.state = {
			search: '',
			showMovieModal: false
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
			search: e.currentTarget.value,
		})
	}
	openModal = (moviesSearched) => {
			console.log(moviesSearched, 'moviesSearched-------------')

			this.setState({
			showMovieModal: true,
				moviesSearched: {
					...moviesSearched
				}
			})
	}
    render(){
        return(
        	<div className="movie-info">
	        	<Grid columns={1} divided textAlign='center' style={{ height: '100%' }} stackable>
		            <Form onSubmit={this.searchMovie}><br/>Find a Movie <br /><br />
						<input type="text" name="search" value={this.state.search} onChange={this.handleChange} /> <br /><br />
					
					<Button color="green" onClick={this.openModal}>search</Button>
					<ShowMovie open={this.state.showMovieModal}/>
					</Form>
				</Grid>
			</div>
        )
    }
}
export default MovieContainer;
