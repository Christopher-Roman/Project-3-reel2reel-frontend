import React, { Component } from 'react';
import ShowMovie from '../ShowMovie'
import { Search, Button, Form, Input, Grid } from 'semantic-ui-react';


class MovieContainer extends Component {
	constructor(){
		super();

		this.state = {
			search: '',
			searchedMovie: {
				title: '',
				release_date: '',
				id: '',
				poster_400x570: ''
			},
			showSearchModal: false
		}
	}
	searchMovie = async (e) => {
		e.preventDefault();

		// fetch call to your backend localhost:5000?movie=terminator
		const searchResult = await fetch('http://localhost:9000/movie/search?searchTerm=' + this.state.search)
		const foundMovie = await searchResult.json();
		this.setState({
			searchedMovie: {
				...foundMovie.results[0]
			}
		})
		console.log('here is foundMovie');
		console.log(foundMovie); // id is in here
		// return searchResult;
	}
	handleChange = (e) => {
		this.setState({
			search: e.currentTarget.value
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
    	console.log(this.state.searchedMovie);
        return(

        	<div className="movie-info">
	        	<Grid columns={1} divided textAlign='center' style={{ height: '100%' }} stackable>
		            <Form onSubmit={this.searchMovie}><br/>Find a Movie <br /><br />
						<Input type="text" name="search" value={this.state.search} onChange={this.handleChange} /> <br /><br />
						<Button color="green" onClick={this.openModal}>search</Button>
						<ShowMovie open={this.state.showMovieModal} searchedMovie={this.state.searchedMovie}/>
					</Form>
				</Grid>
			</div>
        )
    }
}
export default MovieContainer;
