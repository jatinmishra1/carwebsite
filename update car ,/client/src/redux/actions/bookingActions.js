import axios from 'axios';
import { message } from 'antd';

export const bookCar=(reqObj)=>async (dispatch)=>{
    
     dispatch({type:'LOADING',payload:true})
   
    try{
     
        await axios.post("/bookcar",reqObj) 
        message.success('your car booked successfully')
        setTimeout(() => {
            window.location.href="/userbookings"
        }, 1000);
     
      
        
        // dispatch({type:'GET_ALL_CARS',payload:response.data})
        dispatch({type:'LOADING',payload:false})
    }catch(error){
        console.log(error)
        console.log("nhi ho payua gya")
        dispatch({type:'LOADING',payload:false})
        message.error('something went wrong please try later')

    }

}




export const getAllBookings=()=>async (dispatch)=>{
    
     dispatch({type:'LOADING',payload:true})
   
    try{
     
        const response=await axios.get('/getallbookings') 
        console.log(response); 
        
        dispatch({type:'GET_ALL_BOOKINGS',payload:response.data})
        dispatch({type:'LOADING',payload:false})
    }catch(error){
        console.log(error)
        dispatch({type:'LOADING',payload:false})

    }

}