import React, { useState, useEffect } from 'react';
import PokeCard from './PokeCard';
import PokeLoader from './PokeLoader';
import axios from 'axios';

const PokeData = (props) => {
  const [pokeIndex, setPokeIndex] = useState(1);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokeSearch, setPokeSearch] = useState('');

  // Total pokemon is 802
  const MAX_POKEMON = 100;

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

  const filterOnChange = (e) => {
    setPokeSearch(e.target.value);
  }

  console.log(pokemonList);

  let filteredPokemon = pokemonList.filter(pokeName => pokeName.data.name.indexOf(pokeSearch) !== -1)

  return (
    <div>
      <h4>Gotta Catchem All ({MAX_POKEMON})</h4>
      <input 
        className="search_txt"
        type="text"
        placeholder="Search..."
        value={pokeSearch}
        onChange={filterOnChange}
      />
      <div className="poke-card-grid">
        {filteredPokemon.map((card, index) => <PokeCard key={index} pokeData={card.data}/>)}
      </div>
    </div>
  );
}

export default PokeData;