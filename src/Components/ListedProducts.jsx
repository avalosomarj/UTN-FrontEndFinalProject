import React from 'react'
import { TbTrashXFilled } from 'react-icons/tb'
import { useGlobalContext } from '../Context/GlobalContextProvider'
import { Link } from 'react-router-dom'

const ListedProducts = ({id, name, price, qty}) => {
  const {handleDeleteProduct} = useGlobalContext()

  return (
    <div className='ProductList'>
        <Link to={'/detail/'+ id} style={{width: '60%'}}><span>{name}</span></Link>
        <span style={{width: '10%'}}>${price.toLocaleString('es-AR')}</span>
        <span style={{width: '10%'}}>{qty}</span>
        <span style={{width: '10%'}}>${(price*qty).toLocaleString('es-AR')}</span>
        <TbTrashXFilled className='TrashIcon' style={{width: '10%'}} onClick={() => handleDeleteProduct(id)}/>
    </div>
  )
}

export default ListedProducts