import React from 'React';
export default class showConcerts extends component{
	contructor(props){
		super(props);
	}

	initialState(){
		this.setState({
				inside: '',
				musics: [{id:0,title:'rock'},{id:1,title:'indie'},{id:2,title:'metal'}]
				concerts: [{id:0, place:'Madrid'},{id:1, place:'La Rioja'},{id:2, place:'Quijorna Fest'}]
			});
	}

	render(){
		<ul>
			{for (var i = this.state.concerts.length - 1; i >= 0; i--) 
				{
					{this.state.concerts[i].id === this.state.inside.id ? <li>this.state.concerts[i].place</li> : 'No concerts'}
			 	};
			}
		</ul>
	}


}