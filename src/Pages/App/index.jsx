import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrders from "../MyOrders";
import MyOrder from "../MyOrder";

import NotFound from "../NotFound";
import SignIn from "../SignIn";
import "./App.css";

import Navbar from "../../Components/Navbar";

const AppRoutes = () => {
  let routes = useRoutes([
    {path: "/", element: <Home />},
    {path: "/my-account", element: <MyAccount />},
    {path: "/my-order", element: <MyOrder />},
    {path: "/my-orders", element: <MyOrders />},
    {path: "/sign-in", element: <SignIn/>},
    {path: "/*", element: <NotFound/>},
  ]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <AppRoutes />
      
    </BrowserRouter>
  );
};

export default App;
