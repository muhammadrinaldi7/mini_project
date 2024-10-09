import axios from "axios";

export const getAllMenu = async (page, perPage, callback) => {
    await axios.get(`https://api.mudoapi.site/menus?page=${page}&perPage=${perPage}`).then((response) => {
        callback(response.data);
    }).catch((error) => {
        callback(error);
    })
    
}