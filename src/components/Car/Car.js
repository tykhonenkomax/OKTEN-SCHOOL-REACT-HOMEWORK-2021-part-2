import React from 'react';
import css from './Car.module.css'
const Car = ({car}) => {


  return (
      <div className={css.Car}>
        <div>id: {car.id}</div>
        <div>model: {car.model}</div>
        <div>price: {car.price}</div>
        <div>year: {car.year}</div>
      </div>
  );
};


export {Car};