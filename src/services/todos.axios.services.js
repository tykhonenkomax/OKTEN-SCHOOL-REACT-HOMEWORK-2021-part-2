import {axiosServices} from "./axios.services";
import {urls} from "../constants";

const todosServices = {
  getAll: () => axiosServices.get(urls.todos)
}

export {
  todosServices
}