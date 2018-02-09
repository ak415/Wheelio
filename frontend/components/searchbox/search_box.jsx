import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchQueryChange = this.searchQueryChange.bind(this);
  }

  componentDidMount() {
  }

  componentWillMount() {
    console.log("search-box UNMOUNTING");
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.findCars(this.state.searchQuery)
    .then(() => this.props.history.push(`/search`));
  }

  searchQueryChange(event) {
  this.setState({ searchQuery: event.target.value });
  }


  render() {
    return (

      <form className="search-stuff" onSubmit={this.handleSubmit}>
        <label>
          <input  className="search-input"  autoFocus placeholder="Your search starts here" stype="text" value={this.state.searchQuery} onChange={this.searchQueryChange} />
        </label>

        <div className="submit-to-hide">
          <input type="submit" value="Submit"></input>
        </div>

      </form>
  );


  }
}

export default withRouter(SearchBox);
