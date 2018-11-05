import React, { Component } from 'react';


class MovieContainer extends Component {
	constructor(){
		super();

		this.state = {
			search: ''
		}
	}
	searchMovie = async (e) => {
		e.preventDefault();
		console.log("Hello world");
		console.log(e.currentTarget.value);


		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
		console.log(this.state);
		const searchResult = await fetch('http://api-public.guidebox.com/v2/search?api_key=7eec0384545005656d8702d02413111dbd7d6f1b&type=movie&field=title&query=' + this.state.search)
		
		// return searchResult;
	}
    render(){

        return(
        	<div>
	            <form onSubmit={this.searchMovie}>Search movie
					<input type="text" name="search"/>
				<button>search</button>
				</form>
			</div>
        )
    }
}
export default MovieContainer;
