import React, { Component, PropTypes } from 'react';

export default class InfoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editting:false
    };
  }

  handleAsistButtonClick(e, index) {
    const { info, selectConcert, auth } = this.props;
    let msg='';
    for (var i = info.length - 1; i >= 0; i--) {
      if(info[i].id===index){
        selectConcert(index);
        if(info[i].users[auth.id].assist){msg='Assintance Cancel';}else{msg='Assintance Confirm';}
      }
    }
    alert(msg);
  }

  handleAddButtonClick() {
    this.setState({
      editting: false
    });
    const { addInfo, idBand } = this.props;
    const node = this.refs.place;
    const node2 = this.refs.date;
    const node3 = this.refs.price;
    const title =  node.value.trim();
    const date =  node2.value.trim();
    const price =  node3.value.trim();
    if (title === '' | date === '' | price === '' ){
      alert('Missing input'); 
    }else{    
      addInfo(title, date, price, idBand);
    }

    node.value = '';
    node2.value = '';
    node3.value = '';
  }

  handelOnclickAdd(){

    this.setState({
      editting: true   
    }); 
  }

  render() {
    const { info, auth } = this.props;

    

    return (
      <div className="container-fluid">
          <h3></h3>
          <h5>Click on a concert to confirm/cancel your assistance</h5><br/>
            {
              info.map( (infor, index) => <li className="list-group-item action-element">
                                            <span className={auth.id===null?
                                              'hidden'
                                              :infor.users[auth.id]===undefined||!infor.users[auth.id].assist?
                                                'btn btn-success glyphicon glyphicon-log-in pull-right action-icon':'btn btn-warning glyphicon glyphicon-log-out pull-right action-icon'}
                                               onClick={e => this.handleAsistButtonClick(e, infor.id)}></span><p key={index}>{infor.title} on {infor.date} at {infor.price}€</p>
                                          </li> )
            }
            <br/>
          <div className={` ${this.state.editting ? 'input-group '  : 'hidden'}` }>
            <input  type="text"  className="form-control" placeholder="Add place" ref="place" />
            <input  type="date"  className="form-control" placeholder="Add date" ref="date" />
            <input  type="number"  className="form-control" placeholder="Add price" ref="price" />
            <span className="input-group-btn">
              <button className="btn btn-info" type="button" onClick={e => this.handleAddButtonClick(e)}><span className="glyphicon glyphicon-plus" /></button>
            </span>
          </div>
            
          <div className={` ${this.state.editting||!auth.authenticated ? 'hidden' : 'AddPlace'}` }>

            <button className="btn btn-info pull-right" onClick={() => this.handelOnclickAdd() }>AddPlace</button>
          </div>
      </div>
    );
  }
}

InfoList.propTypes = {
  info: PropTypes.array,
  band: PropTypes.object.isRequired,
  selectedConcert: PropTypes.func.isRequired,
  addInfo: PropTypes.func.isRequired
};

InfoList.defaultProps = {
  info: [],
  band: {}
};