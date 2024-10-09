import { faAt, faEye, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, replace, useNavigate } from "react-router-dom";
import { login } from "../../services/AuthService";

export const Login = () => {
    const [error,setError] = useState("")
    const [success,setSuccess] = useState(false)
    const [token,setToken] = useState("")
    const [payload,setPayload] = useState({
        username: "",
        password: "",
    })
    const handleChange = (e) => {
        setPayload({
            ...payload,
            [e.target.name]:e.target.value
        })
    }
    const navigate = useNavigate();
    const handleLogin = async(e) => {
        e.preventDefault()
        await login(payload, (res) => {

            if(res.response?.status === 400){
                setError(res.response?.data?.message)
            }else{
                setToken(res.data?.token);
                localStorage.setItem("token",res.data?.token);
                setSuccess(true); 
                setTimeout(() => setSuccess(false), 3000); 
                setTimeout(()=>{
                    navigate('/dashboard',{replace:true})
                },2000)
                console.log(res)
            }
        })
    }
    return (
        <div className="flex items-center justify-center w-full">
            <div className="w-full max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Login</h1>
                {error && <p className="mt-4 text-red-500">{error}</p>}
                {success && <p className="mt-4 text-green-500">Login Successfully!</p>}
            </div>
            <form onSubmit={handleLogin} className="max-w-lg mx-auto mt-8 mb-0 space-y-4">
                <div>
                <label htmlFor="username" className="sr-only">Email</label>
                <div className="relative">
                    <input
                    type="text"
                    name="username"
                    value={payload.username}
                    onChange={handleChange}
                    className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm pe-12"
                    placeholder="Enter Username"
                    />
                    <span className="absolute inset-y-0 grid px-4 end-0 place-content-center">
                    <FontAwesomeIcon icon={faUser} className="text-gray-400 size-4"/>
                    </span>
                </div>
                </div>
                <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="relative">
                    <input
                    type="password"
                    name="password"
                    value={payload.password}
                    onChange={handleChange}
                    className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm pe-12"
                    placeholder="Enter Password"
                    />
                    <span className="absolute inset-y-0 grid px-4 end-0 place-content-center">
                    <FontAwesomeIcon icon={faEye} className="text-gray-400 size-4"/>
                    </span>
                </div>
                </div>

                <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                    No account?
                    <Link to="/register"><a className="hover:underline"> Register</a></Link>
                </p>

                <button
                    type="submit"
                    className="inline-block px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
                >
                    Login
                </button>
                </div>
            </form>
            </div>
        </div>
    );
}