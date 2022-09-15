import axios from "axios";


const axiosInstance = axios.create({
  baseURL:'https://jsonplaceholder.typicode.com',
  headers:{}
})

const getUsers=()=>{
 return  axiosInstance.get(`/users`)
}

const getUsersId=(id)=>{
  return  axiosInstance.get('/users/'+ id)
}

export {
  getUsers,
    getUsersId
}