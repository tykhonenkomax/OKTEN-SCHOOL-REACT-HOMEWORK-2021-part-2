import React, {useEffect, useState} from 'react';

import {carServices} from "../../services";
import {CarForm} from "../CarForm/CarForm";
import {Car} from "../Car/Car";


const Cars = () => {

const [cars, setCars] = useState([]);

useEffect(()=>{
carServices.getAll().then(({data})=>setCars(data))
},[])

  return (

      <div>
        <CarForm/>
        <hr/>
        {cars.map(car=><Car key={car.id} car={car}/>)}
      </div>

  );
};


export {Cars};