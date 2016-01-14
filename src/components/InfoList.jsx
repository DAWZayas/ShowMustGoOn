import React, { Component, PropTypes } from 'react';

export default class InfoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editting:false
    };
  }
  
  componentWillMount() {
    this.props.registerListeners();
  }
  componentWillUnmount() {
    this.props.unregisterListeners();
  }
  
 handleAsistButtonClick(e, index) {
   const { informations, onSelectedConcert } = this.props;
   let msg='';
   for (var i = informations.length - 1; i >= 0; i--) {
     if(informations[i].id===index){
      onSelectedConcert(index);
      if(informations[i].asistir){msg='Assintance Cancel';}else{msg='Assintance Confirm';}
    }
   }
   alert(msg);
}

    handleAddButtonClick() {
      this.setState({
        editting: false
      });
      const { onAddInfo, band } = this.props;
      const id = band.id;
      const node = this.refs.place;
      const node2 = this.refs.date;
      const node3 = this.refs.price;
      const title =  node.value.trim();
      const date =  node2.value.trim();
      const price =  node3.value.trim();
      if (title === '' | date === '' | price === '' ){
        alert('Missing input'); 
      }else{    
        onAddInfo(title, date, price, id);
      }

      node.value = '';
      node2.value = '';
      node3.value = '';
    }

  handelOnclickAdd(){

    this.setState({
      editting: true 
    
    }
  );
  }

  render() {
    const { informations } = this.props;
    

    return (
      <div className="container">
          <h3>Information</h3>
          <h5>Click on a concert to confirm you are going</h5>
          <ul>
            {
              informations.map( (information, index) => <div ><button className={information.asistir?'btn btn-success pull-right':'btn btn-warning pull-right'} type="button" onClick={e => this.handleAsistButtonClick(e, information.id)}>GO?</button><li key={index}>{information.title} on {information.date} at {information.price}€</li><br/></div> )
            }
         </ul>

          <div className={` ${this.state.editting ? 'input-group '  : 'hidden'}` }>
            <input  type="text"  className="form-control" placeholder="Add place" ref="place" />
            <input  type="date"  className="form-control" placeholder="Add date" ref="date" />
            <input  type="number"  className="form-control" placeholder="Add price" ref="price" />
            <span className="input-group-btn">
              <button className="btn btn-info" type="button" onClick={e => this.handleAddButtonClick(e)}><span className="glyphicon glyphicon-plus" /></button>
            </span>
          </div>
            
          <div className={` ${this.state.editting ? 'hidden' : 'AddPlace'}` }>

            <button className="btn btn-info pull-right" onClick={() => this.handelOnclickAdd() }>AddPlace</button>
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