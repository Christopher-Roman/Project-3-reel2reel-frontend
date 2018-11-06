import ShowUser from './ShowUser'

const FavMovies = (props) => {
	const movies = props.favMovies.map((movie, i) => {
		return(
			<li key={i}>
				Title: {movie.title}
			</li>
		)
	})
}