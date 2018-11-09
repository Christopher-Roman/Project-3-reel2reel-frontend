
import React from 'react';
import ShowUser from '../ShowUser'

const FavMovies = (props) => {
		const favMovies = props.favMovies.map((movie, i) => {
			return(
				<li key={i}>
					Title: {movie.title}
					<br/>
					<button onClick={props.deleteFavMovie.bind(null, movie.movieId)}> Delete Movie</button>
				</li>
			)
		})
		return(
			<ul>
			{favMovies}
			</ul>

		)
}

export default FavMovies;