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
            users.map( (user, index) => <div className=""><div key={index} className="list-group-item">

              <div className="pull-left">
                <img className="avatar img-circle img-thumbnail" src={user.img}/>
              </div>
              <div className="input-group">
                <input  type="text"  className="form-control" placeholder="Send a message" ref={`${user.id}`} />
                <span className="input-group-btn">
                  <button className="btn btn-info" type="button" onClick={() => this.handleSendClick(user.id)}><span className="glyphicon glyphicon-plus" /></button>
                </span>
              </div>
              <div className="text-center">
                <p>Name: {user.name || ''}</p><p>Age: {user.age  || 'no data'}  Description: {user.description  || ''}</p>
              </div>
            </div><br/></div>)
          }
         </div>
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array,
};

