import {axiosServices} from "./axios.services";
import {urls} from "../links";

const userServices ={
  getAll:()=> axiosServices.get(urls.users)
}

export {
  userServices
}