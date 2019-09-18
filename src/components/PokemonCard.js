import React from 'react';

export default function PokemonCard({isShiny, index, name, types}) {
  const imageUrl = isShiny
    ? `http://cursist38.reacollege.eu/sprites/shiny/${index}.png`
    : `http://cursist38.reacollege.eu/sprites/${index}.png`;

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
          <img src={imageUrl} alt={name + 'sprite'} />
        </div>
      </div>
    </React.Fragment>
  );
}
