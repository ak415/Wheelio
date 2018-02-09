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
    this.props.clearError();
  }

  componentWillMount(){
    this.props.clearError();
  }

  componentWillReceiveProps(nextProps) {
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
      greeting = "   Please sign in.";
    } else {
      greeting = "Create a new account";
    }

    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form">

          <div className="greeting-wrapper">
            <img src="http://res.cloudinary.com/aazaiez/image/upload/v1517710944/wheelio_second_logo_di3ikl.svg" className="wheelio-logo-white-forms"/>

            <p>
              Welcome.
            </p>

            <div className="greeting">
              { greeting }
            </div>

          </div>


          <div className="login-errors">
            {this.renderErrors()}
          </div>
          <div className="login-inputs">
            <label>
              <div className="login-icons">
                <i class="fas fa-user-circle"></i>
              </div>
              <input type="text"
                placeholder="username"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-username-input"
              />
            </label>
            {  (this.props.formType === 'signup') &&
              <label>
                <div className="login-icons">
                  <i class="fas fa-envelope-square" ></i>
                </div>
                <input type="text"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.update('email')}
                    className="login-email-input"
                  />
              </label>
            }
            <label>
              <div className="login-icons">
                 <i class="fas fa-key"></i>
              </div>
              <input type="password"
                placeholder="password"
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
