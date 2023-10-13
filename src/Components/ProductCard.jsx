import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({id, name, price, img}) => {
  return (
    <div className='Card'>
        <img src={img} alt={name}/>
        <span>{name}</span>
        <h4>${price.toLocaleString('es-AR')}</h4>
        <Link to={'/detail/' + id}><button className='btnGlobal'>Comprar</button></Link>
    </div>
  )
}

export default ProductCard