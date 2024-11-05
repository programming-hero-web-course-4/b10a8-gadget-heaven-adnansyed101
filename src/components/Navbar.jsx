import PropTypes from "prop-types";
import { CiMenuFries, CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink, Link, useLocation } from "react-router-dom";

const Navbar = ({ handleSelectedTab }) => {
  const location = useLocation();

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
    </>
  );
  return (
    <div
      className={`navbar container mx-auto mt-2 rounded-t-lg ${
        location.pathname === "/" ? "bg-primary text-white" : "text-black"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <CiMenuFries />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>
      <div className="navbar-end space-x-2">
        <Link
          to="/dashboard"
          className="btn btn-sm btn-circle bg-white"
          onClick={() => handleSelectedTab("cart")}
        >
          <MdOutlineShoppingCart />
        </Link>
        <Link
          to="/dashboard"
          className="btn btn-sm btn-circle bg-white"
          onClick={() => handleSelectedTab("wishlist")}
        >
          <CiHeart />
        </Link>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  handleSelectedTab: PropTypes.func,
};

export default Navbar;
