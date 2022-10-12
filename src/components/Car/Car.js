import React from 'react';
import css from './Car.module.css'
import {carServices} from "../../services";

const Car = ({car, setCars}) => {

  const {id, model, price, year} = car

  const deleteCar = async () => {

    await carServices.deleteCar(car.id)

    setCars(cars => {
      const index = cars.findIndex(value => value.id === id);
      cars.splice(index, 1)
      return [...cars]
    })
  }

  return (

      <div className={css.flexStyle}>
        <div className={css.Car}>
          <div>id: {car.id}</div>
          <hr/>
          <div>model: {car.model}</div>
          <hr/>
          <div>price: {car.price}</div>
          <hr/>
          <div>year: {car.year}</div>
        </div>
        <div>
          <button onClick={() => deleteCar()}>Delete</button>
          <button>Update</button>
        </div>
      </div>
  );
};


export {Car};