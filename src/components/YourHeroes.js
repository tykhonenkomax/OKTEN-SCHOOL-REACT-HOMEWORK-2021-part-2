import React, {useEffect, useState} from 'react';
import {YourHero} from "./YourHero";


const YourHeroes = (props) => {

  const {search} = props;
  console.log(props)

  const [characters, setCharacters] = useState([])
  useEffect(() => {

    fetch(`https://rickandmortyapi.com/api/character/?page=${search.value}`)
        .then(value => value.json())
        .then((data) => setCharacters(data.results.slice(0, 6)))
  }, [])


  return (
      <div className='flexStyle'>
        {
          characters.map(characters => <YourHero key={characters.id} characters={characters}/>)
        }
      </div>
  );
};

export {YourHeroes};