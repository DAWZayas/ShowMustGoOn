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
            messages.map( (msg, index) =>  <div>
              <li key={index} className="list-group-item action-element" onClick={ () => this.handleUser(msg.id) }><h3>user: {msg.id}</h3></li>
              <div>
                <h3>Recived</h3>
                {
                  Object.keys(msg.recived).map( (key, index) => <div key={index}>
                  <p>olaa{msg.recived[key].time}</p><p>{msg.recived[key].msg}</p><br/></div>
                )}

              </div>
            </div>
            )
          }
         </ul>
      </div>

    );
  }
}

Messages.propTypes = {
  messages: PropTypes.array,
};

