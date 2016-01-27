import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
export default class UserList extends Component {

  constructor(props) {
    super(props);
  }

  handleSendClick(id){
    const node = this.refs[id];
    const title =  node.value.trim();
    this.props.sendMessage(title, id);
  }

  render() {
    const { users } = this.props;

    return (
     
      <div>
        <div>
        <h3>users Selected</h3>
        </div>
        <div>
          {users.length===0? <li>none</li> :
            users.map( (user, index) => <div key={index} className="list-group-item action-element" ><p>name: {user.name || ''}</p>
              <div className="col-xs-4 pull-right">
                <input  type="text"  className="form-control" placeholder="Send a message" ref={`${user.id}`} />
                <span className="input-group-btn">
                  <button className="btn btn-info" type="button" onClick={() => this.handleSendClick(user.id)}><span className="glyphicon glyphicon-plus" /></button>
                </span>
              </div>
              <p>age: {user.age  || ''}</p><p>description: {user.description  || ''}</p></div>)
          }
         </div>
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array,
};

