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
    this.handleInputContent = this.handleInputContent.bind(this);
    this.handleAutoFocus = this.handleAutoFocus.bind(this);
  }

  componentDidMount() {
  }

  componentWillMount() {
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.findCars(this.state.searchQuery)
    .then(() => this.props.history.push(`/search`));
  }

  searchQueryChange(event) {
  this.setState({ searchQuery: event.target.value });
  }

  handleInputContent() {
    if (this.props.location.pathname === "/") {
      return "Your search starts here";
    } else {
      return "e.g. Audi A5";
    }
  }


  handleAutoFocus() {
    if (this.props.location.pathname === "/") {
      return 'autofocus';
    } else {
      return "";
    }
  }






  render() {
    return (

      <form className="search-stuff" onSubmit={this.handleSubmit}>
        <label>
          <input  className="search-input"  autoFocus={this.handleAutoFocus()} placeholder={this.handleInputContent()} stype="text" value={this.state.searchQuery} onChange={this.searchQueryChange} />
        </label>

        <div className="submit-to-hide">
          <input type="submit" value="Submit"></input>
        </div>

      </form>
  );


  }
}

export default withRouter(SearchBox);
