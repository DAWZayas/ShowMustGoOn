import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router';



export default class Calend extends Component {

  constructor(props){
    super(props);
    this.state={
      month: new Date(Date.now()).getMonth(),
      year: new Date(Date.now()).getFullYear(),
      day: new Date(Date.now()).getDate(),
      week1: [],
      week2: [],
      week3: [],
      week4: [],
      week5: [],
      months: ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    };
    this.cal();

    
  }






  
  getDiasPorMes(mes, anno){
      switch(mes){
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
          return 31;
          
        case 3:
        case 5:
        case 8:
        case 10:
          return 30;
          
        case 1:
          if (((anno%100 == 0) && (anno%400 == 0)) || ((anno%100 != 0) && (anno%4 == 0))){
            return 29;
          }else{
            return 28;
          }
          
        default:
        
      }
  }

  cal(){
        
      var diaSemana = new Date(this.state.year, this.state.month, 1).getDay();
      var s= new Date(this.state.year, this.state.month, 1).toLocaleString();
      var diasEnMes = this.getDiasPorMes(this.state.month);

      for (var y = 0; y < diaSemana - 1; y++)  {this.state.week1.push('');}
      
      for (var i = 1; i <= diasEnMes + 1; i++) {
          let dias = diaSemana + i ;
          if (dias > 29) {this.state.week5.push({day: i, infos: ''});}
          if (dias > 22 && dias <= 29) {this.state.week4.push({day: i, infos: ''});}
          if (dias > 15 && dias <= 22) {this.state.week3.push({day: i, infos: ''});}
          if (dias > 8 && dias <= 15) {this.state.week2.push({day: i, infos: ''});}
          if (dias <= 8) {this.state.week1.push({day: i, infos: ''});}
      }
  }




  render() {
    return(
      <div>
        <h3>{this.state.months[this.state.month]}</h3>
        <table>
          <tr><th>mon</th><th>tue</th><th>wen</th><th>thu</th><th>fri</th><th>sat</th><th>sun</th></tr>
            <tr>
            
            {
              this.state.week1.map( (day, index) =>  <td>{day.day}</td> )
            }
            </tr>
            <tr>
            {
              this.state.week2.map( (day, index) =>  <td>{day.day}</td> )
            }
            </tr>
            <tr>
            {
              this.state.week3.map( (day, index) =>  <td>{day.day}</td> )
            }
            </tr>
            <tr>
            {
              this.state.week4.map( (day, index) =>  <td>{day.day}</td> )
            }
            </tr>
            <tr>
            {
              this.state.week5.map( (day, index) =>  <td>{day.day}</td> )
            }
            </tr>
        </table>

        
      </div>
    );
  }
}



Calend.propTypes = {
};