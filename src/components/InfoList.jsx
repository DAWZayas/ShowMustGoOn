import React, { Component, PropTypes } from 'react';

export default class InfoList extends Component {

  constructor(props) {
    super(props);
  }
  
 handleAsistButtonClick(e, index) {
   const { informations, onSelectedConcert } = this.props;
   let msg='';
   for (var i = informations.length - 1; i >= 0; i--) {
     if(informations[i].id===index){
      onSelectedConcert(index);
      if(informations[i].asistir){msg='Cancelada asistencia';}else{msg='Confirmada asistencia';}
    }
   }
   alert(msg);
}

    handleAddButtonClick() {
    const { onAddInfo, band } = this.props;
    const id = band.id;
    const node = this.refs.place;
    const node2 = this.refs.date;
    const node3 = this.refs.price;
    const title =  node.value.trim();
    const date =  node2.value.trim();
    const price =  node3.value.trim();
    if (title === '' | date === '' | price === '' ){alert('Missing input'); }
      else{    
    onAddInfo(title, date, price, id);
    }
    node.value = '';
    node2.value = '';
    node3.value = '';
  }

  render() {
    const { informations } = this.props;
    

    return (
      <div className="container">
          <h3>Information</h3>
          <h5>Click on a concert to confirm you are going</h5>
          <div className="infos">
            {
              informations.map( (information, index) => <button key={index} className={information.asistir?'btn btn-success':'btn btn-info'} type="button" onClick={e => this.handleAsistButtonClick(e, information.id)}>{information.title} on {information.date} at {information.price}€</button> )
            }
         </div>
         <div className="input-group col-xs-3">
            <input  type="text"  className="form-control" placeholder="Add place" ref="place" />
            <input  type="date"  className="form-control" placeholder="Add date" ref="date" />
            <input  type="number"  className="form-control" placeholder="Add price" ref="price" />
            <span className="input-group-btn">
              <button className="btn btn-info" type="button" onClick={e => this.handleAddButtonClick(e)}><span className="glyphicon glyphicon-plus" /></button>
            </span>
         </div>
      </div>
    );
  }
}

InfoList.propTypes = {
  informations: PropTypes.array,
  band: PropTypes.object.isRequired,
  onSelectedConcert: PropTypes.func.isRequired,
  onAddInfo: PropTypes.func.isRequired
};

InfoList.defaultProps = {
  informations: [],
  band: {}
};