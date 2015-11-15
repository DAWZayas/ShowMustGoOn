import React, { Component } from 'react';
import ConcertItem from './ConcertItem';

export default class ConcertList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addDisabled: true
    };
  }

  handleAddButtonClick() {
    const { onAddConcert } = this.props;
    const node = this.refs.title;
    const title =  node.value.trim();
    onAddConcert(title);
    node.value = '';
    this.setState({
      addDisabled: true
    });
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
      <div className="row">
        <div className="col-md-6">
          <h3>Concert</h3>
          <ul className="list-group">
            {
              concerts.map( (concert, index) =>  <ConcertItem key={index} concert={concert} /> )
            }
         </ul>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Add Preferences" ref="title" onKeyDown={e => this.handleOnTitleKeyDown(e)} onChange={e => this.handleOnChangeTitle(e)}/>
            <span className="input-group-btn">
              <button disabled={this.state.addDisabled} className="btn btn-info" type="button" onClick={e => this.handleAddButtonClick(e)}><span className="glyphicon glyphicon-plus" /></button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
