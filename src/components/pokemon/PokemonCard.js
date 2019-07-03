import React from 'react';

export default class PokemonCard extends React.Component {
  state = {
    name: '',
    image: '',
    id: ''
  }


  render() {
    const {name, url} = this.props;

    return (
      <div className="pokemonCard">
        <div className="pokemonName">
          <h2>{name}</h2>
        </div>
        <div className="pokemonSprite">
          
        </div>
      </div>
    );
  }
}