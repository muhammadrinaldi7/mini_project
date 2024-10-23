import axios from "axios";

export const login = async(payload,callback) => {
    await axios.post('https://reqres.in/api/login', payload).then((res)=>{
        console.log(res.data)
        callback(res.data);
    }).catch((err) => {
        callback(err);
    })
}

export const register = async(payload, callback) => {
    await axios.post('https://reqres.in/api/register', payload).then((res)=>{
        callback(res.data);
    }).catch((err) => {
        callback(err);
    })
}