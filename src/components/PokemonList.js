import React, {Fragment} from 'react';
import Pokemon from './Pokemon';
import PokemonHighlighter from './PokemonHighlighter';

const apiHost = process.env.NODE_ENV === 'development'
  ? 'http://localhost:1337'
  : 'https://pokeapi.co';

export default class PokemonList extends React.Component { 
  state = {
    pokemon: null,
    currentPokemon: null,
    offset: 0,
    url: `${apiHost}/api/v2/pokemon/?limit=25`
  };

  componentDidMount() {
    const fetchData = () => {
      this.setState({ loading: true });

      return fetch(this.state.url)
        .then(res => res.json())
        .then(json => {
          const promises = json.results.map(({name, url}) => {
            return fetch(url)
              .then(res => res.json())
              .then(data => ({
                name, 
                url, 
                index: url.replace(/\/$/, '').split('/').pop(), 
                ...data,
                types: data.types.sort((a, b) => a.slot - b.slot)
              }))
          });
          return Promise.all(promises)
            .then(pokemon => {
              this.setState({ loading: false });
              return pokemon;
            });
        })
    };

    window.addEventListener('scroll', event => {
      if (this.state.loading || this.state.doneLoading) return;

      const height = document.documentElement.offsetHeight;
      const scrolled = window.scrollY + window.innerHeight;

      if ((height * .85) <= scrolled) {
        this.setState(state => {
          const newOffset = state.offset + 25;

          return {
            ...state, 
            offset: newOffset,
            url: `${apiHost}/api/v2/pokemon/?limit=25&offset=${newOffset}`
          }
        });

        fetchData()
          .then(pokemon =>
            this.setState(prevState => ({ 
              doneLoading: pokemon.length === 0,
              pokemon: [...prevState.pokemon, ...pokemon] 
            }))
          );
      }
    });
    fetchData().then(pokemon => this.setState({ pokemon, currentPokemon: pokemon[24] }));

    // window.addEventListener('resize', () => {
    //   console.log(window.innerWidth)
    // });
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
                  isShiny={this.props.isShiny}
                  {...pokemon}
                />
              ))}
            </div>
            <div className="highlighter">
              {currentPokemon ?
                <PokemonHighlighter
                  key={currentPokemon}
                  isShiny={this.props.isShiny}
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