import React, { Component } from 'react';
import 'isomorphic-fetch';
import getPlaylists from '../utils/getPlaylists.js';

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
