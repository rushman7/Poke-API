import React from 'react';

const PokeCard = props => {
  if (!props) {
    return <div>Loading...</div>
  }

  const { front_default } = props.pokeData.sprites;

  return ( 
    <div>
      <h3>{front_default}</h3>
      <h3>{props.pokeData.name}</h3>
      <h3>{props.pokeData.weight}</h3>
    </div>
  )
}

export default PokeCard;