import React from 'react';
import {Link} from 'react-router-dom';

export default function({...props}) {
  const {isShiny, index, name, types} = props;
  const image = isShiny
    ? `http://cursist38.reacollege.eu/sprites/shiny/${index}.png`
    : `http://cursist38.reacollege.eu/sprites/${index}.png`;

  return (
    <div className="pokemonCard">
      <Link to={`/pokemon/${name}`}>
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
            <img src={image} alt={name + 'sprite'} />
          </div>
        </div>
      </Link>
    </div>
  );
}
