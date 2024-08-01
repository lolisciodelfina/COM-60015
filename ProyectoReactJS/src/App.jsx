import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Componentes/Navbar/Navbar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='todo'>
      <header>
        <Navbar/>
      </header>
      <main>
        <ItemListContainer greeting="Welcome to Espresso café"/>
      </main>
    </div>
      
  )
}

export default App
