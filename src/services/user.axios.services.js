import {urls} from "../constants";
import {axiosServices} from "./axos.services";


const userServices = {
  getAll: () =>
      axiosServices.get(urls.users)
}

export {
  userServices
}