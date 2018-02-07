import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import CarShowContainer from './car/car_show_container';
import ReviewFormContainer from './review/review_form_container';
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
        <img src="http://res.cloudinary.com/aazaiez/image/upload/v1517710944/wheelio_second_logo_di3ikl.svg" className="wheelio-logo-white"/>
        <div>WLO</div>
      </Link>
      <GreetingContainer />
    </div>
    <Switch>
      <AuthRoute  path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route exact path="/cars/:carId" component={CarShowContainer}/>
      <Route exact path="/cars/:carId/reviews" component={ReviewFormContainer}/>
      <Route path="/cars/:carId/reviews/new" component={ReviewFormContainer}/>
      <Route path="/cars/:carId/reviews/:reviewId/edit" component={ReviewFormContainer}/>        
      <Route exact path="/" component={splashPage} />
      <Redirect to="/"/>
    </Switch>
    <div className="footer">
    </div>
  </div>
);

export default App;
