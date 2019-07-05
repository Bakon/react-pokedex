import React, {Fragment} from 'react';

import Pokemon from './Pokemon'

export default class PokemonCard extends React.Component {
  state = {
    index: this.props.url.split('/')[6].toString(),
    name: this.props.name,
    types: [],
    imageUrl: `http://cursist38.reacollege.eu/sprites/${this.props.url.split('/')[6]}.png`
  }

  async componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.index}`)
      .then(res => res.json())
      .then(data => this.setState(prevState => ({
        types: [...prevState.types, data.types]
      })))
    };


  render() {
    const {index, name, imageUrl, types} = this.state;

    return (
      <div className="pokemonCard">
        <div className="pokemonCardTop">
          <div className="pokemonName">
            <h2>{name}</h2>
          </div>
           <div className="pokemonIndex">
            <h2>{index.padStart(3, '00')}</h2>
          </div>
        </div>
        {types ?
          <Fragment>
            {types.map(type => (
              <Pokemon 
                key={index} 
                name={name}
                types={types}
                imageUrl={imageUrl}
              />
            ))}
          </Fragment>
        : <span>Loading</span>}
        <div className="pokemonCardBot">
          <div className="pokemonSprite">
            <img src={imageUrl} alt={name +'sprite'} />
          </div>
        </div>
      </div>
    );
  }
}