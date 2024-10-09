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
            <li><a>Item 1</a></li>
            <li>
            <a>Parent</a>
            <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
            </ul>
            </li>
            <li><a>Item 3</a></li>
        </ul>
        </div>
        <a className="text-xl btn btn-ghost">MeatGenkz</a>
    </div>
    <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
        <li><Link to="/">Home</Link></li>
        <li>
            <Link to="/menu">Menu</Link>
        </li>
        </ul>
    </div>
    <div className="navbar-end">
        {localStorage.getItem('token') ? 
        (<p onClick={handleLogout} className="btn btn-primary">Logout</p>):
        (<Link to="/login"><button className="btn btn-primary">Login</button></Link>)}
    </div>
    </div>
    )
}