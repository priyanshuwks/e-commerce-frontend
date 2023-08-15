import React from "react";
import {BsCurrencyRupee} from 'react-icons/bs';
import './SingleProduct.css'
import {AiOutlineMinus} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
// import { removeFromCart } from "../../redux/slices/CartSlice";

function SingleProduct({ product }) {
  // const dispatch = useDispatch();
  // const cart = useSelector(state => state.cartReducer.cart);
  // const currItem = cart.find(item => product.id === cart.id);
  let currQuantity = 1;
  // currQuantity = currItem ? currItem.quantity : 0;

  return (
    <div className="itemDiv">
      <img src={product.image} alt="" className="imageStyle"/>
      <h3 className="titleStyle">{product.title}</h3>
      <h4 className="priceStyle"><BsCurrencyRupee/>{ product.price * 80}</h4>
      <div className="plusMinusDiv">
        <button className="minusButton buttons" ><AiOutlineMinus/></button>
        <h4 id="noOfItems">{currQuantity}</h4>
        <button className="plusButton buttons" ><AiOutlinePlus/></button>
      </div>
    </div>
  );
}

export default SingleProduct;
