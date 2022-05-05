const mongoose = require("mongoose");
const carSchema=new mongoose.Schema({
    name:{
        type:String,
        
    },
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
    }
})

const carDetails=new mongoose.model("carDetail",carSchema)
module.exports=carDetails;