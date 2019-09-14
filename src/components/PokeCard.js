import React from 'react';

const PokeCard = props => {
  const {pokeData} = props;
  
  return ( 
    <div className='poke-card'>
      <div className='poke-card-left'>
        <p>{pokeData.name.charAt(0).toUpperCase() + pokeData.name.substring(1)} Lv. {Math.round(Math.random() * 100)}</p>
        <div className='poke-stats'>
          <p>DEX NO. {(parseInt(pokeData.id) < 10 ? '0' : '') + pokeData.id}</p>
          {pokeData.stats.map((attr, index) => <p key={index}>{attr.stat.name.toUpperCase()} {attr.base_stat}</p>)}
        </div>
      </div>
      <div className='poke-card-right'>
        <img src={pokeData.sprites.front_default} alt={pokeData.name}/>
        <div className='poke-type'>
          {pokeData.types.map((attr, index) => <p key={index}>{attr.type.name.toUpperCase()}</p>)}
        </div>
        <div className='poke-skills'>
          MOVES LEARNED {pokeData.abilities.map((skill, index) => <p key={index} >{skill.ability.name.toUpperCase()}</p>)}
        </div>
      </div>
    </div>
  );
}

export default PokeCard;