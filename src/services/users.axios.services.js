import axios from "axios";


let usersAxiosServices=axios.create({
  baseURL:'https://jsonplaceholder.typicode.com',
  headers:{}
})

let getUsers = ()=>{
  return usersAxiosServices.get('/users')
}


const getUsersId = (id) => {
return   usersAxiosServices.get('/users/' + id)
}


const getPosts = () => {
return   usersAxiosServices.get('/posts')
}

const getPostsId = (id) => {
return   usersAxiosServices.get('/posts/' + id)
}

const getComments = () => {
return   usersAxiosServices.get('/comments')
}

const getCommentsId = (id) => {
return   usersAxiosServices.get('/comments/' + id)
}

export {
  getUsers, getUsersId, getPosts, getPostsId, getComments, getCommentsId

}

