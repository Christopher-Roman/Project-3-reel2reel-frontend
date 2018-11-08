import React, { Component } from 'react'
// import ShowUser from '../ShowUser'

class FavMovies extends Component {
	render() {
		const favMovies = this.props.favMovies.map((movie, i) => {
			return(
				<li key={i}>
					Title: {movie.title}
				</li>
			)
		})
		return(
			<ul>
			{favMovies}
			</ul>

		)
	}
}

export default FavMovies