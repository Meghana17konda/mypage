import React from 'react'
import Login from './Login'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from "./Signup"
import Home from './Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App


