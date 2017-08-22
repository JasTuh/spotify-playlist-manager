

const body = require('body-parser');
const co = require('co');
const express = require('express');
const next = require('next');
const querystring = require('querystring');
const keys = require('./keys.json');
const request = require('request');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = 3000;


co(function* () {
  yield app.prepare();

  const server = express();
  server.use(body.json());
  server.get('/login', (req, res) => {
    const scope = 'playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private'
    res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: keys.client_id,
      scope,
      redirect_uri: 'http://localhost:3000/handleLogin',
    }));
  });
  server.get('/handleLogin', (req, res) => {

    const code = req.query.code;
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code,
        redirect_uri: 'http://localhost:3000/handleLogin',
        grant_type: 'authorization_code',
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(keys.client_id + ':' + keys.client_secret).toString('base64'))
      },
      json: true,
    };
    request.post(authOptions, (error, response, data) => {
      const accessToken = data.access_token;
      const refreshToken = data.refresh_token;
      // we can also pass the token to the browser to make requests from there
      res.redirect('/userLoggedIn?' +
        querystring.stringify({
          accessToken,
        }));
    });
  });
  server.get('*', (req, res) => handle(req, res));
  server.listen(PORT);
  console.log(`Listening on ${PORT}`);
});
