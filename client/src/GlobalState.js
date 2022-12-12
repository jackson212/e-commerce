import axios from "axios";
import React,{createContext,useState,useEffect} from "react";
import productApi from "./api/productApi";
import UserAPI from "./api/UserAPI";

export const GlobalState=createContext()


export const DataProvider=({children})=>{
 
  const [token,setToken]=useState(false)
   

  

   
   const state={
   token :[token,setToken],
   productApi:productApi(),
   UserAPI:UserAPI(token)


   }


  useEffect(()=>{
     
    const firstLogin =localStorage.getItem('firstLogin')
    if(firstLogin){
      const refreshToken=async ()=>{

        const res =await axios.get('/user/refreshtoken')
         console.log(res)
         setToken(res.data.accesstoken)
         
         
         
        setTimeout(()=>{
           
          refreshToken()

        },10*60*1000)
      }
      refreshToken()
    }
    
   
  },[])
  

  return(
  
   <GlobalState.Provider value={state}>
      
      {children}

   </GlobalState.Provider>

  )




}