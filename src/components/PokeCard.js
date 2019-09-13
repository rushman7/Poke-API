import React from 'react';

const PokeCard = props => {

  const {pokeData} = props;

  if (!pokeData) {
    return <h2>Loading...</h2>
  }

  // const { name, weight, sprites } = props.pokeData

  return ( 
    <div>
      <img src={pokeData.sprites.front_default} alt={pokeData.name}/>
      <h3>{pokeData.name}</h3>
      <h3>{pokeData.weight}</h3>
    </div>
  )
}

export default PokeCard;