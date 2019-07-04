import React from 'react';

export default class PokemonCard extends React.Component {
  state = {
    index: this.props.url.split('/')[6].toString(),
    name: this.props.name,
    type: null,
    imageUrl: `http://localhost:8000/${this.props.url.split('/')[6]}.png`
  }

  async componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.index}`)
      .then(res => res.json())
      // .then(hello => console.log(hello['types'][0] ))
      // .then(data => this.setState({ type: data['types']  }))

    }

  render() {
    const {index, name, imageUrl} = this.state;

    return (
      <div className="pokemonCard">
        <div className="pokemonCardTop">
          <div className="pokemonName">
            <h2>{name}</h2>
          </div>
           <div className="pokemonIndex">
            <h2>{index.padStart(3, '00')}</h2>
          </div>
        </div>
        <div className="typing">
          {this.state.type}
        </div>
        <div className="pokemonCardBot">
          <div className="pokemonSprite">
            <img src={imageUrl} alt={name +'sprite'} />
          </div>
        </div>
      </div>
    );
  }
}