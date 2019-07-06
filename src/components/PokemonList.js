import React, {Fragment} from 'react';
import Pokemon from './Pokemon';
import PokemonHighlighter from './PokemonHighlighter';

const apiHost = process.env.NODE_ENV === 'development'
  ? 'http://localhost:1337'
  : 'https://pokeapi.co';

const limit = process.env.NODE_ENV === 'development'
  ? '?limit=151'
  : '?limit=802';

export default class PokemonList extends React.Component { 
  state = {
    pokemon: null,
    currentPokemon: null,
    url: `${apiHost}/api/v2/pokemon/${limit}`,
  };

  componentDidMount() {
    fetch(this.state.url)
      .then(res => res.json())
      .then(json => {
        const promises = json.results.map(({name, url}) => {
          return fetch(url)
            .then(res => res.json())
            .then(data => ({name, url, index: url.replace(/\/$/, '').split('/').pop(), ...data}))
        });
        return Promise.all(promises);
      })
      .then(pokemon => this.setState({ pokemon, currentPokemon: pokemon[24] }));
  };

  render() {
    const {pokemon: allPokemon, currentPokemon} = this.state;

    return (
      <Fragment>
        {allPokemon ? 
          <Fragment>
            <div className="pokedexContainer">
              {allPokemon.map(pokemon => (
                <Pokemon
                  onClick={() => {
                    this.setState({ currentPokemon: pokemon });
                  }}
                  key={pokemon.name}
                  {...pokemon}
                />
              ))}
            </div>
            <div className="highlighter">
              {currentPokemon ?
                <PokemonHighlighter
                  key={currentPokemon}
                  {...currentPokemon}
                />
              : this.setState({currentPokemon: 25})}
            </div>
          </Fragment>
        : <h2>Loading Pokedex</h2>}
      </Fragment>
    );
  };
};