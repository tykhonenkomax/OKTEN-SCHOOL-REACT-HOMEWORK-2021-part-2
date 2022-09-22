import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const usersServices = {
  getAll: () => axiosServices.get(urls.users),
}

export {
  usersServices
}