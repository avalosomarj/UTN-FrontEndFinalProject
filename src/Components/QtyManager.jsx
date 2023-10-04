import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Context/GlobalContextProvider'

const QtyManager = ({id}) => {
  const [qty, setQty] = useState(1)

  const {handleAddProduct} = useGlobalContext()

  const AddQty = () => {
    setQty((qty) => qty + 1)
  }

  const DelQty = () => {
    setQty((qty) => qty - 1)
  }
  
  return (
    <div className='QtyManager'>
      <div className='ProductQty'>
        <span>Cantidad {qty}</span>
        <button onClick={() => DelQty()} disabled = {qty == 1}>-</button>
        <button onClick={() => AddQty()}>+</button>
      </div>
      <Link to={'/cart'}><button onClick={() => handleAddProduct(id, qty)}>Añadir al carrito</button></Link>
    </div>
  )
}

export default QtyManager