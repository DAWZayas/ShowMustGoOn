import { connect } from 'react-redux';

import BandList from '../components/BandList';
import { addConcert } from '../actions';

function mapStateToProps(state) {
  return {
    bands: state.bands
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
)(BandList);