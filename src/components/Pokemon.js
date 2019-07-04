import React from 'react';

export default class Pokemon extends React.Component { 
  state = {
    name: '',
    pokemonIndex: '',
    imageUrl: ''
  };

  async componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.index}`)
    .then(res => res.json)
    .then(data => console.log(data))
  };

  render() {
    return (
      <div className="details">

      </div>
    );
  }
}