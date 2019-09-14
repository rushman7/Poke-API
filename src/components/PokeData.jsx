import React, { useState, useEffect } from 'react';
import PokeCard from './PokeCard';
import PokeLoader from './PokeLoader';
import axios from 'axios';

const PokeData = (props) => {
  const [pokeIndex, setPokeIndex] = useState(1);
  const [pokemonList, setPokemonList] = useState([]);

  const {MAX_POKEMON} = props;

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeIndex}`)
      .then(res => {
        setPokemonList(pokemonList => [...pokemonList, res]);
        if(pokeIndex < MAX_POKEMON){
           setPokeIndex(pokeIndex + 1);
        }
      })
      .catch(err => console.log('Error', err))
  }, [pokeIndex, MAX_POKEMON]);

  if(pokemonList.length < MAX_POKEMON){
    return <PokeLoader message="Catching Em All..."/>;
  }

  return (
    <>
      {pokemonList.map((card, index) => <PokeCard key={index} pokeData={card.data}/>)}
    </>
  );
}

export default PokeData;