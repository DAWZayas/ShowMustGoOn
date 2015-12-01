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

  render() {
    const { informations } = this.props;
    

    return (
      <div className="container">
          <h3>Information</h3>
          <h5>Click on a concert to confirm you are going</h5>
          <ul className="col-lg-12 hero">
            {
              informations.map( (information, index) => <button key={index} className={information.asistir?'btn btn-success':'btn btn-info'} type="button" onClick={e => this.handleAsistButtonClick(e, information.id)}>{information.title}</button> )
            }
         </ul>
      </div>
    );
  }
}

InfoList.propTypes = {
  informations: PropTypes.array,
  band: PropTypes.object.isRequired,
  onSelectedConcert: PropTypes.func.isRequired
};

InfoList.defaultProps = {
  informations: [],
  band: {}
};