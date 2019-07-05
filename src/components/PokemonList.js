import React, {Fragment} from 'react';

import PokemonCard from './PokemonCard';


export default class PokemonList extends React.Component { 
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/',
    pokemon: null
  };

  async componentDidMount() {
    fetch(this.state.url)
      .then(res => res.json())
      .then(data => this.setState({ pokemon: data.results }))
  };

  render() {
    const {pokemon} = this.state;

    return (
      <Fragment>
        {pokemon ? 
          <Fragment>
            {pokemon.map(pokemon => (
              <PokemonCard 
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </Fragment>
        : <h2>Loading</h2>}
      </Fragment>
    );
  }
}