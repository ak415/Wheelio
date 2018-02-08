import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import  CarIndex from './car_index';
import { fetchCars } from '../../actions/car_actions';
import { updateBounds } from '../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = dispatch => {

  return {
    fetchCars: () => dispatch(fetchCars())
  };
};

export default withRouter(connect(
  null,
  mapDispatchToProps
)(CarIndex));
