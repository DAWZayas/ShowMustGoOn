import { connect } from 'react-redux';
import InfoList from '../components/InfoList';

import * as infoActions from '../actions/information';




export default connect(
 state => ({informations: state.informations}),
  infoActions
)(InfoList);
