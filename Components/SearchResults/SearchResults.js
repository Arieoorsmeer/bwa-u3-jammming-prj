import './SearchResults.css';

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
  <h2>Results</h2>
<searchResults tracks={this.props.searchResults} />
<SearchResults searchResults={this.searchResults.addTrack()} />
<onAdd TrackList={this.props.onAdd} />
</div>
    );
  }
}

export default SearchResults;
