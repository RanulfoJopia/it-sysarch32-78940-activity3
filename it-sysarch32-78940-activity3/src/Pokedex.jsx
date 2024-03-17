// Pokedex.jsx
import React, { useState } from 'react';
import Pokemon from './Pokemon';

const Pokedex = ({ pokemonList }) => {
  const [language, setLanguage] = useState('english');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  }

  return (
    <div >
      <div>
        <button className="l1" onClick={() => handleLanguageChange('english')}>English</button>
        <button className="l1" onClick={() => handleLanguageChange('japanese')}>Japanese</button>
        <button className="l1" onClick={() => handleLanguageChange('chinese')}>Chinese</button>
        <button className="l1" onClick={() => handleLanguageChange('french')}>French</button>
      </div>
      {Array.isArray(pokemonList) && pokemonList.map(pokemon => {
        return <Pokemon key={pokemon.id} pokemon={pokemon} language={language} />
      })}
    </div>
  );
};

export default Pokedex;
