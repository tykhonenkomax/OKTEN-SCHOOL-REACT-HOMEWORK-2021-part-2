import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const carServices = {
  getAll: () => axiosServices.get(urls.cars),
  create: (car) => axiosServices.post(urls.cars, car),
  getById: (id) => axiosServices.get(`${urls.cars}/${id}`),
  updateById: (id) => axiosServices.put(`${urls.cars}/${id}`),
  deleteById: (id) => axiosServices.delete(`${urls.cars}/${id}`)
}

export {
  carServices
}