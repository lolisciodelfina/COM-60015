import React, {useState} from 'react'
import "./ItemCount.css"

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)
    const increment = () =>{
        if (count<stock){
            setCount(count + 1);
        }      
    }
    const decrement = () =>{
        if(count>initial){
            setCount (count-1);
        }
    }
    return (
        <div className='cont'>
            <button onClick={decrement}> - </button>
            <h4>{count}</h4>
            <button onClick={increment}> + </button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>                                          
    );
};

export default ItemCount;