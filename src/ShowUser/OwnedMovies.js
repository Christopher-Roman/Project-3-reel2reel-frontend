
import React from 'react';
import ShowUser from '../ShowUser'


const OwnedMovies = (props) => {
		const ownedMovies = props.ownedMovies.map((movie, i) => {
			return(
				<li key={i}>
					Title: {movie.title}
					<button onClick={props.deleteOwnedMovie.bind(null, movie.movieId)}> Delete Movie</button>
				</li>
			)
		})
		return(
			<ul>
			{ownedMovies}
			</ul>

		)
}

export default OwnedMovies;