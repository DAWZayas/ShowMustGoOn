  import React, { Component, PropTypes } from 'react';
  import alertify from 'alertifyjs/build/alertify.min.js';
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
          if(info[i].users[auth.id].assist){msg='Assintance Canceled';}else{msg='Assintance Confirmed';}
        }
      }
      auth.authenticated? alertify.error(msg):'';
    }

      haveNumber(text){
        const number='0123456789';
        for(var i=0; i<text.length; i++){
          if (number.indexOf(text.charAt(i), 0)!==-1){
           return 1;
         }
       }
       return 0;
     }

      haveLetter(number){
      const letters='abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
      
      for(var i=0; i<number.length; i++){
        if (letters.indexOf(number.charAt(i), 0)!==-1){
         return 1;
       }
     }
     return 0;
   }
    handleAddButtonClick() {
      this.setState({
        editting: false
      });
      const { addInfo, idBand } = this.props;
      const node = this.refs.place;
      const node2 = this.refs.price;
      const title =  node.value.trim();
      const date =  new Date(this.refs.year.value, this.refs.month.value-1, this.refs.day.value).getTime();
      const price =  node2.value.trim();

       if(this.haveNumber(title)===1){
        alertify.error('Place can not contain numbers');
      }else{
        if(this.haveLetter(this.refs.year.value)  ===1 || 
           this.haveLetter(this.refs.month.value )===1 || 
           this.haveLetter(this.refs.day.value)   ===1 || 
           this.haveLetter(price)                 ===1    ){

           alertify.error('Date or the price can not contain letters');
      }else{
        if (title === '' | date === '' | price === '' ){
          alertify.error('Missing input'); 
        }else{
          if(date < Date.now()){
            alertify.error('Date Previous');
          }else{    
            addInfo(title, date, price, idBand);
          }
        }
      }
    }

    node.value = '';
    node2.value = '';
    this.refs.year.value='';
    this.refs.month.value='';
    this.refs.day.value='';
}

handelOnclickAdd(){

  this.setState({
    editting: true   
  }); 
}

handelOnclickRemove(id, title){
  this.props.deleteConcertAssist(id, title);
}


render() {
  const { info, auth, band } = this.props;

  return (
    <div className="panel panel-default container-fluid">
      <h1>{band[0]!==undefined?band[0].title:''}</h1>
      <h3>Click on a concert to confirm/cancel your assistance</h3><br/>
      {
        info.map( (infor, index) => 
          <li  className="list-group-item action-element">
            <span className={auth.id===null?'hidden' : infor.users[auth.id]===undefined||!infor.users[auth.id].assist?
              'btn btn-success glyphicon glyphicon-log-in pull-right action-icon':'btn btn-warning glyphicon glyphicon-log-out pull-right action-icon'} onClick={e => this.handleAsistButtonClick(e, infor.id)}>
            </span>
            <span className={auth.id === infor.creator || auth.id === 'github:15048506'  ? 'pull-left glyphicon glyphicon-trash action-icon trash' : 'hidden'} onClick={() => this.handelOnclickRemove(infor.id, infor.title) }></span>
            <p key={index}>{infor.title} on {new Date(infor.date).getDate()}/{new Date(infor.date).getMonth()+1}/{new Date(infor.date).getFullYear()} at {infor.price}€</p>
          </li> )
      }
      <br/>
      <div className={` ${this.state.editting ? 'input-group '  : 'hidden'}` }>
        <input  type="text"  className="form-control" placeholder="Add place" ref="place" />
        <input  type="text"  className="form-control" placeholder="Add day" ref="day" />
        <input  type="text"  className="form-control" placeholder="Add month" ref="month" />
        <input  type="text"  className="form-control" placeholder="Add year(yyyy)" ref="year" />
        <input  type="text"  className="form-control" placeholder="Add price" ref="price" />
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
  auth: PropTypes.array,
  idBand: PropTypes.String,
  selectConcert: PropTypes.func.isRequired,
  info: PropTypes.array,
  band: PropTypes.object.isRequired,
  selectedConcert: PropTypes.func.isRequired,
  addInfo: PropTypes.func.isRequired,
  deleteConcertAssist: PropTypes.func.isRequired
};

InfoList.defaultProps = {
  info: [],
  band: {}
};