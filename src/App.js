import React, {Fragment as F} from 'react';
import './styles/app.sass';

export default class Pokedex extends React.Component {
  state = {
    pokemon: {}
  };

  componentDidMount() {
    const getAllPokemons = 'https://pokeapi.co/api/v2/pokemon/?limit=964';  

    fetch(getAllPokemons)
      .then(res => res.json())
      .then(data => this.setState({ pokemons: data }))

    console.log(this.state.pokemon);
  };


  render() {
    return (
      <div className="container">
        <h1>Pokedex</h1>
      </div>
    );
  }
}