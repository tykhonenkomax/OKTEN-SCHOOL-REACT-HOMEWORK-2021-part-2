import React from 'react';

const YourHero = ({characters}) => {

  const {name, status,species,gender,image,location} = characters;

  return (
      <div>
        <div className='backgroundStyle'>
          Name: {name} <br/>
          Status: {status} <br/>
          Species: {species} <br/>
          Gender: {gender} <br/>
          location: {location.name}
          image: {<img className='imgStyle' src={image} alt=""/>}
        </div>
      </div>

  );
};

export  {YourHero};