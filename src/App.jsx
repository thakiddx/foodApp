import { useState } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import './App.css'
import CreateFruits from './pages/createfruits'
import Fruits from './pages/fruits'

function App() {


  return (
    <>
    <nav>
      <Link to="/">
        Home
      </Link>
      <Link to="/create">
        Create
      </Link>
    </nav>
    
    <Routes>
    
      <Route path='/' element={<Fruits />} />
      <Route path='/create' element={<CreateFruits />}/>
    </Routes>
    </>
  )
}

export default App
