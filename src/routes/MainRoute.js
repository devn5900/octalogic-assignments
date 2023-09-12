import React from 'react'
import { Route, Routes } from 'react-router-dom'

const MainRoute = () => {
  return (
   <Routes>
    <Route path='/'  />
    <Route path='/courses'  />
   </Routes>
  )
}

export default MainRoute