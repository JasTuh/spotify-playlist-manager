import 'isomorphic-fetch';

function getNextBatch(link, accessToken) {
  return new Promise((resolve, reject) => {
    fetch(link, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then(response => response.json())
      .then(responseJSON => {
        if (responseJSON.next){
          getNextBatch(responseJSON.next, accessToken).then((nextTracks) => {
            var tracks = responseJSON.items;
            tracks = tracks.concat(nextTracks.items);
            const toReturn = responseJSON;
            toReturn.items = tracks;
            resolve(toReturn);
          });
        }
        else {
          resolve(responseJSON);
        }
      });
  });
}

export default function getPlaylists(accessToken) {
  return new Promise((resolve, reject) => {
    const url = 'https://api.spotify.com/v1/me/playlists?limit=50';
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => response.json())
      .then((responseJSON) => {
        if (responseJSON.next) {
          getNextBatch(responseJSON.next, accessToken).then((nextTracks) => {
            let tracks = responseJSON.items;
            tracks = tracks.concat(nextTracks.items);
            const toReturn = responseJSON;
            toReturn.items = tracks;
            resolve(toReturn.items);
          });
        } else {
          resolve(responseJSON.items);
        }
      });
  });
}
