import React, { Component, PropTypes } from 'react';
import ConcertItem from './ConcertItem';


export default class ConcertList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      newConcerts: [],
      addDisabled:true
    };
  }

  handleSearchButtonClick(event) {
    const node = this.refs.text;
    let updateConcerts = this.props.concerts;
    updateConcerts = updateConcerts.filter( concert => concert.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1);
    node.value === '' ? this.setState({newConcerts: [] }) : this.setState({newConcerts: updateConcerts});
  }

  handleVisibility(){
    this.setState({ isVisible: true });
  }


   handleOnBlur(){
    setTimeout(() => this.handleVisibility(), 300);
  }

  handleOnChangeTitle() {

    const node = this.refs.concert;
    const title =  node.value.trim();

    this.setState({
      addDisabled: title.length === 0
    });
  }

    componentWillMount() {
    this.props.registerListeners();
  }

  componentWillUnmount() {
    this.props.unregisterListeners();
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

  handleChangeSearchToAdd(){
    this.setState({ isVisible: false });
  }

  render() {

    const { concerts } = this.props;

    return (
      <div>
        <div>   
          <ul className="list-group">
             {
               concerts.map( (concert, index) =>  <ConcertItem key={index} concert={concert} /> )
             }
          </ul>
         <div className={`input-group col-xs-12 ${this.state.isVisible ? 'hidden' : ''}`}>
            <input  type="text"  className="form-control" placeholder="Add Concerts" ref="concert" onKeyDown={e => this.handleOnTitleKeyDown(e)} onChange={e => this.handleOnChangeTitle(e)} />
            <span className="input-group-btn">
              <button disabled={this.state.addDisabled} className="btn btn-info glyphicon glyphicon-plus" type="button" onClick={e => this.handleAddButtonClick(e)}></button>
            </span>
          </div>
           <div className="search">
              <div className="search-btn-input">
                <button className={`${this.state.isVisible ? 'hidden' : 'btn btn-warning' }`}>
                  <span className="biggerGlyphicon glyphicon glyphicon-search pull-left" aria-hidden="true" onClick={ () => this.handleVisibility()} />
                </button>
                <input ref="text" type="text" autoFocus className={`${this.state.isVisible ? 'form-control input-search' : 'hidden' }`} placeholder="Search your concert..." onChange={ (event) => this.handleSearchButtonClick(event)}/>
                <button className={`${this.state.isVisible ? 'btn btn-success' : 'hidden' }`} onClick={() => this.handleChangeSearchToAdd()}> Add Concert </button>
              </div>
              <ul className={`${this.state.isVisible ?  'list-group'  : 'hidden' }`}>
                  {
                     this.state.newConcerts.map( (concert, index) => <ConcertItem key={index} concert={concert} />  )
                  }
              </ul>
          </div>
        </div>
      </div>
    );
  }
}

ConcertList.propTypes = {
  concerts: PropTypes.array,
  onAddConcert: PropTypes.func.isRequired
};

ConcertList.defaultProps = { 
  concerts: []
};
