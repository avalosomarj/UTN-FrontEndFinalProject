import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({id, name, price, img}) => {
  return (
    <div className='Card'>
        <img src={img} alt={name}/>
        <h4 style={{width: '80%'}}>{name}</h4>
        <span>${price.toLocaleString('es-AR')}</span>
        <Link to={'/detail/' + id}><button className='btnDetail'>Ver Detalle</button></Link>
    </div>
  )
}

export default ProductCard