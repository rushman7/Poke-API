import React from "react";
import PokeData from "./PokeData";

const PokeGrid = () => {
  // Total pokemon is 802
  const MAX_POKEMON = 100;

  return (
    <>
      <h4>Gotta Catchem All ({MAX_POKEMON})</h4>
      <div className="poke-card-grid">
        <PokeData MAX_POKEMON={MAX_POKEMON} />
      </div>
    </>
  );
};

export default PokeGrid;
