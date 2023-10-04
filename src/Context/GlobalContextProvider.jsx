import React, { createContext, useContext, useState } from 'react'
import { dataBase } from '../Assets/data/DB'

const GlobalContext = createContext()
  const GlobalContextProvider = ({children}) => {

  const [cart, setCart] = useState([])

  const isInCart = (id) => cart.some(product => product.id === id)

  const handleAddProduct = (id, qtyToCart) => {
    const productFound = dataBase.find(product => Number(product.id) === Number(id))

    if(isInCart(id)){
      setCart(cart.map((product) => {
          if(Number(product.id) === Number(id)){
            product.qty += qtyToCart
          }
          return product
      }))
    }
    
    else{
      setCart([...cart, {...productFound, qty: qtyToCart}])
    }
  }

  const handleDeleteProduct = (id) => {
    setCart(cart.filter(product => Number(product.id) !== Number(id)))
  }

  const calcTotalCart = () => {
    let total = 0
    cart.forEach(product => {
      total += product.price * product.qty
    })
    return total
  }

  console.log(cart)

  return (
    <GlobalContext.Provider value={{handleAddProduct, handleDeleteProduct, calcTotalCart, cart}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider

export const useGlobalContext = () => useContext(GlobalContext)