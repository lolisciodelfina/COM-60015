import { useEffect, useState } from 'react'
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import {useParams} from "react-router-dom"
import Spinner from '../Spinner/Spinner'
import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => { 
    const[products, setProducts] = useState([])
    const[loading, setLoading] = useState(true)
    const {categoryId} = useParams();
    useEffect(()=> {
        setLoading(true);
        const db = getFirestore();
        const myProducts = categoryId ? query(collection(db, "item"), where("categoría","==", categoryId)): collection(db, "item");
        getDocs(myProducts)
            .then((res)=> {
                const newProducts =res.docs.map((doc)=> {
                    const data = doc.data();
                    return { id: doc.id, ...data};
                });
                setProducts(newProducts);
            })
            .catch((error)=> console.log("Error searching items", error))
            .finally(()=> setLoading(false));
    },[categoryId])

    return (
        <div className='container'>
            <h1 className='titulo'>Welcome to Espresso café</h1>
            {loading ? <Spinner/> : <ItemList products={products}/>}
        </div>
    )
}

export default ItemListContainer