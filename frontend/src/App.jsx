import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from './components/Create'
import Read from './components/Read'
import NavBar from './components/NavBar'
import EditUserData from './components/EditUserData'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />} />
      <Route path='/create' element={<Create />} />
      <Route path='/read' element={<Read />} />
      <Route path='/edit/:id' element={<EditUserData />} />
    </Routes>
  )
}

export default App
