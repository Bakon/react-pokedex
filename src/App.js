import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import PokemonList from './components/PokemonList';
import Pokemon from './components/Pokemon';

import './styles/App.sass';
import './styles/PokemonTyping.sass';

const path = process.env.NODE_ENV === 'development' ? '/' : 'https://julicolo.github.io/';

const apiHost =
  process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : 'https://pokeapi.co';

export default class Pokedex extends React.Component {
  state = {
    url: `${apiHost}/api/v2/pokemon/?limit=25`,
    offset: 0,
    allPokemon: null,
    isShiny: false,
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
          const newOffset = state.offset + 25;

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
    return (
      <Router>
        <div className="container">
          <header className="header">
            <a href="https://julicolo.github.io/react-pokedex">Pokedex</a>
            <button onClick={() => this.setState({isShiny: !this.state.isShiny})}>
              Toggle Shinies!
            </button>
          </header>
          <div className="main">
            <Switch>
              <Route
                exact
                path={path}
                render={() => (
                  <PokemonList isShiny={this.state.isShiny} allPokemon={this.state.allPokemon} />
                )}
              />
              <Route exact path={`${path}/pokemon/:name`} component={Pokemon} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
