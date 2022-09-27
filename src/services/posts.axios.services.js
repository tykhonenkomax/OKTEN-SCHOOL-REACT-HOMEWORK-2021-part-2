import {axiosServices} from "./axios.services";
import {urls} from "../constants";

const postsServices = {
  getByID:(id)=> axiosServices.get(`${urls.posts}/${id}`)
}
export {
  postsServices
}