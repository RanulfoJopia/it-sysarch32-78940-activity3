// Pokemon.jsx
import React from "react";
const Pokemon = ({ pokemon, language }) => {
  
  return (
    <div className="pokemon-container">
      <img src={pokemon.image} alt={pokemon.name.eng} className="image" />
      
      <div className="pokemon-info">
        <p>{pokemon.id} {pokemon.name[language]}</p>
        <div className="type">
        <div>{pokemon.type.map((type, index) => (
          <div key={index} className="type-button">{type}</div>
        ))}</div>

        </div>
        <div className="info1">
          <p>HP: {pokemon.base.HP} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Speed: {pokemon.base.Speed}</p>
          <p>Attk: {pokemon.base.Attack} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Sp.Attk: {pokemon.base["Sp. Attack"]}</p>
          <p>Def: {pokemon.base.Def} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Sp.def: {pokemon.base["Sp. Defense"]}</p>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
