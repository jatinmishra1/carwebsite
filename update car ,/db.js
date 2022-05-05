const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect('mongodb+srv://jatinmishra:jatinmishra@cluster0.7iaiw.mongodb.net/car',{useUnifiedTopology:true})
    const connection=mongoose.connection
    connection.on('connected',()=>{
        console.log("mongodb connection successfull")
    })
    connection.on('error',()=>{
        console.log("mongodb connection not successfull")
    })
}
connectDB();
mongoose.car=mongoose.createConnection('mongodb+srv://jatinmishra:jatinmishra@cluster0.7iaiw.mongodb.net/car',{useUnifiedTopology:true})

mongoose.carDetails=mongoose.createConnection()
module.exports=mongoose;