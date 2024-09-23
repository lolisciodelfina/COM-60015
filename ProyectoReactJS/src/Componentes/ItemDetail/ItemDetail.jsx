import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../context/CartContext/CartProvider'
import ItemCount from '../ItemCount/ItemCount';
import {Link} from "react-router-dom"

const ItemDetail = ({product}) => {
    const {addToCart} = useContext(cartContext);
    const onAdd = (quantity) => {
        addToCart(product, quantity);
    };
    return (
        <div className='card'>
            <h2>{product.nombre}</h2>
            <img src={product.imagen} alt={product.nombre}/>
            <p>{product.descripcion}</p>
            <p> Stock: {product.stock}</p>
            <p>${product.precio}</p>
            <p>Categoría: {product.categoria} </p>
            <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
            <Link to="/cart">Terminar la compra</Link>
        </div>
    )
}

export default ItemDetail