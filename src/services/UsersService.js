import axios from "axios";

export const getAllUsers = async (page, callback) => {
    await axios
        .get(`https://reqres.in/api/users?page=${page}`)
        .then((res) => {
            callback(res.data);
        })
        .catch((err) => {
            callback(err);
        });
}