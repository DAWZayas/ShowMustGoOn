import React, { Component, PropTypes } from 'react';
export default class UserList extends Component {

  constructor(props) {
    super(props);
    this.state={
      send:false,
      addDisabled: true
      
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

  handleOnTitleKeyDownEdit(event, id) {
    const ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY && !this.state.addDisabled) {
      this.handleSendClick(id);
    }
  }

  handleDisabledOkEdit(id){ 
    const node = this.refs[id];
    const title =  node.value.trim();

    this.setState({
      addDisabled: title.length === 0
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

            {users.length===0? <h4 className="text-center">No user at the moment</h4> :
            users.map( (user, index) => <div className="">
            <div key={index} className={auth.id === user.id ? 'hidden' : 'list-group-item'}>

              <div className="text-center">
                <div className="pull-left">
                <img className="avatar img-circle" src={user.img}/>
                </div> 
                <button className={`btn btn-warning pull-right ${this.state.send=== user.id ? 'hidden' : '' }`} type="button" onClick={() => this.handleSendMessageClick(user.id)}><span className="glyphicon glyphicon-envelope card" /></button>
              
                <p><b>Name:</b> {user.name || ''}</p><p><b>Age:</b> {user.age  || 'no data'}</p><p><b>Description:</b> {user.description  || ''}</p>
              </div>
              <div className={`input-group ${this.state.send === user.id  ? '' : 'hidden'}`}>
                <input  type="text"  className="form-control" placeholder="Send a message" ref={`${user.id}`} onChange={()=> this.handleDisabledOkEdit(user.id)} onKeyDown={ e => this.handleOnTitleKeyDownEdit(e, user.id)} />
                <span className="input-group-btn">
                  <button disabled={this.state.addDisabled} className="btn btn-warning " type="button" onClick={() => this.handleSendClick(user.id)}><span className="glyphicon glyphicon-arrow-right" /></button>
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
