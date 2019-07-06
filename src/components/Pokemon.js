import React from 'react';


export default function({index, name, types, onClick}) {
  const image = `http://cursist38.reacollege.eu/sprites/${index}.png`;

  return ( 
    <div onClick={onClick} className="pokemonCard">
      <div className="pokemonCardTop">
        <div className="pokemonName">
         <h2>#{index.padStart(3, '00')} {name}</h2>
        </div>
        <div className="typing">
          {types.map(({slot, type: {name}}) => (
            <span key={name}>{name}</span>
          ))}
        </div>
       <div className="pokemonIndex">
          <h2>{}</h2>
        </div>
      </div>
      <div className="pokemonCardBot">
        <div className="pokemonSprite">
          <img src={image} alt={name +'sprite'} />
        </div>
      </div>
    </div>
  );
};