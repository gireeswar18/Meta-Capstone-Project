import { useState } from "react";
import logo from "../assets/Logo .svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex justify-between w-full items-center px-8 md:px-20 py-4 font-markazi text-2xl text-green-dark">
      {!showMenu && <img src={logo} alt="logo" className="" />}
      {!showMenu ? (
        <GiHamburgerMenu
          size={24}
          onClick={() => setShowMenu((prev) => !prev)}
          className=" top-5 right-5 md:hidden"
        />
      ) : (
        <IoCloseSharp
          size={24}
          onClick={() => setShowMenu((prev) => !prev)}
          className=" top-5 right-5 md:hidden"
        />
      )}

      <ul className="hidden md:flex gap-4">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
        <li>
          <a href="/allBookings">Reservations</a>
        </li>
        <li>
          <a href="">Order</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
      {showMenu && (
        <ul className="text-center w-full">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="/allBookings">Reservations</a>
          </li>
          <li>
            <a href="">Order</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
