import React, {useEffect, useState} from 'react';
import {YourHero} from "./YourHero";


const YourHeroes = () => {

  const [characters, setCharacters] = useState([])

  useEffect(() => {

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then((data) => setCharacters(data.results))
  }, [])


  return (
      <div>
        {
          characters.map(characters => <YourHero key={characters.id} characters={characters} />)
        }
      </div>
  );
};

export  {YourHeroes};