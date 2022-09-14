import React from 'react';

const YourHero = ({characters}) => {

  const {name, status,species,gender,image,location} = characters;

  return (
      <div className='flexStyle'>

        <div className='backgroundStyle'>
          Name: {name} <br/>
          Status: {status} <br/>
          Species: {species} <br/>
          Gender: {gender} <br/>
          location: {location.name}
          image: {<img src={image} alt=""/>}
        </div>

      </div>

  );
};

export  {YourHero};