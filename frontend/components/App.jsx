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

const App = () => (
  <div>
    <header>
      <h1>Wheelio</h1>
      <GreetingContainer />
    </header>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute exact path="/signup" component={SessionFormContainer} />

  </div>
);

export default App;
