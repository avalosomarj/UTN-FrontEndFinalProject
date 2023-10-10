import React from 'react'
import { useGlobalContext } from '../Context/GlobalContextProvider'
import { ListedProducts } from '../Components'
import { Link } from 'react-router-dom'
import { TbShoppingCartOff } from 'react-icons/tb'

const Cart = () => {
  const {calcTotalCart, cart} = useGlobalContext()

  return (
    <div className='CartInfo'>
      {
        cart.length == 0
        ?
        <>
          <TbShoppingCartOff style={{fontSize: '100px', color: 'darkred'}}/>
          <h2 style={{textAlign: 'center'}}>Tu carrito se encuentra vacío</h2>
          <Link to={'/'}><button className='btnGlobal'>Ir al catálogo</button></Link>
        </>
        :
        <>
          {
            cart.map(({id, name, img, price, qty}) => (
              <ListedProducts id={id} name={name} img={img} price={price} qty={qty} key={id}/>
            ))
          }
          <Link to={'/'}><button className='btnGlobal'>Seguir comprando</button></Link>
          <br/>
          <h2>Total ${calcTotalCart().toLocaleString('es-AR')}</h2>
        </>
      }
    </div>
  )
}

export default Cart