import React, { useState, useEffect } from 'react';
import PokeCard from './PokeCard';
import axios from 'axios';

const PokeData = () => {
  const [pokeData, setPokeData] = useState();

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/4')
      .then(res => {
        let data = {};
        data.abilities = res.data.abilities;
        data.base_experience = res.data.base_experience;
        data.forms = res.data.forms;
        data.game_indices = res.data.game_indices;
        data.height = res.data.height;
        data.held_items = res.data.held_items;
        data.id = res.data.id;
        data.is_default = res.data.is_default;
        data.location_area_encounters = res.data.location_area_encounters;
        data.moves = res.data.moves;
        data.name = res.data.name;
        data.species = res.data.species;
        data.sprites = res.data.sprites;
        data.stats = res.data.stats;
        data.types = res.data.types;
        data.weight = res.data.weight;
        setPokeData(data);
      })
      .catch(err => console.log('Error', err))
  }, []);

  return (
    <div>
      <PokeCard data={pokeData}/>
    </div>
  )
}

export default PokeData;