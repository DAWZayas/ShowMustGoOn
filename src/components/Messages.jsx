import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
export default class Messages extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { messages } = this.props;

    return (
     
      <div>
        <div>
        <h3>messages Selected</h3>
        </div>
        <ul className="col-lg-12 hero">
          {messages.length===0? <li>none</li> :
            messages.map( (msg, index) =>  <Link key={index} className="list-group-item action-element" to='/'><p>name: {msg.name || ''}</p><p>age: {msg.age  || ''}</p><p>description: {msg.description  || ''}</p></Link>)
          }
         </ul>
      </div>
    );
  }
}

Messages.propTypes = {
  messages: PropTypes.array,
};

