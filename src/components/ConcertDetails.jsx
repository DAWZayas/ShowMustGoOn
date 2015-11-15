import React, { Component } from 'react';

export default class ConcertDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }


  render() {
  	const { concert } = this.props;
    return (
      <div className="panel-heading">
      	   <h3>
            <span>
              { concert.title }
            </span>
          </h3>
      </div>
    );
  }
}

