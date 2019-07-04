import React from 'react';
import './styles/App.sass';

import Header from './components/layout/Header';
import PokemonList from './components/pokemon/PokemonList';
// import PokemonCard from './components/pokemon/PokemonCard';

export default class Pokedex extends React.Component {
  render() {

    return (
      <div className="container">
        <Header />
        <main className="main">
          <PokemonList />
        </main>
      </div>
    );
  }
}