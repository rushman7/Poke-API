import React, { useState, useEffect } from 'react';
import PokeCard from './PokeCard';
import axios from 'axios';

const PokeData = () => {
  const [pokeData, setPokeData] = useState({});

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/1')
      .then(res => {
        setPokeData(res.data)
      })
      .catch(err => console.log('Error', err))
  }, []);

  return (
    <div>
      <PokeCard pokeData={pokeData}/>
    </div>
  )
}

export default PokeData;