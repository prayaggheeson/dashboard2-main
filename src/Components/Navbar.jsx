import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white bg-opacity-10 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="text-white text-2xl dark:text-white font-bold">
          Logo
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white dark:text-white hover:text-gray-300"
          >
            {isMenuOpen ? <h6>close</h6> : <h6>Menu </h6>}
          </button>
          {isMenuOpen && (
            <div className="">
              <button className="bg-white text-black dark:text-white px-4 py-2 rounded-full">
                Connect wallet
              </button>
            </div>
          )}
        </div>

        {/* Menu in the middle */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:w-auto`}
        >
          <ul className="md:flex space-x-4 text-purple-500 dark:text-white">
            <Link to={"/overview"}>
              <li className="hover:text-gray-300">
                Overview
              </li>
            </Link>
            <Link to={"/"}>
            <li className="hover:text-gray-300">Dashboard</li>
            </Link>
            <Link to={"/staking"}>
            <li className="hover:text-gray-300">Staking</li>
            </Link>
           <Link to={"/rewards"}>
           <li className="hover:text-gray-300">Rewards</li>
           </Link>
          </ul>
        </div>

       
        <div className="hidden md:block">
          <button className="bg-white hover:bg-black hover:text-gray-300 text-black dark:text-white px-4 py-2 rounded-full">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
