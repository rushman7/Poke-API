import React from 'react';
import { white } from 'ansi-colors';

const PokeCard = props => {


  const typeColor = {
  backgroundColor: '#F98133',
  color: 'white',
  border: '2px solid white'
}

  const {pokeData} = props;
  
  return ( 
    <div className='poke-card'>
      <div className='poke-card-left'>
        <p>{pokeData.name.charAt(0).toUpperCase() + pokeData.name.substring(1)} Lv. {Math.round(Math.random() * 100)}</p>
        <div className='poke-stats'>
          <p>DEX NO. {(parseInt(pokeData.id) < 10 ? '0' : '') + pokeData.id}</p>
          {pokeData.stats.map(attr => <p key={attr.stat.name}>{attr.stat.name.toUpperCase()} {attr.base_stat}</p>)}
        </div>
      </div>
      <div className='poke-card-right'>
        <img src={pokeData.sprites.front_default} alt={pokeData.name}/>
        <div className='poke-type'>
          {pokeData.types.map(attr => <p style={typeColor} key={attr.type.url}>{attr.type.name.toUpperCase()}</p>)}
        </div>
        <div className='poke-skills'>
          MOVES LEARNED {pokeData.abilities.map(skill => <p key={skill.ability.name} >{skill.ability.name.toUpperCase()}</p>)}
        </div>
      </div>
    </div>
  );

}

export default PokeCard;