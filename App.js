import React, { Component } from 'react';
import './App.css';
import '../Components/Playlist';
import '../Components/SearchBar';
import '../Components/SearchResults';
import '../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props;
      this.state = {
        searchResults: [name, artist, album, id],
        playlistName: 'New Playlist',
        playlistTracks: []
       };
       this.removeTrack = this.removeTrack.bind(this);
       this.addTrack = this.addTrack.bind(this);
       this.updatePlaylistName = this.updatePlaylistName.bind(this);
       this.search = this.search.bind(this);
  }

Spotify.search() {
  console.log('')
}

Spotify.savePlaylist() {
let trackURIs = []
this.savePlaylist = this.savePlaylist.bind(this);

}

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  return playlistTracks ++;
}
return playlist;

this.addTrack = this.addTrack.bind(this);
  }

  removeTrack() {
if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  return playlistTracks --;
}
return playlist;

}

updatePlaylistName() {
  name: '',

}

  render() {

return (
    <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <!-- Add a SearchBar component -->
    <div className="App-playlist">
      <Playlist playlistName={this.state.playlistName} />
      <Playlist playlistTracks={this.state.playlistTracks} />
          </div>
  </div>
</div>
);

  }
}

export default App;
