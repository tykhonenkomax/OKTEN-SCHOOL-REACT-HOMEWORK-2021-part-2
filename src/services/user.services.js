import {axiosServices} from "./axios.sevices";
import {urls} from "../configs";

const userServices = {
  getAll:()=>axiosServices.get(urls.users)
}

export {userServices}