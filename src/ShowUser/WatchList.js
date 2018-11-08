import React, { Component } from 'react'
// import ShowUser from '../ShowUser'

class WatchList extends Component {
	render() {
		const watchList = this.props.watchList.map((movie, i) => {
			return(
				<li key={i}>
					Title: {movie.title}
				</li>
			)
		})
		return(
			<ul>
			{watchList}
			</ul>

		)
	}
}

export default WatchList;