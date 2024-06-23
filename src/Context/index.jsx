import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({ children }) => {
  // shopping Cart- Increment quantity
  const [count, setCount] = useState(0);

  //Shopping Cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  //Shopping cart - Order
  const [order, setOrder] = useState([]);

  // product detail - open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Checkout side menu - open/close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // producto detail - show product
  const [productToShow, setProductToShow] = useState({});

  //Get products
  const [items, setItems] = useState(null);
    //Get products by title
  const [searchByTitle, setSearchByTitle]= useState(null)
  console.log('searchByTitle: ',searchByTitle )

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle, 
        setSearchByTitle
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
