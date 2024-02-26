import {Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li className="font-bold">
        <NavLink to="/"	>Home</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/service">Services</NavLink>
      </li>

      <li className="font-bold">
        <a href="#">About</a>
      </li>
      <li className="font-bold">
        <a href="#">Contact</a>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 py-3 my-2 border-y-2 px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {navLink}
            </ul>
          </div>
          <div>
            <Link className="lg:text-5xl font-bold">
              <span className="text-[#FD7800]">E</span>Manage
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-white bg-[#FD7800] px-10">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
