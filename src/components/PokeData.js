import React, { useState, useEffect } from 'react';
import PokeCard from './PokeCard';
import axios from 'axios';

const PokeData = () => {
  const [pokeData, setPokeData] = useState();
  const [pokeIndex, setPokeIndex] = useState(1);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeIndex}`)
      .then(res => {
        setPokeData(res.data)
      })
      .catch(err => console.log('Error', err))
  }, [pokeIndex]);

  return (
    <div>
      <PokeCard pokeData={pokeData}/>
    </div>
  )
}

export default PokeData;