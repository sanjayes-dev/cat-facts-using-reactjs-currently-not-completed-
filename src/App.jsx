import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Factbutton from './Components/Factbutton'
import Factcard from './Components/Factcard'

function App() {
 
  return (
    <>
      
      <Routes>
        <Route path='/factbutton' element={<Factbutton/>}/>
         <Route path='/factcard' element={<Factcard/>}/>
      </Routes>
      <Factbutton/>
    </>
  )
}

export default App
