import React from 'react';


class splashPage extends React.Component {

  render() {
    return (
    <div className="splash-page">
      <ul className="homepage-questions">
        <li>
          Cars reviews from actual owners
        </li>
      </ul>
      <div className="flex-box-welcome-message">
        <div className="welcome-message">
          <div>Wheelio gets the job done</div>
        </div>
      </div>

      <div className="homepage-search">
        <span className="search-start">
          Your search starts here:
        </span>
        <input className="search-input" type="text"/>
      </div>
    </div>
    );
  }

}
export default splashPage;
