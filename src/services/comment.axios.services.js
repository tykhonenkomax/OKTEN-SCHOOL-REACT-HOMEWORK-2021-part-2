import {axiosServices} from "./axios.services";
import {urls} from "../configs";

export const commentAxiosServices ={
  getAll:()=>axiosServices.get(urls.comments)
}