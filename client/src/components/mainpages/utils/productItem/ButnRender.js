import React,{useContext} from 'react'

import { Link } from 'react-router-dom'

import { GlobalState } from '../../../../GlobalState'


const ButnRender = ({product}) => {
  const state= useContext(GlobalState)
 
  const [products]=state.productApi.products
 
 const  [isAdmin]=  state.UserAPI.isAdmin
 const  addcart=  state.UserAPI.addCart
  
  return (


    <div className='row_btn'>

   {
    isAdmin ?
     <>
     <Link id='btn_buy' to ="#!" >
      Delete
</Link>
<Link id='btn_view' to ={`/detail/${product._id}`}>
      Edit
</Link>
     
     </>:
     <>
     <Link id='btn_buy' to ="#!"onClick={()=>addcart(product)}>
     Buy
     </Link>
     <Link id='btn_view' to ={`/detail/${product._id}`}>
      view
     </Link>
     </>

   }


</div>
  )
}




export default ButnRender