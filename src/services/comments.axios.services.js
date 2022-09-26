import {axiosServices} from "./axios.services";
import {urls} from "../constants";

const commentsServices = {
  getAll: () => axiosServices.get(urls.comments)
}

export {
  commentsServices
}