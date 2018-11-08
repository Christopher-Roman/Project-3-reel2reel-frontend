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
		const searchResult = await fetch(process.env.SERVER +'/movie/search?searchTerm=' + this.state.search)
		const foundMovie = await searchResult.json();
		this.setState({
			searchedMovie: {
				title: foundMovie.results[0].title,
				release_date: foundMovie.results[0].release_date,
				id: foundMovie.results[0].id,
				poster_400x570: foundMovie.results[0].poster_400x570				
			},
			showSearchModal: true

			
		})
		console.log('here is foundMovie');
		
		// return searchResult;
	}
	handleChange = (e) => {
		this.setState({
			search: e.currentTarget.value
		})
	}
	closeAndAddToWatchList = async (e) => {
		e.preventDefault();
		const requestBody = {
			title: this.state.searchedMovie.title,
			releaseDate: this.state.searchedMovie.release_date,
			movieId: this.state.searchedMovie.id,
			img: this.state.searchedMovie.poster_400x570
		}
		try {
			const url = process.env.SERVER +'/movie/watchList/' + this.state.searchedMovie.id
			console.log("HERE IS THE URL YOU ARE TRYING TO ADD WATCHLIST WITH ", url);
			const addToWatchList = await fetch(url, {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(requestBody),
		        headers: {
		          'Content-Type': 'application/json'
		        }
			})
			const addToWatchListParsed = await addToWatchList.json();
			console.log(addToWatchListParsed);
			this.setState({
				showSearchModal: false,
			})
			this.props.getUser()
		} catch(err){
			console.error(err);
		}
	}
	closeAndAddToFavMovies = async (e) => {
		e.preventDefault();
		const requestBody = {
			title: this.state.searchedMovie.title,
			releaseDate: this.state.searchedMovie.release_date,
			movieId: this.state.searchedMovie.id,
			img: this.state.searchedMovie.poster_400x570
		}
		try {
			const url = process.env.SERVER +'/movie/favMovies/' + this.state.searchedMovie.id
			console.log("HERE IS THE URL YOU ARE TRYING TO ADD WATCHLIST WITH ", url);
			const addToFavMovies = await fetch(url, {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(requestBody),
		        headers: {
		          'Content-Type': 'application/json'
		        }
			})
			const addToFavMoviesParsed = await addToFavMovies.json();
			console.log(addToFavMoviesParsed);
			this.setState({
				showSearchModal: false,
			})
			this.props.getUser()
		} catch(err){
			console.error(err);
		}
		
	}
	closeAndAddToOwnedMovies = async (e) => {
		e.preventDefault();
		const requestBody = {
			title: this.state.searchedMovie.title,
			releaseDate: this.state.searchedMovie.release_date,
			movieId: this.state.searchedMovie.id,
			img: this.state.searchedMovie.poster_400x570
		}
		try {
			const url = process.env.SERVER +'/movie/ownedMovies/' + this.state.searchedMovie.id
			console.log("HERE IS THE URL YOU ARE TRYING TO ADD WATCHLIST WITH ", url);
			const addToownedMovies = await fetch(url, {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(requestBody),
		        headers: {
		          'Content-Type': 'application/json'
		        }
			})
			const addToownedMoviesParsed = await addToownedMovies.json();
			console.log(addToownedMoviesParsed);
			this.setState({
				showSearchModal: false,
			})
			this.props.getUser()
		} catch(err){
			console.error(err);
		}
	}
	openModal = (moviesSearched) => {
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
						{
							this.state.showSearchModal
							?
							<ShowMovie open={this.state.showMovieModal} searchedMovie={this.state.searchedMovie} closeAndAddToWatchList={this.closeAndAddToWatchList} closeAndAddToFavMovies={this.closeAndAddToFavMovies} closeAndAddToOwnedMovies={this.closeAndAddToOwnedMovies}/>
							:
							null
						}
					</Form>
				</Grid>
			</div>
        )
    }
}
export default MovieContainer;
