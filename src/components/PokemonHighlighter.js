import React from 'react';


export default function({index, name, types, onClick}) {
  const image = `http://cursist38.reacollege.eu/sprites/${index}.png`;

  return ( 
    <div className="highlighted">
      <div className="pokemonSprite">
       <img src={image}  alt={name + 'sprite'} />
      </div>
    </div>
  );
};