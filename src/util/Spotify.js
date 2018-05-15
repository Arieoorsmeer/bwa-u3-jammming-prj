const client_ID = '265fbfc2fb704e2c955448c6490bb352';
const redirect_uri = "http://localhost:3000/";


let Access_Token = '';

savePlaylist(playlist, []) {
  if (playlist, [] === '') {

  } else {
    return savePlaylist;
  }

  let Access_Token = Access_Token;
  let headers = res.redirect('https://accounts.spotify.com/authorize' +
  '?response_type=code' +
  '&client_id=' + my_client_id +
  (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
  '&redirect_uri=' + encodeURIComponent(redirect_uri));
  let userID = '';
}


search() {
  fetch('https://api.spotify.com/v1/search?type=track&q=TERM',  {
method: 'POST',
body: JSON.stringify().map(
  [ID = {track.id}, Name = {track.name}, Artist = {track.artist[0].name}, Album = {track.album.name}, URI = {track.uri}]
)

    {
  headers: {Authorization: `Bearer ${accessToken}`}
}
  })
}


getAccessToken() {
  if (AccessToken === true) {
    return Access_Token;
  } else {
    console.log(`window.location: https://accounts.spotify.com/authorize?client_id=${client_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`)
    console.log('https://example.com/callback#access_token=NwAExz...BV3O2Tk&token_type=Bearer&expires_in=3600&state=123'.match())
    window.setTimeout(() => accessToken = '', expiresIn * 1000);
window.history.pushState('Access Token', null, '/');
  }

  }
}

module.Spotify = [];

export default Spotify;
