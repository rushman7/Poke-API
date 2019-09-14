import React from 'react';

const PokeCard = props => {

  const {data} = props;
  
  if (!data) {
    return <h2>Loading..</h2>;
  }
  
  return ( 
    <div>
      <img src={data.sprites.front_default} alt={data.name} />
      <h3>{data.name}</h3>
      <h3>{data.weight}</h3>
      <h3>{data.id}</h3>
    </div>
  );

}

export default PokeCard;