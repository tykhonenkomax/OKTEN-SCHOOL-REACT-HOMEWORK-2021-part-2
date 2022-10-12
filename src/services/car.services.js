import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const carServices = {
  getAll: () => axiosServices.get(urls.cars),
  createCar: (cars) => axiosServices.post(urls.cars, cars),
  getById: (id) => axiosServices.get(`${urls.cars}/${id}`),
  updateById: (id, car) => axiosServices.put(`${urls.cars}/${id}`, car),
  deleteCar: (id) => axiosServices.delete(`${urls.cars}/${id}`),
}

export {
  carServices
}