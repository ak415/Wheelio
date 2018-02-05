import { connect } from 'react-redux';
import {  withRouter } from 'react-router-dom';
import ReviewForm from './review_form';


const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch, { location }) => {

};

export default withRouter( connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm));
