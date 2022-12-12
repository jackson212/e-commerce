import React,{useContext, useEffect, useRef} from 'react'
import { GlobalState } from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import './products.css'

const Products = () => {

 const state= useContext(GlobalState)
 
 const [products]=state.productApi.products

const  [isAdmin]=  state.UserAPI.isAdmin

 return (
   
<div className='products'>
   {
  products.map(products=>{

     return <ProductItem key={products._id} product={products}isAdmin={isAdmin}/>
  })

   }
  

</div>

  )
}

export default Products