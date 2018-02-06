import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    console.log(this.props);
    this.props.clearError();
  }

  componentWillMount(){
    this.props.clearError();
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props);
    if (this.props.location.pathname !== nextProps.location.pathname ) {
      this.props.clearError();
      this.setState({
        username: '',
        password: '',
        email: '',
      });

    }
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>;
    } else {
      return <p>Already have an account? <Link to="/login">Login</Link></p>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    let greeting = "";
    if (this.props.formType === 'login') {
      greeting = "Login to your account";
    } else {
      greeting = "Create a new account";
    }

    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form">
          <h3 className="form-welcome-message">Welcome to Wheelio!</h3>
          <div className="greeting">
            { greeting }
          </div>
          <div className="login-errors">
            {this.renderErrors()}
          </div>
          <div className="login-inputs">
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label>
            {  (this.props.formType === 'signup') &&
              <label>Email:
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  />
              </label>
            }
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
          </div>
          <div className="submit-button">
            <input type="submit" value="Submit" />
          </div>
          <div className="alternative-option">
            {this.navLink()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
