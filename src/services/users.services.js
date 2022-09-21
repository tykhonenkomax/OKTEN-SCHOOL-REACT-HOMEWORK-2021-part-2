import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const usersServices = {
  getAll: () => axiosServices(urls.users)
}

export {
  usersServices
}