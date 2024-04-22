import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "../redux/Slice/CartSlice";
import { TotalPriceSlice } from "../redux/Slice/TotalPrice";

export const store = configureStore({
    reducer: {
        cart: CartSlice.reducer,
        totalPrice: TotalPriceSlice.reducer,
    }
});