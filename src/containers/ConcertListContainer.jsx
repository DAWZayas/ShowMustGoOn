import { connect } from 'react-redux';

import ConcertList from '../components/ConcertList';
import { addConcert } from '../actions';

function mapStateToProps(state) {
  return {
    concerts: state.concerts
  };
}

function mapActionsToProps(dispatch) {
  return {
    onAddConcert: title => dispatch(addConcert(title)),
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ConcertList);