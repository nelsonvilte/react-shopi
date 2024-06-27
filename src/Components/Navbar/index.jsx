import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingBagIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4";
  const context = useContext(ShoppingCartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <nav className="bg-yellow-300 fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button className="lg:hidden mr-4" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
          <NavLink
            to="/"
            className="font-semibold text-lg"
            onClick={() => context.setSearchByCategory()}
          >
            Free Shopi
          </NavLink>
        </div>
        <ul className="hidden lg:flex items-center gap-3">
          <li>
            <NavLink
              to="/"
              onClick={() => context.setSearchByCategory()}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mens-clothes"
              onClick={() => context.setSearchByCategory("men's clothing")}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Mens clothing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/womens-clothes"
              onClick={() => context.setSearchByCategory("women's clothing")}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Womens clothing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jewelery"
              onClick={() => context.setSearchByCategory("jewelery")}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Jewelery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/electronics"
              onClick={() => context.setSearchByCategory("electronics")}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Electronics
            </NavLink>
          </li>
        </ul>
        <ul className="flex items-center gap-3">
          <li className="relative">
            <UserCircleIcon
              className="h-6 w-6 text-blue-500 cursor-pointer"
              onClick={toggleUserMenu}
            />
            {isUserMenuOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                <li>
                  <NavLink
                    to="/my-orders"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    onClick={toggleUserMenu}
                  >
                    My Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-account"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    onClick={toggleUserMenu}
                  >
                    My Account
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/sign-in"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    onClick={toggleUserMenu}
                  >
                    SignIn
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          
          <li className="flex items-center">
            <ShoppingBagIcon
              className="h-6 w-6 text-blue-500"
              onClick={() => context.openCheckoutSideMenu()}
            ></ShoppingBagIcon>
            <div>{context.cartProducts.length}</div>
          </li>
        </ul>
      </div>
      {isOpen && (
        <ul className="lg:hidden mt-4 space-y-2">
          <li>
            <NavLink
              to="/"
              onClick={() => {
                context.setSearchByCategory();
                toggleMenu();
              }}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mens-clothes"
              onClick={() => {
                context.setSearchByCategory("men's clothing");
                toggleMenu();
              }}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Mens clothing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/womens-clothes"
              onClick={() => {
                context.setSearchByCategory("women's clothing");
                toggleMenu();
              }}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Womens clothing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jewelery"
              onClick={() => {
                context.setSearchByCategory("jewelery");
                toggleMenu();
              }}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Jewelery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/electronics"
              onClick={() => {
                context.setSearchByCategory("electronics");
                toggleMenu();
              }}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Electronics
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
