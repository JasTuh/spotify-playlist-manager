import React from 'react';
import Page from '../layouts/main';
import Login from '../components/login';

export default () => (
  <Page>
    <div className="container">
      <div className="row">
        <div className="center-block text-center">
          <h1>
            Spotify Playlist Manager
          </h1>
        </div>
      </div>
      <div className="container">
        <div className="center-block text-center">
          <Login />
        </div>
      </div>
    </div>
  </Page>
);
