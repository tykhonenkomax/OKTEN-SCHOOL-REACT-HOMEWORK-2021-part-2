import {axiosServices} from "./axios.services";

import {urls} from "../configs";

const userAxiosServices = {
  getAll: () => axiosServices.get(urls.users)
}

export {
  userAxiosServices
}