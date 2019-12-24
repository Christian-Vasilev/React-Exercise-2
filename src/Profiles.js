import React, {Component} from 'react';
import Movies from "./Movies";

class Profiles extends Component {
    render() {
        return (
            Object.values(this.props.movies).map(movie => {
                const profile = this.props.profiles.filter(profile => profile.favoriteMovieID == movie.id);
                const users = Object.values(this.props.users);
                const favoriteUsers = profile.map(items => users.find((user) => user.id == items.userID));
                console.log(users, favoriteUsers);

                return (<div className='centered' key={movie.id}>
                    <h2>{movie.name}</h2>
                    <p>Liked by</p>
                    <ul>
                        {favoriteUsers.map((user = {}) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </div>)
            })
        );
    }
}

export default Profiles;