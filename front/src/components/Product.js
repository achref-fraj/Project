import React from 'react'
import HoverImage from 'react-hover-image/build';
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "./redux/Slice/CartSlice";
import { price } from "./redux/Slice/TotalPrice";
import { toast } from "react-hot-toast";

const Product = ({post}) => {
    const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    dispatch(price(post.price));
    toast.success("Item added to Cart");
  }


  const removeFromCart = () => {
    dispatch(remove(post.id));
    dispatch(price(-post.price));
    toast.error("Item removed from Cart");
  }

return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.type}</p>
      </div>
   
      <div className="h-[200px]">
      <HoverImage
  src={post.primaryImage}
  hoverSrc={post.hoverImg}
  style={{ width: "250px", height: "250px" }}
  className="image"
/>



      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-black-600 font-semibold">${post.price}</p>
        </div>

        {
          cart.some((p) => p.id === post.id) ?
            (<button
              className="text-black-700 border-2 border-black-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-black-700
          hover:text-white transition duration-300 ease-in"
              onClick={removeFromCart}>
              Remove Item
            </button>) :
            (<button
              className="text-black-700 border-2 border-black-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-red-700
          hover:text-white transition duration-300 ease-in"
              onClick={addToCart}>
              Add to Cart
            </button>)
        }
      </div>
    </div>
  );
};


export default Product;