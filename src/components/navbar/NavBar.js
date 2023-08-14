import React from 'react'
import './NavBar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

function NavBar() {
  return (
    <div className="navContainer">
        <div className="webName">MyWebsite.com</div>
        <div className="cartDiv">
            <AiOutlineShoppingCart id='cartIcon'/>
        </div>
    </div>
  )
}

export default NavBar