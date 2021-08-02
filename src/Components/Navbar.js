import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React  from 'react'
import { Link } from 'react-router-dom'

import UseFirestore from '../Firebase/UseFirestore';

function Navbar() { 
    const [,,,,cartItems,] = UseFirestore();

    return (
        <nav className={'navbar'} id="nav">
            <Link to="/ReactEcommerceHome">Home</Link>            
            <Link to="/ReactEcommerceShop">Shop</Link>    
            <Link to="/ReactEcommerceShopingcart"><FontAwesomeIcon icon={faShoppingCart}/> <span>{ cartItems.length }</span> </Link>
            <Link to="/ReactEcommerceAccount"><FontAwesomeIcon icon={faUser}/></Link>            
        </nav>

    )
}

export default Navbar
