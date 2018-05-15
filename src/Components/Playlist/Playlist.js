import './Playlist.css';

class Playlist extends React.Component {
constructor() {
  super(props);
  this.handleNameChange = this.handleNameChange.bind(this);
}

handleNameChange() {

}

  render() {
    return (
      <div className="Playlist">
  <input defaultvalue={'New Playlist'}/>
  <a className="Playlist-save">onClick={this.props.onSave}</a>
  <Tracklist tracks={this.props.playlistTracks} />
  <onRemove={this.props.onRemove} />
  <onNameChange={this.props.updatePlaylistName} />
  <onChange={this.props.handleNameChange} />
  <onSave={this.props.savePlaylist} />
</div>
    );
  }
}

export default Playlist;
