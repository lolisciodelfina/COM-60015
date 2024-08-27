import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {
    const[product, setProduct] = useState("")
    const {id} = useParams();
    useEffect(()=> {
        const fetchData = async () => {
            try{
                const response = await fetch ("/productos.json")
                const data = await response.json()
                const newProduct= data.find(p => p.id===1)
                setProduct(newProduct)
            }catch(error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <div className='lista'>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer