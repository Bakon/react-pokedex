import React from 'react';
import './styles/App.sass';

import Header from './components/layout/Header';
// import PokemonCard from './components/pokemon/PokemonCard';
import PokemonList from './components/pokemon/PokemonList';

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