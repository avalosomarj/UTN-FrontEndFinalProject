import React, { useEffect, useState } from 'react'
import { dataBase } from '../Assets/data/DB'
import { Error404, ProductCard } from '../Components'
import { TbShoppingBagSearch } from 'react-icons/tb'

const Home = ({id, name, price}) => {

  const [searchString, setSearchString] = useState('')
  const [listProducts, setListProducts] = useState(dataBase)

  const handleFilterProduct = (e) => {
    setSearchString(e.target.value)
  }

  useEffect(() => {
    setListProducts(dataBase.filter(product => product.name.toLowerCase().includes(searchString.toLowerCase())))
  }, [searchString])

  return (
    <div className='homePage'>
      <div className="searchBox">
        <input name='searcher' type="text" placeholder='Busca tu producto aqui' value={searchString} onChange={handleFilterProduct}/>
        <TbShoppingBagSearch className='searchIcon'/>
      </div>
      
      <div className='productList'>
        {
          listProducts.length == 0
          ?
          <Error404 message={'El producto buscado no existe'}/>
          :
          listProducts.map(({id, name, price, img}) => (
            <ProductCard id={id} img={img} name={name} price={price} key={id}/>
          ))
        }
      </div>
    </div>
  )
}

export default Home