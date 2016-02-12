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

  componentDidReciveProps(){

    this.forceUpdate();
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
          if (((anno%100 === 0) && (anno%400 === 0)) || ((anno%100 !== 0) && (anno%4 === 0))){
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
      var diasEnMes = this.getDiasPorMes(this.state.month, this.state.year);      

      for (var y = 0; y < diaSemana; y++)  {
        this.state.week1[y]='';
      }
      
      for (var i = 1; i < diasEnMes + 1; i++) {
        let {info} = this.props;
        let infoDay = [];
        info.forEach(
            (inf) => new Date(inf.date).getDate()===i && new Date(inf.date).getMonth()===this.state.month && new Date(inf.date).getFullYear()===this.state.year?
                infoDay.push(inf) : ''
          );
        let dayPos = i + diaSemana;
        if (dayPos < 8) {this.state.week1[dayPos]={day: i, infos: infoDay};}
        else{
          if (dayPos < 15) {this.state.week2[dayPos]={day: i, infos: infoDay};}
          else{
            if (dayPos < 22) {this.state.week3[dayPos]={day: i, infos: infoDay};}
            else{
              if (dayPos < 29) {this.state.week4[dayPos]={day: i, infos: infoDay};}
              else{
                if (dayPos < 36) {this.state.week5[dayPos]={day: i, infos: infoDay};}
                else{
                  if (dayPos < 43) {this.state.week6[dayPos]={day: i, infos: infoDay};}
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
    const {bands} = this.props;
    this.cal();


    return(
      <div>
        <h3>
          <button className="btn btn-warning" type="button" onClick={e => this.handleMonthLess(e)}>
            <span className="glyphicon glyphicon-chevron-left"/>
          </button>
          {this.state.months[this.state.month]} : {this.state.year}
          <button className="btn btn-warning" type="button" onClick={e => this.handleMonthMore(e)}>
            <span className="glyphicon glyphicon-chevron-right" />
          </button>
        </h3>
        <table className="calendar container-fluid">
          <tbody>
          <tr><td>sun</td><td>mon</td><td>tue</td><td>wen</td><td>thu</td><td>fri</td><td>sat</td></tr>
            <tr>
            {
              this.state.week1.map( (d, index) =>   <td key={index}><div className="calendNumber"><p>{d.day}</p></div><div className="calendInfo"><br/>{d.infos!==undefined?d.infos.map( (inf) => {return <Link to={`/band/${inf.band}`} className="link">{bands.map((band)=>{if(band.id===inf.band)return band.title;})}: {inf.title}</Link>;}):''}</div></td> )
            }
            </tr>
            <tr>
            {
              this.state.week2.map( (d, index) =>  <td key={index}><div className="calendNumber"><p>{d.day}</p></div><div className="calendInfo"><br/>{d.infos!==undefined?d.infos.map( (inf) => {return <Link to={`/band/${inf.band}`} className="link" >{bands.map((band)=>{if(band.id===inf.band)return band.title;})}: {inf.title}</Link>;}):''}</div></td> )
            }
            </tr>
            <tr>
            {
              this.state.week3.map( (d, index) =>  <td key={index}><div className="calendNumber"><p>{d.day}</p></div><div className="calendInfo"><br/>{d.infos!==undefined?d.infos.map( (inf) => {return <Link to={`/band/${inf.band}`} className="link">{bands.map((band)=>{if(band.id===inf.band)return band.title;})}: {inf.title}</Link>;}):''}</div></td> )
            }
            </tr>
            <tr>
            {
              this.state.week4.map( (d, index) =>  <td key={index}><div className="calendNumber"><p>{d.day}</p></div><div className="calendInfo"><br/>{d.infos!==undefined?d.infos.map( (inf) => {return <Link to={`/band/${inf.band}`} className="link">{bands.map((band)=>{if(band.id===inf.band)return band.title;})}: {inf.title}</Link>;}):''}</div></td> )
            }
            </tr>
            <tr>
            {
              this.state.week5.map( (d, index) =>  <td key={index}><div className="calendNumber"><p>{d.day}</p></div><div className="calendInfo"><br/>{d.infos!==undefined?d.infos.map( (inf) => {return <Link to={`/band/${inf.band}`} className="link">{bands.map((band)=>{if(band.id===inf.band)return band.title;})}: {inf.title}</Link>;}):''}</div></td> )
            }
            </tr>
            <tr>
            {
              this.state.week6.map( (d, index) =>  <td key={index}><div className="calendNumber"><p>{d.day}</p></div><div className="calendInfo"><br/>{d.infos!==undefined?d.infos.map( (inf) => {return <Link to={`/band/${inf.band}`} className="link">{bands.map((band)=>{if(band.id===inf.band)return band.title;})}: {inf.title}</Link>;}):''}</div></td> )
            }
            </tr>
          </tbody>
        </table>

        
      </div>
    );
  }
}



Calend.propTypes = {
    bands: PropTypes.array,
    info: PropTypes.array
};