import React from 'react'
import './NavBar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux'

function NavBar() {
  const cartItems = useSelector(state => state.cartReducer.cart)
  let noOfItems = 0;
  cartItems.forEach(item => {
    noOfItems += item.quantity;
  })
  return (
    <div className="navContainer">
        <div className="webName">MyWebsite.com</div>
        <div className="cartDiv">
            <AiOutlineShoppingCart id='cartIcon'/>
            <h3 id='noOfItems'>{noOfItems}</h3>
        </div>
    </div>
  )
}

export default NavBar