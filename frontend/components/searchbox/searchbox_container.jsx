import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import  SearchBox from './search_box';
import { fetchCars, findCars } from '../../actions/car_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    result: state.search,
  };
};

const mapDispatchToProps = dispatch => {

  return {
    fetchCars: () => dispatch(fetchCars()),
    findCars: (params) => dispatch(findCars(params))
  };
};

export default withRouter(connect(
  null,
  mapDispatchToProps
)(SearchBox));
