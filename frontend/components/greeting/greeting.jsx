import React from 'react';
import { Link } from 'react-router-dom';

// ADDED DEMO USER WITH ONCLICK LOGIN
const sessionLinks = (login) => (
  <nav className="welcome-login-signup">
    <Link className="welcome-login-signup-effects" to="/login">Login</Link>
    &nbsp;&nbsp;
    <Link className="welcome-login-signup-effects" to="/signup">Sign Up</Link>
    &nbsp;&nbsp;
    <Link className="welcome-login-signup-effects" to="" onClick={() => login({ user:{username: "guest", password: "guest123" }})}>Demo User</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup>
    <h2>Hi, {currentUser.username}!</h2>
    <button onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({currentUser, logout, login}) => (
 currentUser ? personalGreeting(currentUser, logout) : sessionLinks(login)
);

export default Greeting;
