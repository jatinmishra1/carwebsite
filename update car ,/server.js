const express=require('express');
const app=express();
const port=process.env.PORT||5000;
const dbConnection=require('./db')
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello world");
})


app.use('/' , require('./routes/carRoute'))
app.use('/',require('./routes/usersRoute'))
app.use('/',require('./routes/bookingsRoute'))


// app.listen(port,()=>{
//     console.log(`server is running on port ${port}`);
// })




app.listen(port,()=>{
    console.log(`server is running on port number ${port}`)
}) 