import { connect } from 'react-redux';

import BandList from '../components/BandList';

function mapStateToProps(state) {
  return {
    bands: state.bands
  };
}

export default connect(
  mapStateToProps
)(BandList);