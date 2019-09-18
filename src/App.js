import React from 'react';

import Pokemon from './components/Pokemon';
import PokemonCard from './components/PokemonCard';

import './styles/App.sass';
import './styles/PokemonTyping.sass';

const apiHost =
  process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : 'https://pokeapi.co';

export default class Pokedex extends React.Component {
  state = {
    url: `${apiHost}/api/v2/pokemon/?limit=50`,
    offset: 0,
    allPokemon: null,
    isShiny: false,
    highlightedPokemon: null,
  };

  componentDidMount() {
    const fetchData = () => {
      this.setState({loading: true});

      return fetch(this.state.url)
        .then(res => res.json())
        .then(json => {
          const promises = json.results.map(({name, url}) => {
            return fetch(url)
              .then(res => res.json())
              .then(data => ({
                name,
                url,
                index: url
                  .replace(/\/$/, '')
                  .split('/')
                  .pop(),
                ...data,
                types: data.types.sort((a, b) => a.slot - b.slot),
              }));
          });
          return Promise.all(promises).then(pokemon => {
            this.setState({loading: false});
            return pokemon;
          });
        });
    };

    window.addEventListener('scroll', event => {
      if (this.state.loading || this.state.doneLoading) return;

      const height = document.documentElement.offsetHeight;
      const scrolled = window.scrollY + window.innerHeight;

      if (height * 0.85 <= scrolled) {
        this.setState(state => {
          const newOffset = state.offset + 50;

          return {
            ...state,
            offset: newOffset,
            url: `${apiHost}/api/v2/pokemon/?limit=25&offset=${newOffset}`,
          };
        });

        fetchData().then(pokemon =>
          this.setState(prevState => ({
            doneLoading: pokemon.length === 0,
            allPokemon: [...prevState.allPokemon, ...pokemon],
          }))
        );
      }
    });
    fetchData().then(allPokemon => this.setState({allPokemon}));
  }

  render() {
    const {allPokemon, highlightedPokemon, isShiny} = this.state;

    return (
      <div className="container">
        <header className="header">
          <h3 onClick={() => this.setState({highlightedPokemon: null})}>Pokedex</h3>
          <button onClick={() => this.setState({isShiny: !isShiny})}>Toggle Shinies!</button>
        </header>
        <div
          className="main"
          onClick={event => {
            if (highlightedPokemon !== null) this.setState({highlightedPokemon: null});
          }}
        >
          {highlightedPokemon ? (
            <div className="highlighted">
              <Pokemon isShiny={isShiny} pokemon={highlightedPokemon} />
            </div>
          ) : null}
          {allPokemon ? (
            allPokemon.map(pokemon => (
              <div
                className="pokemonCard"
                key={pokemon.name}
                onClick={() => this.setState({highlightedPokemon: pokemon})}
              >
                <PokemonCard isShiny={isShiny} {...pokemon} />
              </div>
            ))
          ) : (
            <h2>Loading Pokedex</h2>
          )}
        </div>
      </div>
    );
  }
}
