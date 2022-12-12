import React, { useContext } from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import DetailProduct from './detailproduct/DetailProduct'
import Login  from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import Products from './products/Products'
import NotFound from './utils/notfound/NotFound'
import { GlobalState } from '../../GlobalState'



const MainPages = () => {
 const states=useContext(GlobalState)
 const  [isLogged]=  states.UserAPI.isLogged

   
  return (
  

    
    <Routes>
         
        

      <Route path='/' exact  element={<Products />} />
      <Route path='/detail/:id' exact  element={<DetailProduct />} />
      <Route path='/login'  exact  element={isLogged? <NotFound/>: <Login />} />
      <Route path='/register' exact  element={<Register/>} />
      <Route path='/cart' exact  element={<Cart/>} />
      <Route path='/*' exact  element={<NotFound/>} />
      


     
      </Routes>
       

   
  )
}

export default MainPages