import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
}

export const TotalPriceSlice = createSlice({
    name: "totalPrice",
    initialState,
    reducers: {
        price: (state, action) => {
            state.totalPrice += action.payload;
        },
    }
});

export const { price } = TotalPriceSlice.actions;
export default TotalPriceSlice.reducer;