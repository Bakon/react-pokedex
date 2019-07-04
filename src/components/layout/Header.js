import React from 'react';

export default class Header extends React.Component { 
  render() {
    return (
      <header className="header">
        <a href="https://julicolo.github.io/react-pokedex">Pokedex</a>
        <input type="text" placeholder="Search for a Pokemon!" />
      </header>
    );
  }
}