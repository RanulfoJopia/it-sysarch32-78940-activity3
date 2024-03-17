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
        <div class="stats-container">
  <div>
    <p>HP: {pokemon.base.HP}</p>
    <p>Attk: {pokemon.base.Attack}</p>
    <p>Def: {pokemon.base.Defense}</p>
  </div>
  <div>
    <p>Speed: {pokemon.base.Speed}</p>
    <p>Sp.Attk: {pokemon.base["Sp. Attack"]}</p>
    <p>Sp.def: {pokemon.base["Sp. Defense"]}</p>
  </div>
</div>
      </div>
    </div>
  );
};

export default Pokemon;
