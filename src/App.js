import React from 'react';
import './styles/App.sass';
import './styles/PokemonTyping.sass';

import PokemonList from './components/PokemonList';

export default class Pokedex extends React.Component {
  state = {
    isShiny: false
  };

  render() {
    const toggleShiny = () => {
      return this.state.isShiny
        ? this.setState({ isShiny: false })
        : this.setState({ isShiny: true });
    };

    return (
      <div className="container">
        <header className="header">
          <a href="https://julicolo.github.io/react-pokedex">Pokedex</a>
          <button onClick={toggleShiny}>Toggle Shinies!</button>
        </header>
        <div className="main">
          <PokemonList 
            isShiny={this.state.isShiny}
           />
        </div>
      </div>
    );
  };
};
