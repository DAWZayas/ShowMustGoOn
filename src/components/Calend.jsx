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
      week6: [],
      months: ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    };

    
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
          break;
          
        case 3:
        case 5:
        case 8:
        case 10:
          return 30;
          break;
          
        case 1:
          if (((anno%100 == 0) && (anno%400 == 0)) || ((anno%100 != 0) && (anno%4 == 0))){
            return 29;
            break;
          }else{
            return 28;
            break;
          }
          
        default:
        break;
        
      }
  }

  cal(){

        
      var diaSemana = new Date(this.state.year, this.state.month, 1).getDay();
      var s= new Date(this.state.year, this.state.month, 1).getDay();
      var diasEnMes = this.getDiasPorMes(this.state.month, this.state.year);      

      for (var y = 0; y < diaSemana; y++)  {
        this.state.week1.push('');
      }
      
      for (var i = 1; i < diasEnMes + 1; i++) {
          if (this.state.week1.length < 7) {this.state.week1.push({day: i});}
          else{
            if (this.state.week2.length < 7) {this.state.week2.push({day: i});}
            else{
              if (this.state.week3.length < 7) {this.state.week3.push({day: i});}
              else{
                if (this.state.week4.length < 7) {this.state.week4.push({day: i});}
                else{
                  if (this.state.week5.length < 7 && i > 7*4 - diaSemana + 1 && this.state.week5.filter((d)=>d.day===i).length===0) {this.state.week5.push({day: i});}
                  else{
                    if (this.state.week6.length < 7 && i > 7*5 - diaSemana + 1 && this.state.week6.filter((d)=>d.day===i).length===0) { this.state.week6.push({day: i});}
                  }
                }
              }
            }
          }
         
      }
  }

  handleMonthLess(){
    this.setState({
        week1:[],
        week2:[],
        week3:[],
        week4:[],
        week5:[],
        week6:[]
    });
    let newMonth=this.state.month===0?11:this.state.month-1;
    if (newMonth===11) {this.setState({year: this.state.year-1, month: newMonth});}
    else {this.setState({month: newMonth});}
  }

  handleMonthMore(){
    this.setState({
        week1:[],
        week2:[],
        week3:[],
        week4:[],
        week5:[],
        week6:[]
    });
    let newMonth=this.state.month===11?0:this.state.month+1;
    if (newMonth===0) {this.setState({year: this.state.year+1, month: newMonth});}
    else {this.setState({month: newMonth});}
  }



  render() {
    this.cal();
    return(
      <div>
        <h3>
          <button className="btn btn-info" type="button" onClick={e => this.handleMonthLess(e)}>
            <span className="glyphicon glyphicon-plus" />
          </button>
          {this.state.months[this.state.month]} : {this.state.year}
          <button className="btn btn-info" type="button" onClick={e => this.handleMonthMore(e)}>
            <span className="glyphicon glyphicon-plus" />
          </button>
        </h3>
        <table className="">
          <tr><th>sun</th><th>mon</th><th>tue</th><th>wen</th><th>thu</th><th>fri</th><th>sat</th></tr>
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
            <tr>
            {
              this.state.week6.map( (day, index) =>  <td>{day.day}</td> )
            }
            </tr>
        </table>

        
      </div>
    );
  }
}



Calend.propTypes = {
};