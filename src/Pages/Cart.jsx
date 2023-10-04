import React from 'react'
import { useGlobalContext } from '../Context/GlobalContextProvider'
import { ListedProducts } from '../Components'
import { Link } from 'react-router-dom'

const Cart = () => {
  const {calcTotalCart, cart} = useGlobalContext()

  return (
    <div className='CartInfo'>
      {
        cart.length == 0
        ?
        "Carrito vacio"
        :
        <>
          <div className='ProductList'>
            <span style={{width: '60%'}}>Producto</span>
            <span style={{width: '10%'}}>Precio</span>
            <span style={{width: '10%'}}>Cantidad</span>
            <span style={{width: '10%'}}>Subtotal</span>
            <span style={{width: '10%'}}></span>
          </div>
          {
            cart.map(({id, name, price, qty}) => (
              <ListedProducts id={id} name={name} price={price} qty={qty} key={id}/>
            ))
          }
          <div className='ProductList'>
            <span style={{width: '100%'}}>Total ${calcTotalCart().toLocaleString('es-AR')}</span>
          </div>
          <Link to={'/'}><button>Seguir comprando</button></Link>
        </>
      }
    </div>
  )
}

export default Cart