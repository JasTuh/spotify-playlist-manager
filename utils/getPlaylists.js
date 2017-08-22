import 'isomorphic-fetch';

export default function getPlaylists(accessToken, offset) {
  var urlOffset = offset;
  if (!urlOffset){
    urlOffset = 0;
  }
  return new Promise((fulfill, reject) => {
    const url = `https://api.spotify.com/v1/me/playlists?limit=50&offset=${urlOffset}`;
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => response.json())
      .then((JSON) => {
        if (JSON.total > 50 && !offset) {
          var current = 50;
          const otherPlaylists = [];
          while (current < JSON.total) {
            otherPlaylists.push(getPlaylists(accessToken, current));
            current += 50;
          }
          Promise.all(otherPlaylists).then((playlists) => {
            let jsonList = JSON.items;
            playlists.forEach((playlist) => {
              jsonList = jsonList.concat(playlist);
            });
            fulfill(jsonList);
          });
        } else { fulfill(JSON.items); }
      });
  });
}
