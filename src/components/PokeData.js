import React, { useState, useEffect } from 'react';
import PokeCard from './PokeCard';
import axios from 'axios';

const PokeData = () => {
  const [pokeData, setPokeData] = useState();
  let [pokeIndex, setPokeIndex] = useState(6);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeIndex}`)
      .then(res => {
        setPokeData(res.data)
      })
      .catch(err => console.log('Error', err))
  }, [pokeIndex]);

  const increment = () => {
    (pokeIndex === 802) ? setPokeIndex(pokeIndex = 1) : setPokeIndex(pokeIndex + 1)
  }

  const decrement = () => {
    (pokeIndex === 1) ? setPokeIndex(pokeIndex = 802) : setPokeIndex(pokeIndex - 1)
  }


  return (
    <div>
      <PokeCard pokeData={pokeData}/>
      <button onClick={increment}>Next</button>
      <button onClick={decrement}>Previous</button>
    </div>
  )
}

export default PokeData;