import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4";
  const context = useContext(ShoppingCartContext);
  return (
    <nav className="bg-white flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={()=> context.setFilterItems(null)}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mens-clothes"
            onClick={()=> context.setSearchByCategory("men's clothing")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Mens clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/womens-clothes"
            onClick={()=> context.setSearchByCategory( "women's clothing")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Womens clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jewelery"
            onClick={()=> context.setSearchByCategory("jewelery")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={()=> context.setSearchByCategory("electronics")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li> */}
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/60">user@gmail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            SignIn
          </NavLink>
        </li>
        <li className="flex items-center">
          <ShoppingBagIcon className="h-6 w-6 text-blue-500"></ShoppingBagIcon>
          <div>{context.count}</div>
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
