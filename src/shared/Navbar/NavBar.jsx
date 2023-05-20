import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";

const NavBar = () => {
    const {user, logOut} = useContext(AuthContext)
    const navLi =<>
    <Link to='/'><li className="lg:pr-5 sm:p-3">Home</li></Link>
    <Link to='/all'><li className="lg:pr-5 sm:p-3">All toys</li></Link>
    <Link to='/blogs'><li className="lg:pr-5 sm:p-3">Blogs</li></Link>
    </>
    const handleLogOut = ()=>{
        logOut()
    }
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navLi}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Kids Universe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navLi}
          </ul>
        </div>
        <div className="navbar-end">
        {user? <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar z-10">
        <div className="w-10 rounded-full" data-tooltip-id="name" data-tooltip-content={user?.displayName}>
          <img src={user?.photoURL} />
          
        <Tooltip id="name"></Tooltip>
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
         <Link to='/addtoy'>Add A Toy</Link>
        </li>
        <li><Link to='/mytoy'>My Toys</Link></li>
        <li className="p-2 cursor-pointer" onClick={handleLogOut}>Log out</li>
      </ul>
    </div>: <Link to='/login'><button className="btn">Login</button></Link>}
        </div>
      </div>
    );
};

export default NavBar;