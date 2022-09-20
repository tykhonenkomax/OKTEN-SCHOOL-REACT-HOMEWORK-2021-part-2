import axios from "axios";
import {baseURL, urls} from "../urls";

const userAxiosServices = axios.create({
  baseURL:baseURL
})

const userServices = {

  getAll: () =>
    userAxiosServices.get(urls.users)

}

export {
  userServices
}