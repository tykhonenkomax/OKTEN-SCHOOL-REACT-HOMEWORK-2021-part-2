import React, {useEffect} from 'react';
import {useState} from "react";
import SpaceX from "./spaceX";

const AllSpaceX = () => {

  const [x, setX] = useState([])


  useEffect(() => {

    fetch('https://api.spacexdata.com/v3/launches/')
        .then(response => response.json())
        .then(value => {
          let newArrSpaseX = value.filter(search => search.launch_year < 2020)
          setX(newArrSpaseX)
        })

  }, [])


  return (
      <div>
        {
          x.map((data, index) => <SpaceX key={data.index} data={data}/>)
        }
      </div>
  );
};

export {AllSpaceX};