import React from "react";
import Product from "../components/Product";
import { products } from "../Data"; // Import the products array

const Item = () => {
  const [loading] = React.useState(false);

  // No need for fetchProductData function and useEffect anymore

  return (
    <div>
      {loading ? (
        // Add loading indicator or message here
        <p>Loading...</p>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-6 min-h-[80vh]">
          {products.map((product) => (
            <Product key={product.id} post={product} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Item;
