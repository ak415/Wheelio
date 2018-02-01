import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    console.log(this.props);
    this.props.clearError();
  }

  componentWillReceiveProps(nextProps) {
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
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
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
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Welcome to Wheelio!
          <br/>
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div>
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label>
            <br/>
            {  (this.props.formType === 'signup') &&
              <label>Email:
                <input type="password"
                  value={this.state.email}
                  onChange={this.update('email')}
                  />
                <br/>
              </label>
            }
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
