import { useEffect, useState } from 'react'
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import {useParams} from "react-router-dom"

const ItemListContainer = () => { 
    const[products, setProducts] = useState([])
    const {category}=useParams();
    useEffect(()=> {
        const fetchData = async () => {
            try{
                const response = await fetch ("./productos.json")
                const data = await response.json()
                setProducts(data)
            }catch(error) {
                console.log(error)
            }
        }

        fetchData()
    },[])

    return (
        <div className='container'>
            <h1 className='titulo'>Welcome to Espresso café</h1>
            <ItemList product={products}/>
        </div>
    )
}

export default ItemListContainer