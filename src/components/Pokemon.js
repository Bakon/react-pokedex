import React from 'react';

export default class Pokemon extends React.Component {
  state = {
    pokedexEntry: '',
  };

  componentDidMount() {
    const fetchData = () => {
      fetch(this.props.pokemon.species.url)
        .then(res => res.json())
        .then(json => {
          const entries = json.flavor_text_entries;
          const index = entries.length < 55 ? 1 : 2;
          this.setState({
            pokedexEntry: entries[index].flavor_text,
          });
        });
    };

    fetchData();
  }
  render() {
    const {pokedexEntry} = this.state;
    const {name, index, types, stats, height, weight, abilities} = this.props.pokemon;

    return (
      <React.Fragment>
        <div className="pokemonCardTop">
          <h3>#{index.padStart(3, '00')}</h3>
          <h3>{name}</h3>
        </div>
        <div className="pokemonCardBot">
          <div className="typing">
            {types.map(({type: {name}}) => (
              <span className={name} key={name} />
            ))}
          </div>
          <div className="pokemonSprite">
            <img
              src={`http://cursist38.reacollege.eu/sprites/${index}.png`}
              alt={name + 'sprite'}
            />
            <img
              src={`http://cursist38.reacollege.eu/sprites/shiny/${index}.png`}
              alt={name + 'sprite'}
            />
          </div>
          <div className="pokemonHeightWeight">
            <span>{'Height: ' + height / 10 + ' Metre'}</span>
            <span>{'Weight: ' + weight / 10 + ' Kilogram'}</span>
          </div>
          <div className="pokemonEntry">
            <p>{pokedexEntry}</p>
          </div>
          <div className="pokemonStats">
            {stats.map(stat => (
              <div className={stat.stat.name} key={stat.stat.name}>
                <span>{stat.stat.name}</span>
                <div className="progress">
                  <div
                    style={{width: stat.base_stat / 2 + '%'}}
                    className={stat.stat.name + 'value'}
                  >
                    <span>{stat.base_stat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pokemonAbilities">
            {abilities.reverse().map(ability => (
              <p key={ability.ability.name}>
                {ability.is_hidden
                  ? `Hidden ability: ${ability.ability.name}`
                  : `Ability: ${ability.ability.name}`}
              </p>
            ))}
          </div>
          <p>Click anywhere to close the screen!</p>
        </div>
      </React.Fragment>
    );
  }
}
