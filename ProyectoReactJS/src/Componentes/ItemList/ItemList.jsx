import React from "react"
import Item from "../Item/Item"
import "./ItemList.css"

const ItemList=({product}) => {

    return (
        <div className="lista">
            {product.map((item) => (
                <Item key= {item.id} item={item}/>
            ))}
        </div>
    )
}
export default ItemList