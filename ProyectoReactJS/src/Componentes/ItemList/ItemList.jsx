import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  // Si 'products' es undefined o está vacío, muestra un mensaje
    if (!products || products.length === 0) {
        return <p>No hay productos disponibles.</p>;
    }

    return (
    <div className="lista">
        {products.map((item) => (
        <Item key={item.id} item={item} />
        ))}
    </div>
    );
};

export default ItemList;