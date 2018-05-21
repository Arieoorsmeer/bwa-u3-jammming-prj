import '/.SearchBar.css';

class SearchBar extends React.Component {
constructor() {
  super(props);
  this.search = this.search.bind(this);
  this.handleTermChange = this.handleTermChange.bind(this);
}

handeTermChange() {

}

search() {

}

  render() {
    return (
    <div className="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
  <a>SEARCH</a>
  <onSearch={this.props.search} />
</div>
);
  }
}

export default SearchBar;
