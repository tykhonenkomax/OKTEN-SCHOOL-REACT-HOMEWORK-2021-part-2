import {axiosServices} from "./axios.services";
import {urls} from "../links";

const postServices ={
  getAll:()=> axiosServices.get(`${urls.posts}`)
}

export {
  postServices
}
