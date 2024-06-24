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
  const [filteredItems, setFilteredItems] = useState(null);

  //Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null);

  //Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null);
  console.log("searchByCategory: ", searchByCategory);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    //console.log("Items: ", items);
    return items?.filter((item) =>
      item.category.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  useEffect(() => {
    if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle));
    if(searchByCategory){
      console.log("searchByCategory encontrada: ", searchByCategory);
      setFilteredItems(filteredItemsByCategory(items, searchByCategory));}
  }, [items, searchByTitle, searchByCategory]);

  console.log("filteredItems: ", filteredItems);

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
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
