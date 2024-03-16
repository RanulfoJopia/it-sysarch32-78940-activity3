// Pokemon.jsx
import React from 'react';

const Pokemon = ({ pokemon }) => {
  return (
    <div>
      <img src={pokemon.image} alt={pokemon.name.english} />
      <p>ID: {pokemon.id}</p>
      <p>Name: {pokemon.name.english}</p>
      <p>Type: {pokemon.type.join(', ')}</p>
      <p>HP: {pokemon.base.HP}</p>
      <p>Attack: {pokemon.base.Attack}</p>
      
    </div>
  );
};

export default Pokemon;
