import axios from "axios";
import { useEffect, useState } from "react";

export const getAllMenu = async (page, perPage,menu, callback) => {
    await axios.get(`https://api.mudoapi.site/menus?page=${page}&perPage=${perPage}&name=${menu}`).then((response) => {
        callback(response.data);
    }).catch((error) => {
        callback(error);
    })
    
}

export const getMenuById = (id) => {
    const [menuDetail, setMenuDetail] = useState([]);
    useEffect(() => {
        axios.get(`https://api.mudoapi.site/menu/${id}`).then((response) => {
            setMenuDetail(response.data.data);
        }).catch((error) => {
            setMenuDetail(error);
        })
    }, [])

    return menuDetail;
}