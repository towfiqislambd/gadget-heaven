import { FaBars } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { HandleContext } from "./Root";

const Navbar = () => {
    const { handleActiveBtn } = useContext(HandleContext);
    const location = useLocation();

    return (
        <nav className={`py-1 sticky top-0 z-10 ${location.pathname === '/' ? 'bg-purple-600' : 'bg-white shadow'}`}>
            <div className="navbar container mx-auto px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden"><FaBars /></div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className={`font-semibold text-xl ${location.pathname === '/' ? 'text-gray-100' : ''}`}>Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className={`menu menu-horizontal px-1 font-medium ${location.pathname === '/' ? 'text-gray-100' : 'text-gray-700'}`}>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/statistics">Statistics</NavLink></li>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        <li><NavLink to="/offer">Offer</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4 items-center text-2xl">
                    <Link to="/dashboard" className={`${location.pathname === '/' ? 'bg-gray-100 rounded-full p-2 text-lg' : ''}`}><IoCartOutline /></Link>
                    <Link to="/dashboard" onClick={() => handleActiveBtn('wishlist')} className={`${location.pathname === '/' ? 'bg-gray-100 rounded-full p-2 text-lg' : ''}`}><IoMdHeartEmpty /></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;