import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart, Contact, Home, ProductDetail } from '../Pages'
import { Error404 } from '../Components'

const PagesRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/index' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/detail/:id' element={<ProductDetail/>}/>
            <Route path='*' element={<Error404 message={'La URL ingresada no existe'}/>}/>
        </Routes>
    </>
  )
}

export default PagesRouter