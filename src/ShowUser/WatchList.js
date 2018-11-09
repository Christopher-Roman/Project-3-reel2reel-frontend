import React from 'react';
import ShowUser from '../ShowUser'

const WatchList = (props) => {
		const watchList = props.watchList.map((movie, i) => {
			return(
				<li key={i}>
					Title: {movie.title}
					<button onClick={props.deleteWatchListMovie.bind(null, movie.movieId)}> Delete Movie</button>
				</li>
			)
		})
		return(
			<ul>
			{watchList}
			</ul>

		)
}

export default WatchList;