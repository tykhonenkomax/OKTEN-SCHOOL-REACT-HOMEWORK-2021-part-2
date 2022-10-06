import {axiosServices} from "./axios.services";
import {urls} from "../links";

const commentServices ={
  getAll:()=> axiosServices.get(urls.comments)
}

export {
 commentServices
}