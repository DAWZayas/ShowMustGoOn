import React, { Component, PropTypes } from 'react';
export default class Messages extends Component {

  constructor(props) {
    super(props);
    this.state={
      open: null
    };
  }

  handleUser(id){
    this.state.open===id? this.setState({open: null}) : this.setState({open: id});
    this.props.readed(id);
  }

  getName(id){
    const {users} = this.props;
    for (var i = users.length - 1; i >= 0; i--) {
      if(users[i].id===id){return users[i].name;}
    }
  }
    handleSendClick(id){
    const node = this.refs[id];
    const title =  node.value.trim();
    title!==''?this.props.sendMessage(title, id):'';
    node.value = '';
  }

  handleRemoveAllButtonClick(id){
    this.props.removeAllButtonClick(id);
  }


  render() {
    
    const { messages } = this.props;
  const clean = messages.length > 0 ? <button className="btn btn-warning pull-right" onClick={ () => this.handleRemoveAllButtonClick(messages.map.id) }>Clean</button> : null;

    return (
     
      <div>
      {clean}
      <br/>
        <div>
        <h3>Messages</h3>
        </div>

        <div className="">
          {messages.length===0? <li>none</li> :
            messages.map( (msg, index) => <div>
              <li key={index} className={this.state.open==null||this.state.open===msg.id?'list-group-item action-element':'hidden'} onClick={ () => this.handleUser(msg.id) }><h3>{this.getName(msg.id)!==undefined?this.getName(msg.id):msg.id}</h3></li>
              <div className={this.state.open===msg.id?'list-group-item':'hidden'}>
                <h3 className={msg.recived===undefined?'hidden':''}>Recived</h3>
                {msg.recived===undefined? '' :
                  Object.keys(msg.recived).map( (key, index) => <div key={index}>
                  <p>{new Date(msg.recived[key].time).toLocaleString()}</p><p>{msg.recived[key].msg}</p><br/></div>
                )}
                  <h3 className={msg.sent===undefined?'hidden':''}>Sent</h3>
                {msg.sent===undefined? '' :
                  Object.keys(msg.sent).map( (key, index) => <div key={index}>
                    <p>{new Date(msg.sent[key].time).toLocaleString()}</p><p>{msg.sent[key].msg}</p><br/>
                  </div>
                )}
                <div className="input-group">
                  <input  type="text"  className="form-control" placeholder="Send a message" ref={`${msg.id}`} />
                  <span className="input-group-btn">
                    <button className="btn btn-info" type="button" onClick={() => this.handleSendClick(msg.id)}><span className="glyphicon glyphicon-plus" /></button>
                  </span>
                </div>

              </div>
              <br/>
            </div>
            )
          }
         </div>
      </div>

    );
  }
}

Messages.propTypes = {
  messages: PropTypes.array,
};

