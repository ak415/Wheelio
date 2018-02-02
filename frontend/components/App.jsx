import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import splashPage from './home_page/splashpage';

const App = () => (
  <div className="main-page">
    <div className="nav-bar">
      <Link to="/" className="wheelio-homepage-link">
        <img src="http://res.cloudinary.com/aazaiez/image/upload/v1517609839/wheelio_logo_ptbkmi.svg"/>
        <div>WLO</div>
      </Link>
      <GreetingContainer />
    </div>
    <Switch>
      <AuthRoute exact path="/" component={splashPage} />
      <AuthRoute  path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Redirect to="/"/>
    </Switch>
    <div className="footer">
    </div>
  </div>
);

export default App;
