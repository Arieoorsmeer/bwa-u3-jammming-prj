import './Tracklist.css';

class Tracklist extends React.Component {
  render() {

this.props.track.name
this.props.track.artist
this.props.track.album

    return
    <div className="TrackList">
    <Track track={this.props.track.map(track.id) />
      <onAdd Track={this.props.onAdd} />
    <onRemove={this.props.onRemove} />
</div>
  }
}

export default Tracklist;
