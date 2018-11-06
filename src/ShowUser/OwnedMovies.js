import React, { Component } from 'react'
import ShowUser from '../ShowUser'

class OwnedMovies extends Component {
	render() {
		const ownedMovies = this.state.ownedMovies.map((movie, i) => {
			return(
				<li key={i}>
					Title: {movie.title}
				</li>
			)
		})
		return(
			<ul>
			{ownedMovies}
			</ul>

		)
	}
}

export default OwnedMovies;