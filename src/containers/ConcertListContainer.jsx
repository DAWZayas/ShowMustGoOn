import { connect } from 'react-redux';

import ConcertList from '../components/ConcertList';
import { pushState } from 'redux-router';


function mapStateToProps(state) {
  return {
    concerts: state.concerts
  };
}

function mapActionsToProps(dispatch) {
  return {
  
    pushState: path => dispatch(pushState(null, path))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ConcertList);