import {axiosServices} from "./axios.services";
import {urls} from "../constants";

const postsServices = {
  getAll: () => axiosServices(urls.posts)
}
export {
  postsServices
}