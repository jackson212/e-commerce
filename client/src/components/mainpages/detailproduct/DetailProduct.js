import React,{useContext,useState,useEffect} from 'react'
import { useParams,Link} from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import './DetailProduct.css'



const DetailProduct = () => {
    const params= useParams()
    const state =useContext(GlobalState)
    const [products]=state.productApi.products
    const [detailproduct,setDetailProduct ]=useState([])
    useEffect(()=>{
     
        if(params.id){
            console.log("re-render")
                 
            products.forEach(product=>{
                
                if(product._id===params.id){
                    setDetailProduct(product)
                }
    

            })

        }
 

    },[params.id,products])



    console.log(detailproduct)
      
 
   
    if(detailproduct.length===0){
        return null;
    }

  return (
    <>
    <div className='detail'>
        <img src={detailproduct.images.url}/>
        <div className='box-detail'>
        <div className='row'>
            <h2>{detailproduct.title}</h2>
            <h2>{detailproduct.product_id}</h2>
        </div>
         <span>${detailproduct.price}</span>
         <p>{detailproduct.description}</p> 
         <p>{detailproduct.content}</p> 
         <p>Sold: {detailproduct.sold}</p>
         <Link to ="/cart" className='cart'>BuyNow</Link> 
         
              

        </div>
    </div>
      <h2> Realted product</h2>
      <div className='products' >
          {

             products.map(product=>{

                return product.category === detailproduct.category
                ?<ProductItem key ={product._id} product={product}/>:null
             })
      
          }



      </div>

    <div>


    </div>
 
</>
  )
}

export default DetailProduct