import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Courses from '../pages/Courses'
import Login from '../pages/Login'

const MainRoute = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/courses' element={<Courses/>} />
   </Routes>
  )
}

export default MainRoute