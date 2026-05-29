import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";


function Navbar() {
  return (
    <>
      {/* NAVBAR */}
      <div className="bg-gray-200 text-black shadow-sm">

        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          {/* LOGO */}
          <h1 className="text-2xl font-bold">
            Fashion World
          </h1>

          {/* NAV LINKS */}
          <nav className="flex items-center gap-6 font-medium">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#FF6F61] text-white px-4 py-2 rounded-md"
                  : "hover:text-[#FF6F61]"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/Categories"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#FF6F61] text-white px-4 py-2 rounded-md"
                  : "hover:text-[#FF6F61]"
              }
            >
              Categories
            </NavLink>

            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#FF6F61] text-white px-4 py-2 rounded-md"
                  : "hover:text-[#FF6F61]"
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#FF6F61] text-white px-4 py-2 rounded-md"
                  : "hover:text-[#FF6F61]"
              }
            >
              Contact
            </NavLink>

          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-8">

            {/* CART */}
            <Link to="/Cart">
              <FaShoppingCart className="text-xl cursor-pointer hover:text-[#FF6F61]" />
            </Link>

            {/* USER ICON */}
            <Link to="/Userpopup">
              <FaUser className="text-xl cursor-pointer hover:text-[#FF6F61]" />
            </Link>

            {/* LOGIN BUTTON */}
            <Link to="/Login">
              <button className="bg-black text-white px-5 py-2 rounded-md font-semibold hover:bg-[#FF6F61] transition">
                Login
              </button>
            </Link>

          </div>

        </div>
      </div>
    </>
  );
}

export default Navbar;