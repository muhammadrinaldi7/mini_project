import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
export const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/',{replace:true})
    }
    return (
    <div className="sticky z-20 rounded-lg top-2 navbar bg-base-100">
    <div className="navbar-start">
        <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
           <FontAwesomeIcon icon={faBars} className="size-5"/>
        </div>
        <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
                <Link to="/" className="hover:bg-red-600 hover:text-white">Home</Link>
            </li>
            <li>
                <Link to="/menu" className="hover:bg-red-600 hover:text-white">Menu</Link>
            </li>
        </ul>
        </div>
        <a className="text-xl btn btn-ghost"><h1>Mudo<span className="text-[#FF0000] italic">Genkz</span></h1></a>
    </div>
    <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
        <li>
            <Link to="/" className="hover:bg-red-600 hover:text-white">Home</Link>
        </li>
        <li>
        {/* <a href="#menu" className="hover:bg-red-600 hover:text-white">Menu</a> */}
            <Link to="/menu" className="hover:bg-red-600 hover:text-white">Menu</Link>
        </li>
        {localStorage.getItem('token') && <li>
            <Link to="/dashboard" className="hover:bg-red-600 hover:text-white">Dashboard</Link>
        </li>}
        </ul>
    </div>
    <div className="navbar-end">
        {localStorage.getItem('token') ? 
        (<p onClick={handleLogout} className="text-white bg-red-600 btn">Logout</p>):
        (<Link to="/login"><button className="text-white bg-red-600 btn">Login</button></Link>)}
    </div>
    </div>
    )
}