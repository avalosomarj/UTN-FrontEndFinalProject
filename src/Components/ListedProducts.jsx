import React from 'react'
import { TbTrashXFilled } from 'react-icons/tb'
import { useGlobalContext } from '../Context/GlobalContextProvider'
import { Link } from 'react-router-dom'

const ListedProducts = ({id, name, img, price, qty}) => {
  const {handleDeleteProduct} = useGlobalContext()

  return (
    <div className='ProductListCard'>
        <div className='ProductImg'>
          <img src={img} alt={name}/>
        </div>
        <div className='ProductInCart'>
          <Link to={'/detail/'+ id}><h3>{name}</h3></Link>
          <h5>${price.toLocaleString('es-AR')}</h5>
          <span>x {qty} un.</span>
          <h4>${(price*qty).toLocaleString('es-AR')}</h4>
          <button className='btnTash' onClick={() => handleDeleteProduct(id)}><TbTrashXFilled/></button>
        </div>
    </div>
  )
}

export default ListedProducts