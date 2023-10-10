import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({id, name, price, img}) => {
  return (
    <div className='Card'>
        <img src={img} alt={name}/>
        <h4>{name}</h4>
        <h4>${price.toLocaleString('es-AR')}</h4>
        <Link to={'/detail/' + id}><button className='btnGlobal'>Ver Detalle</button></Link>
    </div>
  )
}

export default ProductCard