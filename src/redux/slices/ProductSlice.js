
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('product/fetch', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
})

const productSlice = createSlice({
    name : "productSlice",
    initialState : {
        products : [],
        status : 'idle', //could be idle, pending, success & failed
        error : null
    },
    // reducers : {
    //     loadProducts : (state, action) => {
    //         state.products = action.payload;
    //     }
    // },
    extraReducers : function(builder){
        builder
            .addCase(fetchData.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'success';
                state.products = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})
export default productSlice.reducer;
export const {loadProducts} = productSlice.actions;