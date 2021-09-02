import axios from "axios";



export function PostLogin(data){
    return axios.post(`http://localhost:5000/student`,data);
}

export function GetuserbyEmail(id){
    return axios.get(`http://localhost:5000/users/${id}`);
}

