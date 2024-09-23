import React, { useContext } from 'react'
import { cartContext } from '../../context/CartContext/CartProvider'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {getTotalProducts} = useContext(cartContext)
    return (
        <Link to={"/cart"} className='cart'>
            {getTotalProducts() === 0 ? null : getTotalProducts()}
        </Link>
    )
}

export default CartWidget