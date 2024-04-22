import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CarteItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const { totalPrice } = useSelector((state) => state.totalPrice);

  return (
    <div >
      {cart.length > 0 ? (
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {cart.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
          </div>

          <div className="w-[100%] md:w-[45%] mt-5  flex flex-col">
            <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
              <div className="flex flex-col gap-5 ">
                <div className="font-semibold text-xl text-black-800 ">Your Cart</div>
                <div className="font-semibold text-5xl text-black-700  -mt-5">Summary</div>
                <p className="text-xl">
                  <span className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="text-xl font-bold"><span className="text-gray-700 font-semibold">Total Amount:</span> ${totalPrice}</p>
              <button className="bg-black-700  ">CheckOut Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[90vh] flex flex-col items-center justify-center">
          <h1 className="text-black-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>
          <Link to={"/home"}>
            <button>
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
