import React from 'react';


class splashPage extends React.Component {

  render() {
    return (
    <div className="splash-page">

      <ul className="homepage-questions">
        <li>
          <h1 className="welcome-page-wheelio">WHEELIO</h1>
        </li>
        <li>
          <p >Cars reviews from actual owners</p>
        </li>
      </ul>

      <div className="homepage-search">

        <input className="search-input" type="text" placeholder="Your search starts here"/>
      </div>
    </div>
  );
  }

}
export default splashPage;
