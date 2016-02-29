import { connect } from 'react-redux';
import ConcertList from '../components/ConcertList';

import * as concertsActions from '../actions/concerts';

export default connect(
 state => ({concerts: state.concerts, auth: state.auth}),
  concertsActions
)(ConcertList);
