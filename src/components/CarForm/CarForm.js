import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import {joiResolver} from "@hookform/resolvers/joi"
import {carValidator} from "../../validators";
import {carServices} from "../../services";


const CarForm = ({setCars}) => {

  const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
    resolver:joiResolver(carValidator),
    mode: 'all',
  });

  const submit = async (car) => {
    let {data} = await carServices.create(car);
    setCars(cars=>[...cars,data])
    reset()
  };

  return (


      // <form onSubmit={handleSubmit(submit)}>
      //   <input type={"text"} placeholder={'model'} {...register('model', {
      //     required: true,
      //     minLength: {value: 2, message: 'mn 2 ch'}
      //   })}/>
      //   {errors.model && <span>{errors.model.message}</span>}
      //   <input type={"text"} placeholder={'price'} {...register('price', {
      //     valueAsNumber: true
      //   })}/>
      //   <input type={"text"} placeholder={'year'} {...register('year', {
      //     valueAsNumber: true
      //   })}/>
      //   <button disabled={!isValid}>SAVE</button>
      // </form>


      <form onSubmit={handleSubmit(submit)}>
        <input type={"text"} placeholder={'model'} {...register('model', {
          required: true,
          minLength: {value: 2, message: 'mn 2 ch'}
        })}/>
        {errors.model && <span>{errors.model.message}</span>}
        <input type={"text"} placeholder={'price'} {...register('price', {
          valueAsNumber: true
        })}/>
        {errors.price && <span>{errors.price.message}</span>}
        <input type={"text"} placeholder={'year'} {...register('year', {
          valueAsNumber: true
        })}/>
        {errors.year && <span>{errors.year.message}</span>}
        <button disabled={!isValid}>SAVE</button>
      </form>
  );
};

export {CarForm};