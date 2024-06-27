import { useContext } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => (
        <div className="flex justify-center mb-2" key={item.id}>
          <Card data={item} />
        </div>  
        
      ));
    } else {
      return (
        <div className="w-full flex justify-center items-center">
          We dont have anything :(
        </div>
      );
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-full mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
