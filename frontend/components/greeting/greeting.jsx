import React from 'react';
import { Link } from 'react-router-dom';

// ADDED DEMO USER WITH ONCLICK LOGIN
const sessionLinks = (login) => (
  <nav className="welcome-login-signup">
    <Link className="welcome-login-signup-effects" to="/login">Login</Link>
    <Link className="home_page_signup" to="/signup">Sign Up</Link>
    <Link className="welcome-login-signup-effects" to="" onClick={() => login({ user:{username: "guest123", password: "guest123" }})}>Demo User</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<div className="guest-greeting">
    <h2>Signed in as {currentUser.username}</h2>
    <button onClick={logout}>Log Out</button>
	</div>
);

const Greeting = ({currentUser, logout, login}) => (
 currentUser ? personalGreeting(currentUser, logout) : sessionLinks(login)
);

export default Greeting;
