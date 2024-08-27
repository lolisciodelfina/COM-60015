import { useState } from 'react'
import './App.css'
import Navbar from './Componentes/Navbar/Navbar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import Error from "./Componentes/Error/Error"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useParams} from "react-router-dom"

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="todo">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:producto' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
} 

export default App
