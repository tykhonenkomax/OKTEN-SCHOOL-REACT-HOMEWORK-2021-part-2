import axios from "axios";

import {baseURL} from "../configs";

 export const {axiosServices} =axios.create({baseURL})