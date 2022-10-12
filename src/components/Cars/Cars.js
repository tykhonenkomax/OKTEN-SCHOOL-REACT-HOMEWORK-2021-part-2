import React, {useEffect} from 'react';

import {carServices} from "../../services";
import {CarForm} from "../CarForm/CarForm";
import {Car} from "../Car/Car";
import {useDispatch, useSelector} from "react-redux";
import {carAction} from "../../redux/slice/car.slice";


const Cars = () => {

  const dispatch = useDispatch();
const {cars} = useSelector(state=>state.carReducer);

useEffect(()=>{
carServices.getAll().then(({data})=>dispatch(carAction.getAll(data)))
},[])

  return (

      <div>
        <CarForm />
        <hr/>
        {cars.map(car=><Car key={car.id} car={car}/>)}
      </div>

  );
};


export {Cars};