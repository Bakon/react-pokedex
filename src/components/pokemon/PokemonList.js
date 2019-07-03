import React from 'react';

import PokemonCard from './PokemonCard';


export default class PokemonList extends React.Component { 
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=964',
    pokemon: null // reserve value for fetch result
  };

  async componentDidMount() {
    fetch(this.state.url)
      .then(res => res.json())
      .then(data => this.setState({ pokemon: data['results'] }))
  };

  render() {
    const {pokemon} = this.state;

    return (
      <React.Fragment>
        {pokemon ? 
          <React.Fragment>
            {pokemon.map(pokemon => (
              <PokemonCard 
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </React.Fragment>
        : <h2>Loading</h2>}
      </React.Fragment>
    );
  }
}