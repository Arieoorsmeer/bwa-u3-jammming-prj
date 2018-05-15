import './Track.css';

class Track extends React.Component {
  constructor() {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

addTrack() {
  this.props.track = this.props.onAdd
}

  renderAction() {
    <div className="Track-action" /div>
    if (isRemoval === true;) {
      console.log( ${'-'onClick={this.removeTrack}});
    } else
  console.log( ${'+'onClick={this.addTrack}});
    }

    removeTrack() {
      this.props.track = this.props.onRemove;
    }

  render() {
    return (
      <div className="Track">
  <div className="Track-information">
    <h3><!-- track name will go here --></h3>
    <p><!-- track artist will go here--> | <!-- track album will go here --></p>
  </div>
  <a className="Track-action"><!-- + or - will go here --></a>
</div>
    );
  }
};
