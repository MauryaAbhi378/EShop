import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {Home, Login, Register, Reset} from './index'

const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/reset' element={<Reset/>}/>
    </Routes>
  )
}

export default Pages
