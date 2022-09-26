import {axiosServices} from "./axios.services";
import {urls} from "../constants";

const albumsServices = {
  getAll: () => axiosServices.get(urls.albums)
}
export {
  albumsServices
}