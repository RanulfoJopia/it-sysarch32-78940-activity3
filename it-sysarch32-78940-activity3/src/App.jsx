// App.jsx
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Pokedex from './Pokedex';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://us-central1-it-sysarch32.cloudfunctions.net/pokemon")
      .then(response => response.json())
      .then(data => setPokemonList(data));
  }, []);

  return (
    <div>
      <Header />
      <Pokedex pokemonList={pokemonList} />
    </div>
  );
};

export default App;
