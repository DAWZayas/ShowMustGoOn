import {concerts} from '../utils/examples';

var React = require('react');

class ShowConcerts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPlace: '',
      newBand:'',
      newPrice:'',
      concerts:concerts
    };

    this.addConcert = this.addConcert.bind(this);
    this.clearList = this.clearList.bind(this);
    this.inputPlace = this.inputPlace.bind(this);
    this.inputBand = this.inputBand.bind(this);
    this.inputPrice = this.inputPrice.bind(this);
  }

  inputPlace(event) {
    this.setState({ newPlace: event.target.value });
  }

  inputBand(event){
    this.setState({ newBand: event.target.value });
  }

  inputPrice(event){
    this.setState({ newPrice: event.target.value });
  }


  addConcert() {
    if(this.state.newPlace && this.state.newBand && this.state.newPrice) {
      let newConcertItem = { place: this.state.newPlace, band: this.state.newBand, price: this.state.newPrice};
      this.setState({
        concerts: this.state.concerts.concat([newConcertItem])
      });
    }
  }

  clearList() {

    this.setState({concerts: [] });
  }

  render() {
    let concertsComponents = [],
    newPlaceInput,
    newConcertAddButton,
    clearListButton,
    newBandInput,
    newPriceInput;

    for(var index = 0; index < this.state.concerts.length; index++) {
      concertsComponents.push(
        <ShowSingleConcert
        concert={this.state.concerts[index]}
        />
        );
    }

    //MIRAR VALUE PARA QUE NOS SALGA POR DEFECTO Y NO NECESITEMOS BORRAR.
    newPlaceInput = <input className='new-item' type='text' /*Mirar value*/ onChange={this.inputPlace}/>;
    newBandInput  = <input className='new-item' type='text' /*Mirar value*/ onChange={this.inputBand}/>;
    newPriceInput  = <input className='new-item' type='number' /*Mirar value*/ onChange={this.inputPrice}/>;
    newConcertAddButton = <button className='add-product' onClick={this.addConcert}>Add new concert</button>;
    clearListButton = <button onClick={this.clearList} className='clear-list'>Clear the List</button>;

    return (
      <div>
      <ul>
        {concertsComponents}
      </ul>
        {newPlaceInput}
        {newBandInput}
        {newPriceInput}
        {newConcertAddButton}
        {clearListButton}
      </div>
      );
  }
}

class ShowSingleConcert extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<li><b><u>place:</u></b> {this.props.concert.place}  <b><u>band:</u></b> {this.props.concert.band} <b><u>price:</u></b> {this.props.concert.price}€</li>);
  }
}

export default ShowConcerts;