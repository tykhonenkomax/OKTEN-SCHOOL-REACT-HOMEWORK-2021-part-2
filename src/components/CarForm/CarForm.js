import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi';
import {carValidator} from "../../validators";
import {carServices} from "../../services";
import {useDispatch} from "react-redux";


const CarForm = () => {
  const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
    // resolver: joiResolver(carValidator),
    mode: 'all'
  });

  // const submit = async (car) => {
  //   const {data} = await carServices.createCar(car);
  //   setCars(cars => [...cars, data])
  //   reset()
  //   console.log(car)
  // };


  let submit;
  return (
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder={'model'} {...register('model')}/>
        {errors.model && <span>{errors.model.message}</span>}
        <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
        {errors.price && <span>{errors.price.message}</span>}
        <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
        {errors.year && <span>{errors.year.message}</span>}
        <input type="text" placeholder={'engine'} {...register('property.engine', {valueAsNumber: true})}/>
        <input type="text" placeholder={'wheels'} {...register('property.wheels', {valueAsNumber: true})}/>
        <button disabled={!isValid}>Save</button>
      </form>
  );
};


export {CarForm};