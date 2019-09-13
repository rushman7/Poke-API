import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PokeData() {
  const [pokeData, setPokeData] = useState({});

  useEffect(() => {
    const fetchPokemon = () => 
      axios.get('https://pokeapi.co/api/v2/pokemon/1')
        .then(poke => {
          console.log(poke.data)
          setPokeData(poke.data)
        });
      fetchPokemon()
  }, [])

  return (
    <div>

    </div>
  )
}

export default PokeData;