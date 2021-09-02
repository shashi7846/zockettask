import axios from "axios";



export function PostLogin(data){
    return axios.post(`https://zocket-task.herokuapp.com/student`,data);
}

export function GetuserbyEmail(id){
    return axios.get(`https://zocket-task.herokuapp.com/users/${id}`);
}

