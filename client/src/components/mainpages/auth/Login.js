import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Login.css'
const Login = () => {
  const [user,setUSer]=useState({

      email:"",password:''
  })

  const onChangeInput=e=>{
     
    const {name,value}=e.target;
    setUSer({...user,[name]:value})
    
  }
  const loginSubmit=async (e) =>{
    e.preventDefault()
    try {
      await axios.post('/user/login',{...user})
      localStorage.setItem('firstLogin',true)
      window.location.href="/"
      
    } catch (err) {
   
      alert(err.response.data.msg)
      
    }          
 

  }


  return (
    <div className='login-page'>
      <form onSubmit={loginSubmit}>
        <h2>Login</h2>
             
             <input type='email' name='email' required
             placeholder='Email' value={user.email} onChange={onChangeInput}/>
              
              <input type='password' name='password' required
             placeholder='password' value={user.password} onChange={onChangeInput}/>
              
              <div className='row'>
                <button type='submit'>Login</button>
                <Link to ='/register'>register</Link>

              </div>

      </form>

      

      </div>
  )
}

export default Login