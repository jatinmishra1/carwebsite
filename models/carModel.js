const mongoose = require("mongoose");
const carSchema=new mongoose.Schema({
    name:{
        type:String,
        
    },
    bookedTimeSlots : [
        {
            from : {type : String , required : true},
            to : {type : String , required : true}
        }
    ] , 
    company:{
        type:String,
        
    },
    color:{
        type:String,
        
    },
    model:{
        type:String,
      
    },
    image:{
        type:String
    },
    capacity : {type : Number , required : true},
    fuelType : {type : String , required : true} , 
    rentPerHour : {type : Number , required : true}
},{timestamps:true})

const carDetails=new mongoose.model("carDetail",carSchema)
module.exports=carDetails;