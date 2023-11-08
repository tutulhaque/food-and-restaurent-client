import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import mainLogo from '../../assets/logo-main.png';
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => toast('Logout successfully'))
            .catch(error => console.error(error))
    }
    console.log(user);

    const navLinks = <>
        <li><NavLink to="./">Home</NavLink></li>
        {/* <li><NavLink to="./details">Services</NavLink></li> */}
        <li><NavLink to="./all-food">All Food Items</NavLink></li>
        <li><NavLink to="./blog">Blog</NavLink></li>
        {
            user === null ? <><li><NavLink to="./register">Register</NavLink></li></> : ''
        }

        {
            <>
                {user &&
                    <>
                        {/* Menu dropdown */}
                        <li tabIndex={0}>
                            <details>
                                <summary>Profile</summary>
                                <ul className="p-2 lg:w-52">
                                    <li><NavLink to="./add-food">Add Food</NavLink></li>
                                    <li><NavLink to="./my-cart">My Ordered Items</NavLink></li>
                                    <li><NavLink to="./my-food">My Food Items</NavLink></li>
                                </ul>
                            </details>
                        </li>
                    </>
                }
            </>
        }
    </>

    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/"><img className="w-40" src={mainLogo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="flex items-center space-x-4">
                        {user.photoURL && (
                            <img
                                src={user.photoURL}
                                className="w-8 h-8 rounded-full"
                            />
                        )}
                        <p>{user.displayName}</p>
                        <button
                            onClick={handleLogOut}
                            className="btn btn-sm"
                        >
                            Log Out
                        </button>
                    </div>
                ) : (
                    <Link to="/login">
                        <button className="btn btn-sm">Log In</button>
                    </Link>
                )}
                <ToastContainer /> {/* Add this line to initialize toast container */}
            </div>
        </div>
    );
};

export default Navbar;