import React from 'react';
import './styles/App.sass';
import './styles/PokemonTyping.sass';

import PokemonList from './components/PokemonList';
// PokemonList is responsible for fetching all the data and formatting it
// Todo: Add 420 blaze it then easter egg


export default class Pokedex extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <a href="https://julicolo.github.io/react-pokedex">Pokedex</a>
          <input type="text" placeholder="Search for a Pokemon!" />
        </header>
        <div className="main">
          <PokemonList />
        </div>
      </div>
    );
  };
};