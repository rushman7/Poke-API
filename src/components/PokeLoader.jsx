import React from 'react';
import pokeball from '../images/pokeball.png';

const PokeLoader = props => {
    return (
    <div className="poke-loader">
        <img src={pokeball} className="poke-spinner" alt="pokeball spinner"/>
        <h2>{props.message}</h2>
    </div>
    );
};

export default PokeLoader;