import React from "react";
import PokeTypeBadge from './PokeTypeBadge';

const PokeCard = props => {
  const { pokeData } = props;

  return (
    <div className="poke-card">
      <div className="poke-card-middle">
        <div className="poke-card-left">
          <div className="poke-card-title">
            <h2>
              {pokeData.name.charAt(0).toUpperCase() +
                pokeData.name.substring(1)}
            </h2>
            <i className="gender fa fa-venus" aria-hidden="true"></i>
            <h3>
              Lv. {Math.round(Math.random() * 100)}
            </h3>
          </div>
          <div className="poke-stats">
            
            {pokeData.stats.map((attr, index) => (
              <div key={index}>
                <p>{attr.stat.name.toUpperCase()}</p> <p>{attr.base_stat}</p>
              </div>
            ))}
            <h2>Stats:</h2>
          </div>
        </div>
        <div className="poke-card-right">
          <div className="poke-card-topright">
            <img src={pokeData.sprites.front_default} alt={pokeData.name} />
            <h3><i className="fa fa-minus" aria-hidden="true"></i> {(parseInt(pokeData.id) < 10 ? "00" : parseInt(pokeData.id) < 100 ? "0":  "") + pokeData.id } <i className="fa fa-minus" aria-hidden="true"></i></h3>
            <div className="poke-type">
              {pokeData.types.map((attr, index) => (
                <PokeTypeBadge key={index} type={attr.type.name}/>
              ))}
            </div>
          </div>

          <div className="poke-skills">
            <h3>MOVES LEARNED</h3>
            {pokeData.abilities.map((skill, index) => (
              <p key={index}><i className="poke-card-move-bullet fa fa-caret-right" aria-hidden="true"></i> {skill.ability.name.toUpperCase()}</p>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default PokeCard;
