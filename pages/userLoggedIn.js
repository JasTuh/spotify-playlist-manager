import React, { Component } from 'react';
import 'isomorphic-fetch';
import getPlaylists from '../utils/getPlaylists';
import getTracksOfPlaylist from '../utils/getTracksOfPlaylist';

export default class UserLoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
    };
  }
  componentDidMount() {
    getPlaylists(this.props.url.query.accessToken).then((res) => {
      this.setState({
        playlists: res,
      });
    });
    getTracksOfPlaylist("https://api.spotify.com/v1/users/1212905325/playlists/45n9rUFRfk6w9q1w96z7Fh/tracks", this.props.url.query.accessToken).then(text => {
      console.log(text);
    });
  }
  render() {
    if (!this.state.playlists) {
      return (<div />);
    }
    return (
      <div>
        {this.state.playlists.map(playlist =>
          <p> {playlist.name} </p>,
        )}
      </div>
    );
  }
}
