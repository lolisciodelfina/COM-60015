import React, {createContext, useState} from 'react'

export  const cartContext = createContext();

export const CartProvider = ({children}) => {
    const[cart, setCart] = useState([]);

    //Agregar al carrito
    const addToCart = (product, quantity) => {
        if(isInCart(product.id)){
            setCart(
                cart.map((item) =>
                    item.product.id === product.id
                    ? {... item,quantity: item.quantity + quantity}
                    : item
                )
            )
        }else {
            setCart([...cart,{product,quantity}]);
        }
    };

    //Borrar del carrito    
    const removeToCart = (productId) => {
        setCart(cart.filter((item) => item.product.id !== productId));
    };

    //Ver mi carrito
    const isInCart  = (productId) => {
        return cart.some ((item)=> item.product.id === productId )
    };

    //Limpiar mi carrito
    const clearCart  = () => {
        setCart([]);
    };

    //Total del carrito
    const getTotal  = () => {
        return cart.reduce((total, item)=> total + item.product.precio*item.quantity, 0)
    };

    //Total de productos
    const getTotalProducts  = () => {
        return cart.reduce((total, item)=> total + item.quantity, 0)
    };

    //Comprar
    const buy  = () => {
        console.log("Compra realizada con éxito");
        clearCart();
    };

    return (
        <cartContext.Provider
            value={{
                cart,
                addToCart,
                removeToCart,
                isInCart,
                clearCart,
                getTotal,
                getTotalProducts,
                buy,
            }}
        >
            {children}
        </cartContext.Provider>
    );
};

export default CartProvider