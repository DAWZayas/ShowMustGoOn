import { connect } from 'react-redux';

import BandList from '../components/BandList';
import * as bandsActions from '../actions/bands';


export default connect(
 state => ({bands: state.bands}),
  bandsActions
)(BandList);
