import React from 'react';

export default function({index, name, types}) {
  const image = `http://cursist38.reacollege.eu/sprites/${index}.png`;

  return ( 
    <div className="pokemonCard">
      <div className="pokemonCardTop">
        <h3>{name}</h3>
        <h3>#{index.padStart(3, '00')}</h3>
      </div>
      <div className="typing">
        {types.map(({slot, type: {name}}) => (
          <span className={name} key={name}>
          </span>
        ))}
      </div>
      <div className="pokemonSprite">
        <img src={image} alt={name +'sprite'} />
      </div>
    </div>
  );
};