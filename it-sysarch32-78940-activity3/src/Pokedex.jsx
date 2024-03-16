// Pokedex.jsx
import React, { useState } from 'react';
import Pokemon from './Pokemon';

const Pokedex = ({ pokemonList }) => {
  const [language, setLanguage] = useState('english');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleLanguageChange('english')}>English</button>
        <button onClick={() => handleLanguageChange('japanese')}>Japanese</button>
        <button onClick={() => handleLanguageChange('chinese')}>Chinese</button>
        <button onClick={() => handleLanguageChange('french')}>French</button>
      </div>
      {pokemonList.map(pokemon => (
        <Pokemon key={pokemon.id} pokemon={pokemon} language={language} />
      ))}
    </div>
  );
};

export default Pokedex;
