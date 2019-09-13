import React from 'react';

const PokeCard = props => {

  const {pokeData} = props;

  if (!pokeData) {
    return <h2>Loading...</h2>
  }

  return ( 
    <div>
      <img src={pokeData.sprites.front_default} alt={pokeData.name}/>
      <p>{pokeData.name.charAt(0).toUpperCase() + pokeData.name.substring(1)} Lv. {Math.round(Math.random() * 100)}</p>
      <p>DEX NO. {(parseInt(pokeData.id) < 10 ? '0' : '') + pokeData.id}</p>
      <div className='poke-skills'>
        MOVES LEARNED {pokeData.abilities.map(skill => <p key={skill.ability.name}>{skill.ability.name}</p>)}
      </div>
      <div className='poke-type'>
        {pokeData.types.map(attr => <p key={attr.type.url}>{attr.type.name}</p>)}
      </div>
      <div className='poke-stats'>
        {pokeData.stats.map(attr => <p key={attr.stat.name}>{attr.stat.name.toUpperCase()} {attr.base_stat}</p>)}
      </div>
    </div>
  )
}

export default PokeCard;