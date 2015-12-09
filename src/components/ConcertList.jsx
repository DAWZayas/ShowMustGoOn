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

    const node = this.refs.title;
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

  render() {

    const { concerts } = this.props;

    return (
      <div>
      <div className="title">
      <h3>Concert</h3>
      </div>
        <div className="col-lg-12 hero">
          
          <ul className="list-group">
            {
              concerts.map( (concert, index) =>  <ConcertItem key={index} concert={concert} /> )
            }
         </ul>
          <div className="search">
              <div className="search-btn-input">
                <button className={`${this.state.isVisible ? 'hidden' : 'btn btn-info' }`}>
                <span className="biggerGlyphicon glyphicon glyphicon-search pull-left" aria-hidden="true" onClick={ () => this.handleVisibility()} />
                </button>
                <input ref="text" type="text" autoFocus className={`${this.state.isVisible ? 'form-control input-search' : 'hidden' }`} placeholder="Search your concert..." onChange={ (event) => this.handleSearchButtonClick(event)} /*onBlur={ () => this.handleOnBlur()}*//>
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
  //onAddConcert: PropTypes.func.isRequired
};

ConcertList.defaultProps = { 
  concerts: []
};
