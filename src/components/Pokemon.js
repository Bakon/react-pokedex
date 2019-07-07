import React from 'react';

export default function({index, name, types, onClick}) {
  const image = `http://cursist38.reacollege.eu/sprites/${index}.png`;

  return ( 
    <div onClick={onClick} className="pokemonCard">
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
          <img src={image} alt={name +'sprite'} />
        </div>
      </div>
    </div>
  );
};