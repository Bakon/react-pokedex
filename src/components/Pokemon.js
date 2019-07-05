import React, {Fragment} from 'react';

export default class Pokemon extends React.Component { 
  state = {
    name: this.props.name,
    pokemonIndex: this.props.index,
    imageUrl: this.props.imageUrl,
    types: this.props.types
  };

  // async componentDidMount() {
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.index}`)
  //   .then(res => res.json)
  //   .then(data => console.log(this.props.index))
  // };

  render() {
    const {name, pokemonIndex, imageUrl, types} = this.state;
    // console.log(types[0][0].type.name)
    console.log(types[0][0].type.name);

    return (
      <div className="details">
        {types ?
          <Fragment>
            {types.forEach(array => (
             array.map(type => (
                <span>{type}</span>
              ))
            ))}
          </Fragment>
        : <span>Loading</span>}
      </div>
    );
  }
}