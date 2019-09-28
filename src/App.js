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
            url: `${apiHost}/api/v2/pokemon/?limit=50&offset=${newOffset}`,
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
          <a
            href="https://github.com/julicolo/react-pokedex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 16 16" version="1.1">
              <path
                color="white"
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
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
