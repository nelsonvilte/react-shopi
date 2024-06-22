import { useContext } from "react";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

import "./style.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  console.log("Product to show: ", context.productToShow);

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen  ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div onClick={() => context.closeCheckoutSideMenu()}>
          <XMarkIcon className="h-6 w-6 text-blue-500"></XMarkIcon>
        </div>
      </div>
      
    </aside>
  );
};

export default CheckoutSideMenu;
