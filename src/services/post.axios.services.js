import {axiosServices} from "./axios.services";

import {urls} from "../configs";

export const postAxiosServices = {
  getAll: () => axiosServices.get(urls.posts)
}