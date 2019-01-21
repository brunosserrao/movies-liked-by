import React, { Component } from 'react';

class LikedBy extends Component {
  render() {
	if(this.props.profiles.length){
		return (
			<ul>
				{this.props.profiles.map(profile => (
					<li key={profile.id}>
						{this.props.users[profile.userID].name}
					</li>
				))}
			</ul>
		);
	} else {
		return (
			<p>Nobody likes this movie</p>
		)
	}
  }
}

export default LikedBy;
