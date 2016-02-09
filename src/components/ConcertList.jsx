import React, { Component, PropTypes } from 'react';
import ConcertItem from './ConcertItem';
import Spinner from './Spinner';


export default class ConcertList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newConcerts: [],
      addDisabled:true,
      loading: true
    };
  }
  componentWillMount() {
    this.props.registerListeners();
  }

  componentWillReceiveProps() {

    this.setState({ loading: false });
  }
    
  componentWillUnmount() {
    this.props.unregisterListeners();
  }



  handleOnChangeTitle() {

    const node = this.refs.concert;
    const title =  node.value.trim();

    this.setState({
      addDisabled: title.length === 0
    });
  }


  handleOnTitleKeyDown(event) {
    const ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY && !this.state.addDisabled) {
      this.handleAddButtonClick();
    }
  }

  handleAddButtonClick(){
    const { addConcert } = this.props;
    const node = this.refs.concert;
    const title =  node.value.trim();
    addConcert(title);
    node.value = '';
    this.setState({
      addDisabled: true
    });
  }


  render() {

    const { concerts, auth } = this.props;

    return (
      <div className="panel container-fluid panel-default">
        <h3>Music Styles</h3>
        <div>  
        {this.state.loading? <Spinner /> : ( 
          <div>
             {
               concerts.map( (concert, index) =>  <ConcertItem key={index} concert={concert} {...this.props}/> 
                
                )
             }
          </div>)}<br/>
          <div className={auth.authenticated ?'input-group':'hidden'}>
            <input  type="text"  className="form-control" placeholder="Add Concerts" ref="concert" onKeyDown={e => this.handleOnTitleKeyDown(e)} onChange={e => this.handleOnChangeTitle(e)} />
            <span className="input-group-btn">
              <button disabled={this.state.addDisabled} className="btn btn-info glyphicon glyphicon-ok" type="button" onClick={e => this.handleAddButtonClick(e)}></button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

ConcertList.propTypes = {
  auth: PropTypes.object.isRequired,
  registerListeners: PropTypes.func.isRequired,
  unregisterListeners: PropTypes.func.isRequired,
  concerts: PropTypes.array,
  addConcert: PropTypes.func.isRequired
};

ConcertList.defaultProps = { 
  concerts: []
};
