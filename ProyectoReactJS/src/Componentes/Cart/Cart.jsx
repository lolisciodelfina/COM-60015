import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../context/CartContext/CartProvider'
import CartDetail from '../CartDetail/CartDetail';



const Cart = () => {
    const {cart, getTotal, getTotalProducts, removeToCart, clearCart, buy} = useContext(cartContext);
    return (
        <div>
            {cart.length === 0 ? (
                <h1>No hay productos en el carrito</h1>
            ):(
                <>
                    <CartDetail cart={cart} />
                </>
            )}
        </div>
    );
};

export default Cart