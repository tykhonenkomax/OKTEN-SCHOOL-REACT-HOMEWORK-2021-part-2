import {axiosServices} from "./axios.services";

import {urls} from "../configs";

const postAxiosServices = {
  getAll: () => axiosServices.get(urls.posts)
}

export {
  postAxiosServices
}