import { connect } from 'react-redux';


// ADDED LOGIN
import { logout, login } from '../../actions/session_actions';
import Greeting from './greeting';
import { withRouter } from 'react-router';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

// ADDED LOGIN
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting));
