import React from 'react'
import { Link } from 'react-router-dom'

import ButnRender from './ButnRender'
const ProductItem = ({product,isAdmin}) => {
  return (
    <div className='product_card'>
      {
        isAdmin&& <input type='checkbox' checked={product.checked}/>
      }
        <img  src={product.images.url} alt="" />
        
        <div className='product-box'>
            
            <h2 title={product.title}>{product.title}</h2>
            <span>${product.price}</span>
            <p>{product.description}</p>
        </div>
     
     
        <ButnRender product={product}/>

        </div>
  )
}

export default ProductItem