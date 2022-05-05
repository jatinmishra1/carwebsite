import axios from 'axios';


export const getAllCars=()=>async (dispatch)=>{
    
     dispatch({type:'LOADING',payload:true})
   
    try{
     
        const response=await axios.get('/cars') 
        console.log(response); 
        
        dispatch({type:'GET_ALL_CARS',payload:response.data})
        dispatch({type:'LOADING',payload:false})
    }catch(error){
        console.log(error)
        dispatch({type:'LOADING',payload:false})

    }

}

export const addCar=(reqObj)=>async dispatch=>{
    dispatch({type:'LOADING',payload:true})
   
    try{
     
        await axios.post('/addcar',reqObj) 
        dispatch({type:'LOADING',payload:false})
        message.success("new car added succfully")
        setTimeout(() => {
            window.location.href='/admin'
        }, 500);
    }catch(error){
        console.log(error)
        dispatch({type:'LOADING',payload:false})

    }
}
export const editCar=(reqObj)=>async dispatch=>{
    dispatch({type:'LOADING',payload:true})
   
    try{
     
        await axios.post('/editcar',reqObj) 
        dispatch({type:'LOADING',payload:false})
        message.success("car updated succfully")
        setTimeout(() => {
            window.location.href='/admin'
        }, 500);
    }catch(error){
        console.log(error)
        dispatch({type:'LOADING',payload:false})

    }
}
export const deletetCar=(reqObj)=>async dispatch=>{
    dispatch({type:'LOADING',payload:true})
   
    try{
     
        await axios.post('/deletecar',reqObj) 
        dispatch({type:'LOADING',payload:false})
        message.success("car deleted succfully")
        setTimeout(() => {
            window.location.reload()
        }, 500);
    }catch(error){
        console.log(error)
        dispatch({type:'LOADING',payload:false})

    }
}

