import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const commentsServices = {
  getAll: () => axiosServices.get(urls.comments)
}

export {
  commentsServices
}