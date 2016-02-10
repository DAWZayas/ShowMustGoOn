import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
export default class UserList extends Component {

  constructor(props) {
    super(props);
    this.state={
      send:false
      
    };
  }

  handleSendClick(id){
    const node = this.refs[id];
    const title =  node.value.trim();
    this.props.sendMessage(title, id);

    this.setState({
      send:false
    });

  }
  handleCancelMessage(){

    this.setState({
      send:false
    });
    
  }

  handleSendMessageClick(id){

    this.setState({
      send:id
    });
  }

  render() {
    const { users, auth } = this.props;
    
    return (
     
      <div>
        <div>
        <h3>Users Selected</h3>
        </div>
        <div>

            {users.length===0? <li>none</li> :
            users.map( (user, index) => <div className="">
            <div key={index} className='list-group-item'>

              <div className="text-center">
                <div className="pull-left">
                <img className="avatar img-circle img-thumbnail" src={user.img}/>
                </div> 
                <button className={`btn btn-warning pull-right ${this.state.send=== user.id ? 'hidden' : '' }`} type="button" onClick={() => this.handleSendMessageClick(user.id)}><span className="glyphicon glyphicon-envelope card" /></button>
              
                <p>Name: {user.name || ''}</p><p>Age: {user.age  || 'no data'}</p><p>  Description: {user.description  || ''}</p>
              </div>
              <div className={`input-group ${this.state.send === user.id  ? '' : 'hidden'}`}>
                <input  type="text"  className="form-control" placeholder="Send a message" ref={`${user.id}`} />
                <span className="input-group-btn">
                  <button className="btn btn-warning " type="button" onClick={() => this.handleSendClick(user.id)}><span className="glyphicon glyphicon-arrow-right" /></button>
                  <button className="btn btn-warning" type="button" onClick={() => this.handleCancelMessage()}><span className="glyphicon glyphicon-minus" /></button>
                </span>
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

