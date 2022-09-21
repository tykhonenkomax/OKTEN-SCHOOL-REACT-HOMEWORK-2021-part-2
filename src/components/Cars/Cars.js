import React, {useEffect, useState} from 'react';

import {carServices} from "../../services";
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";

const Cars = () => {

  const [cars, setCars] = useState([])

  useEffect(() => {

    carServices.getAll().then(value => setCars(value.data))

  }, [])



  return (

      <div>
        <div>
          <CarForm setCars={setCars}/>
        </div>
        {
          cars.map(car => <Car key={car.id} car={car}/>)
        }
      </div>
  );
};

export {Cars};