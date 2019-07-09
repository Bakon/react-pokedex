import React from 'react';

export default function({index, name, types, stats}) {
  const image = `http://cursist38.reacollege.eu/sprites/${index}.png`;

  return ( 
    <div className="pokemonCard">
      <div className="pokemonCardTop">
        <h3>{name}</h3>
        <h3>#{index.padStart(3, '00')}</h3>
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
        <div className="pokemonStats">
          {stats.map(stat => (
            <div
              className={stat.stat.name} 
              key={stat.stat.name}
            >
              <span>{stat.stat.name}</span>
              <div className="progress">
                <div 
                  style={{ width: stat.base_stat / 2 + '%'  }}
                  className={stat.stat.name + "value"}
                >
                 <span>{stat.base_stat}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};