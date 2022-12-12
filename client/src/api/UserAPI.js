import React,{useState,useEffect} from 'react'
import axios from 'axios'

const UserAPI = (token) => {
    const [isLogged,setLogged]=useState(false)
    const [isAdmin,setIsAdmin]=useState(false)
    const [cart,setCart]=useState([])
   useEffect(()=>{
   if(token){
   const getUser =async()=>{

   try {
      
    const res=await axios.get('/user/infor',{

        headers: {authorization:token}

    })
    setLogged(true)
    res.data.role ===1? setIsAdmin(true) : setIsAdmin(false)
    setCart(res.data.cart)

   } catch (err) {
     alert(err.response.data.msg)
    
   }

   }
      
  getUser()

   }
},[token])


  const addCart = async (product)=>{

   if(!isLogged) return alert("Please login  to continue")
   
   const check =cart.every(item=>{

     return item._id!== product._id

   })
   if(check){

    setCart([...cart,{...product,quantity:1}])

    await axios.patch('/user/addcart',{cart:[...cart,{...product,quantity:1}]},{
  headers:{authorization:token}

    })
   }else{

     alert("this product has been added to cart")
   }

  }

   

  return {
    isLogged:[isLogged,setLogged],
    isAdmin:[isAdmin,setIsAdmin],
    addCart:addCart,
    Cart:[cart,setCart]

  }
}

export default UserAPI