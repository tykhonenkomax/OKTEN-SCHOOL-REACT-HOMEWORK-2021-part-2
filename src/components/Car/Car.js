import React from 'react';
import css from './Car.module.css'

const Car = ({car}) => {

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
          <button>Delete</button>
          <button>Update</button>
        </div>
      </div>
  );
};


export {Car};