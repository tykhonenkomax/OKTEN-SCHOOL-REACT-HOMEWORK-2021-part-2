import {axiosServices} from "./axios.services";

import {urls} from "../configs";

export const {userAxiosServices} = {
  getAll: () => axiosServices.get(urls.users)
}

