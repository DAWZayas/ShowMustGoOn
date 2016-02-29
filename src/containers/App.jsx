import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ConfirmDialogContainer from './ConfirmDialogContainer';
import MenuContainer from './MenuContainer';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (

      <div>
        <MenuContainer />
        <div>
          <ConfirmDialogContainer/>
        </div>    
        <header>
          <div className="container-fluid">
            <div className="row">
              {children}
            </div>
          </div>
        </header>
      </div>

      );
  }
}

App.propTypes = {
  // Injected by React RouterConfirmDialog
  children: PropTypes.node,
  auth: PropTypes.object.isRequired
};

export default connect(
  state => ({
    auth: state.auth
  })
  )(App);
