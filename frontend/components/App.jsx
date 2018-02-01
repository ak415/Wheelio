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
  <div class="main-page">
    <div class="nav-bar">
      <Link to="/" className="wheelio-homepage-link">
        <h1>Wheelio</h1>
      </Link>
      <GreetingContainer />
    </div>
    <AuthRoute exact path="/" component={splashPage} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />

  </div>
);

export default App;
