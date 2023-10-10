import React from 'react'
import { useParams } from 'react-router-dom'
import { Error404, QtyManager } from '../Components'
import { dataBase } from '../Assets/data/DB'

const ProductDetail = () => {
  const urlParam = useParams()
  const productFound = dataBase.find((product) => product.id === Number(urlParam.id))

  return (
    <div className='productDetailPage'>
        {
          productFound
          ?
          <div className='productInfo'>
            <h3>{productFound.name}</h3>
            <div className='productDescription'>
              <img src={productFound.img} alt={productFound.name}/>
              <div className='actionBuy'>
                <h3>Precio: ${productFound.price.toLocaleString('es-AR')}</h3>
                <QtyManager id={productFound.id}/>
              </div>
            </div>
            <h4>Descripción</h4>
            <p>{productFound.desc}</p>
          </div>
          :
          <Error404 message={'El producto buscado no existe'}/>
        }
      </div>
  )
}

export default ProductDetail