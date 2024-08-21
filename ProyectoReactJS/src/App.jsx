import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Componentes/Navbar/Navbar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  return (
    
    <div className='todo'>
      <header>
        <Navbar/>
      </header>
      <main>
        <ItemListContainer/>
      </main>
    </div>
      
  )
}

export default App
