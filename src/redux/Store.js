
import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/ProductSlice';
import cartSlice from "./slices/CartSlice";

export default configureStore({
    reducer : {
        productReducer : productSlice,
        cartReducer : cartSlice
    } 
})