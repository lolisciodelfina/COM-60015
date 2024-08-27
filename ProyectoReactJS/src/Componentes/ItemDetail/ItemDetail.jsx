import React from 'react'

const ItemDetail = ({product}) => {
    return (
        <div className='card'>
            <h2>{product.nombre}</h2>
            <img src={product.imagen} alt={product.nombre}/>
            <p>{product.descripcion}</p>
            <p> Stock: {product.stock}</p>
            <p>${product.precio}</p>
            <p>Categoría: {product.categoria} </p>
        </div>
    )
}

export default ItemDetail