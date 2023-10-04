import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Error404, QtyManager } from '../Components'
import { dataBase } from '../Assets/data/DB'

const ProductDetail = () => {
  const urlParam = useParams()
  const productFound = dataBase.find((product) => product.id === Number(urlParam.id))

  return (
    <div className='productDetailPage'>
      <div className='productDescription'>
        {
          productFound
          ?
          <>
            <h4>{productFound.name}</h4>
            <img src={productFound.img} alt={productFound.name}/>
            <span>Precio: ${productFound.price.toLocaleString('es-AR')}</span>
            <p>{productFound.desc}</p>
            <QtyManager id={productFound.id}/>
          </>
          :
          <Error404 message={'El producto buscado no existe'}/>
        }
      </div>
    </div>
  )
}

export default ProductDetail