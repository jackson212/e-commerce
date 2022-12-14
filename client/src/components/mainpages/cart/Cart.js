import React, { useContext, useEffect, useState } from 'react'
import { GlobalState } from '../../../GlobalState'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PaypalButton  from './PaypalButton '

const Cart = () => {
  
  const  state = useContext(GlobalState)
  const [token]=state.token
  console.log("token...",token[0])
  const [cart,setCart]=   state.UserAPI.Cart
 const [total,setTotal]=useState(0)
  

 const addCart=async()=>{
  
   await axios.patch('/user/addcart',{cart:[...cart]},{headers:{Authorization:token}}
   
   )}


 useEffect(()=>{
  
  const getTotal=()=>{

   const total =cart.reduce((prev,item)=>{

   return prev +(item.price*item.quantity)

   },0)
    
   setTotal(total)
   addCart()
  
  }
   
getTotal()
 },[cart])

 const increment =(id)=>{

 cart.forEach(item=>{
    
  if(item._id===id){
 item.quantity +=1

  }

 })

 setCart([...cart])
 addCart()

 }

 const decrement =(id)=>{

  cart.forEach(item=>{
     
   if(item._id===id){
  item.quantity ===1?item.quantity=1:item.quantity-=1
 
   }
 
  })
 
  setCart([...cart])
  addCart()
  }
 
const removeProduct=(id)=>{

 if(window.confirm("Do you want to delete this product" ))
 {
  cart.forEach((item,index)=>{

  if(item._id===id){

   cart.splice(index,1)

  }

  })

 setCart([...cart])
 addCart()
}

}

   if(cart.length==0){

 return <h2 style={{textAlign:'center', fontSize:"5rem"}}> Cart Empty </h2>

   } 
  
  
  return (
  
    <div>
       {
       cart.map( product =>(
        <div className='detail  cart' key={product._id}>
        <img src={product.images.url} alt="" className='image'/>
        <div className='box-detail'>
       
            <h2>{product.title}</h2>
          
        
         <span>${product.price * product.quantity} </span>
         <p>{product.description}</p> 
         <p>{product.content}</p> 
         <div className='amount'>
           <button onClick={()=> decrement(product._id)}>-</button>
           <span>{product.quantity}</span>
           <button onClick={()=> increment(product._id)}>+</button>
          </div>
        
         <div className='delete' onClick={()=> removeProduct(product._id)}>X</div>
              

        </div>
    </div>
       ))
         }
     
     <div className='total'>
       <h3>Total : {total}$ </h3>
       <PaypalButton />
     </div>
 

    </div> 
 
  
    




    )
}
   
export default Cart        