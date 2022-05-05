import axios from 'axios'
import { message } from 'antd'

export const userLogin=(reqObj)=>async dispatch =>{
    dispatch({type:'LOADING',payload:true})
   
    try{
    
        const response=await axios.post('/login',reqObj) 
       localStorage.setItem('user',JSON.stringify(response.data))
       message.success('LOGIN SUCSESS')
        dispatch({type:'LOADING',payload:false})
        setTimeout(()=>{
            window.location.href='/'
        },500)
    }catch(error){
        console.log(error)
        message.error('something went wrong')
        dispatch({type:'LOADING',payload:false})

    }
}
export const userRegister=(reqObj)=>async dispatch =>{
    dispatch({type:'LOADING',payload:true})
   
    try{
        
        const response=await axios.post('/register',reqObj) 
        message.success('Register SUCSESSFULLY')
        setTimeout(()=>{
            window.location.href='/login'
        },500)
        
        dispatch({type:'LOADING',payload:false})
        
    }catch(error){ 
        console.log(error)
        message.error('something went wrong')
        dispatch({type:'LOADING',payload:false})

    }
}