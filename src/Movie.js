import React, { Component } from 'react';
import LikedBy from './LikedBy';

class Movie extends Component {
  render() {
    return (
		<div>
			<h2 key={this.props.movie.id}>
				{this.props.movie.name}
			</h2>
			<LikedBy users={this.props.users} profiles={this.props.profiles} />
		</div>
    );
  }


}

export default Movie;
