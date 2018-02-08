import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchboxContainer from '../searchbox/searchbox_container';




class splashPage extends React.Component {

  render() {
    return (
    <div className="splash-page">

      <ul className="homepage-questions">
        <li>
          <h1 className="welcome-page-wheelio">WHEELIO</h1>
        </li>
        <li>
          <p >Car reviews from actual owners</p>
        </li>
      </ul>

      <div className="homepage-search">
        <SearchboxContainer
          className="search-input"
        />
      </div>
    </div>
  );
  }

}
export default splashPage;
