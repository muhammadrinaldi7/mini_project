import axios from "axios";

export const login = async(payload,callback) => {
    await axios.post('https://api.mudoapi.site/login', payload).then((res)=>{
        callback(res.data);
    }).catch((err) => {
        callback(err);
    })
}