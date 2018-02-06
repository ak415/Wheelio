import { connect } from 'react-redux';
import {  withRouter } from 'react-router-dom';
import ReviewForm from './review_form';


const mapStateToProps = (state) => {
  return {
    a: 0
  };
};

const mapDispatchToProps = () => {
  return {
    c: 0
  };
};

export default withRouter( connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm));
