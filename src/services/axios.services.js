import axios from "axios";
import {baseURL} from "../links";

const axiosServices = axios.create({baseURL:baseURL})

export {
  axiosServices
}