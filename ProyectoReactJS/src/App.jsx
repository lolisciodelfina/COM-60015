import { useState , useEffect} from 'react'
import './App.css'
import Navbar from './Componentes/Navbar/Navbar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import Error from "./Componentes/Error/Error"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useParams} from "react-router-dom"
import CartProvider from './context/CartContext/CartProvider'
import Cart from './Componentes/Cart/Cart'
import { db } from './main'
import {getFirestore, collection, getDocs, query, where, orderBy} from "firebase/firestore";


const App = () => {
  const [products, setProducts] = useState([])
  useEffect(()=> {
    const db = getFirestore();
    const q = query(collection(db, "item"), orderBy("categoría", "asc"));


    getDocs(q).then((querySnapshot)=> {
      if (querySnapshot.size === 0){
        console.log("No hay resultados");
      }
      setProducts(
        querySnapshot.docs.map((doc)=> ({id: doc.id, ...doc.data() }))
      );
    })
  }, []);

  console.log(products);

  return (
    <CartProvider>
      <div className="todo">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  )
} 

export default App
