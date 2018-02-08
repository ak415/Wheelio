import { connect } from 'react-redux';
import Search from './search';
import { fetchCars } from '../../actions/car_actions';
import { logout, clearError } from '../../actions/session_actions';
import { fetchReviews} from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    cars: Object.values(state.cars)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
  fetchReviews: carId => dispatch(fetchReviews(carId)),
  fetchCars: (query) => dispatch(fetchCars(query)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
