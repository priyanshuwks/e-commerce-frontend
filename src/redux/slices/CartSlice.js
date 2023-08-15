import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cartSlice",
    initialState : {
        cart : []
    },
    reducers : {
        addToCart : (state, action) => {
            const itemInCart = state.cart.find(item => item.id === action.payload);
            if(itemInCart){
                itemInCart.quantity += 1;
            }else{
                state.cart.push({
                    id : action.payload,
                    quantity : 1
                })
            }
        },
        removeFromCart : (state, action) => {
            const itemInCart = state.cart.find(item => item.id === action.payload);
            if(itemInCart){
                itemInCart.quantity -= 1;
                if(itemInCart.quantity === 0){
                    state.cart = state.cart.filter(item => item.id !== action.payload)
                }
            }
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;