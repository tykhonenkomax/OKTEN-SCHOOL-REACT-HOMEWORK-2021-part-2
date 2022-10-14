import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {carAction} from "../../redux/slice/car.slice";
import {CarForm} from "../CarForm/CarForm";
import {Car} from "../Car/Car";



const Cars = () => {

  const dispatch = useDispatch();
  const {cars} = useSelector(state => state.carReducer);

  useEffect(() => {
    dispatch(carAction.getAll())
  }, [])

  return (

      <div>
        <CarForm/>
        <hr/>
        {cars.map(car => <Car key={car.id} car={car}/>)}
      </div>

  );
};


export {Cars};