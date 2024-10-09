import { useEffect, useState } from "react"

export const UserAuth = () => {
    const [user,setUser] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if(token && user){
            setUser('Rinaldi')
        }
    },[])
    return {
        
    }
}