import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const usersServices = {
  getAll: () => axiosServices.get(urls.users),
  putNewUser: (user) => axiosServices.put(urls.users, user)

}

export {
  usersServices
}