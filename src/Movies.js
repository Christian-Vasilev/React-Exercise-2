import React, { Component } from 'react';
import User from "./Users";

class Movies extends Component {
    render() {
                const newValues = Object.values(this.props.movies).filter((movie) => {
                    return movie.id == this.props.profile.favoriteMovieID
                });

                return newValues
        // <div>
        //

        //     </div>

    }
}

export default Movies;