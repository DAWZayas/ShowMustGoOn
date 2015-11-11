import React from 'React';
export default class showMusics extends component{
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

	handleClick(music){
		this.setState({inside: music});
		showConcerts();
	}

	render(){
		<div>
			{for (var i = this.state.musics.length - 1; i >= 0; i--) 
				{
					{<button onClick={ handleClick(this.state.musics[i])}>this.state.musics[i].title</button>}
			 	};
			}
		</div>
	}


}