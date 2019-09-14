import React, { useState, useEffect } from 'react';
// import PokeCard from './PokeCard';
import axios from 'axios';

const PokeData = () => {
  // const [pokeData, setPokeData] = useState();
  const [pokeIndex, setPokeIndex] = useState(1);
  const [pokemonList, setPokemonList] = useState([]);

  const MAX_POKEMON = 802;

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeIndex}`)
      .then(res => {
        setPokemonList([...pokemonList, res]);
        if(pokeIndex < MAX_POKEMON){
           setPokeIndex(pokeIndex + 1);
        }
      })
      .catch(err => console.log('Error', err))
  }, [pokeIndex]);

  if(pokemonList.length < MAX_POKEMON){
    return <h1>Fetching pokemon data..</h1>;
  }

  return (
    <div>
      <h2>GOTEM ALL!</h2>
    </div>
  )
}

export default PokeData;