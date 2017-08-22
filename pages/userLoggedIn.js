import React, { Component } from 'react';
import keys from '../keys.json';
import 'isomorphic-fetch';

function getPlaylists(accessToken) {
  return new Promise((fulfill, reject) => { 
    const url = 'https://api.spotify.com/v1/me/playlists';
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => response.json())
      .then(JSON => fulfill(JSON));
  });
}
export default class UserLoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
    }
  }
  componentDidMount() {
    getPlaylists(this.props.url.query.accessToken).then(res => {
      this.setState({
        playlists: res.items, 
      })
    });
  }
  render() {
    return (
      <div>
        {this.state.playlists.map(playlist => 
          <p> {playlist.name} </p>  
        )}
      </div>
    ); 
  }
}
