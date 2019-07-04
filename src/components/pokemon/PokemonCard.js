import React from 'react';

export default class PokemonCard extends React.Component {
  state = {
    id: this.props.url.split('/')[6],
    name: this.props.name,
    url: `https://github.com/Julicolo/react-pokedex/tree/master/src/sprites/${this.props.url.split('/')[6]}.png`,
  }

  render() {
    const {name, url, id} = this.props;
    console.log(this.state.id, this.state.name);

    return (
      <div className="pokemonCard">
        <div className="pokemonName">
          <h2>{name}</h2>
        </div>
        <div className="pokemonSprite">
          <img src={this.state.url} />
        </div>
      </div>
    );
  }
}