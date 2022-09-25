import { urls} from "../constants";
import {axiosServices} from "./axos.services";



const postsServices = {
  getAll: () =>
      axiosServices.get(urls.posts)
}

export {

  postsServices
}