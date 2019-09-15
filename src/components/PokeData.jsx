import React, { useState, useEffect } from 'react';
import PokeCard from './PokeCard';
import PokeLoader from './PokeLoader';
import axios from 'axios';

const PokeData = () => {
  const [pokeIndex, setPokeIndex] = useState(1);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokeSearch, setPokeSearch] = useState('');


  // Total pokemon is 802
  const MAX_POKEMON = 802;

  useEffect(() => {
    
    //TempPokemonData array for loading localStorage data 
    let tempPokemonData = [];
    
    let localPokeLocker = localStorage.getItem('PokeLocker');

    // If the PokeLocker localStorage exists
    if(localPokeLocker !== null){
      localPokeLocker = JSON.parse(localPokeLocker);
      tempPokemonData = Object.values(localPokeLocker);
    }

    // Set Pokemon List to the tempPokemonData if the local data has the MAX_POKEMON
    if(tempPokemonData.length === MAX_POKEMON){
      setPokemonList(tempPokemonData);
    }else{

      // If the local data does not match MAX_POKEMON then clear it and get all pokemon data from API
      localStorage.clear();

      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeIndex}`)
      .then(res => {
        setPokemonList(pokemonList => [...pokemonList, res]);
        if(pokeIndex < MAX_POKEMON){
           setPokeIndex(pokeIndex + 1);
        }
      })
      .catch(err => console.log('Error', err))
    }
    
  }, [pokeIndex, MAX_POKEMON]);

  if(pokemonList.length < MAX_POKEMON){
    return (
      <div>
        <h4>Gotta Fetch Em All ({MAX_POKEMON})</h4>
        <PokeLoader message="If this is your first time it may take a while to fetch the data..."/>
      </div>
    );
  }

  // If local data exists do nothing
  if(localStorage.getItem('PokeLocker')){

  }else{
  
  // Otherwise sanitize local storage data to be stored.
  const pokeLocker = [];
  //Pokemon Data Sanitization from API reponse for localStorage 
  pokemonList.forEach(pokemon => {

    // Remove not needed data from config key
    delete pokemon.config.headers;
    delete pokemon.config.maxContentLength;
    delete pokemon.config.method;
    delete pokemon.config.timeout;
    delete pokemon.config.transformRequest;
    delete pokemon.config.transformResponse;
    delete pokemon.config.xsrfCookieName;
    delete pokemon.config.xsrfHeaderName;

    //Remove other
    delete pokemon.headers;
    delete pokemon.request;
    delete pokemon.status;
    delete pokemon.statusText;

    // Remove un-needed data from data
    delete pokemon.data.game_indices;
    delete pokemon.data.location_area_encounters;
    delete pokemon.data.forms;
    delete pokemon.data.is_default;
    delete pokemon.data.species;
    delete pokemon.data.height;
    delete pokemon.data.weight;
    delete pokemon.data.held_items;
    delete pokemon.data.moves;

    pokeLocker.push(pokemon);
  });
  
  // Store sanitized data in local storage
  localStorage.setItem('PokeLocker', JSON.stringify(Object.assign({}, pokeLocker)));
  }

  // PAGE RELATED STUFF STARTS HERE

  const filterOnChange = (e) => {
    setPokeSearch(e.target.value);
  }

  let filteredPokemon = pokemonList.filter(pokeName => pokeName.data.name.indexOf(pokeSearch) !== -1)

  return (
    <div>
      <h4>Gotta Catchem All ({MAX_POKEMON})</h4>
      <input 
        className="search_name"
        type="text"
        placeholder="Search Pokemon..."
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