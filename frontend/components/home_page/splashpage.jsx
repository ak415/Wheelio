import React from 'react';


class splashPage extends React.Component {

  render() {
    return (
    <div className="splash-page">
      <ul className="homepage-questions">
        <li className="hp-question">
          Looking into buying a car and could use some advice from current owners?
        </li>
        <li className="hp-question">
          Willing to tell other people what you think of your current car?
        </li>
      </ul>
      <div className="welcome-message">
        <div>Wheelio gets the job done</div>
      </div>

      <div className="homepage-search">
        <div className="search-start">
          Your search starts here:
        </div>
        <input className="search-input" type="text"/>
      </div>
    </div>
    );
  }

}
export default splashPage;
