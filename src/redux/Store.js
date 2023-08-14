
import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/ProductSlice';


export default configureStore({
    reducer : {
        productReducer : productSlice,
    } 
})