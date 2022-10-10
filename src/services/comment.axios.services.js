import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const commentAxiosServices ={
  getAll:()=>axiosServices.get(urls.comments)
}

export {
  commentAxiosServices
}