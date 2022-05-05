const express=require('express');

const router =express.Router();
const carDeatils=require("../models/carModel")


router.get('/cars',async(req,res)=>{
    try{
        const getCars=await carDeatils.find({})
        res.send(getCars) 
    }catch(e){ 
        res.status(400).send(e); 
    }  

})

//individual getting get request 

router.get('/cars/:id',async(req,res)=>{
    try{
        const _id=req.params.id
        const getCarById=await carDeatils.findById({_id})
        res.send(getCarById)
    }catch(e){
        res.status(400).send(e);
    }

})

//we can updae our database by usnig patch function
router.patch('/cars/:id',async(req,res)=>{
    try{
        const _id=req.params.id
        const getCarById=await carDeatils.findByIdAndUpdate(_id,req.body,{
            new:true
        })
        res.send(getCarById)
    }catch(e){
        res.status(500).send(e);
    }

})

//delete request
router.delete('/cars/:id',async(req,res)=>{
    try{
        const _id=req.params.id
        const getCarById=await carDeatils.findByIdAndDelete(_id)
        res.send(getCarById)
    }catch(e){
        res.status(500).send(e);
    }

})

router.post('/addcar',async(req,res)=>{
try{
const newcar=new carDeatils(req.body)
await newcar.save()
res.send('car added success')
}
catch(e){
return es.statu(400).json(e);
}
})
ody
router.post('/editcar',async(req,res)=>{
    try{
    const car=await carDeatils.findOne({_id:req.body._id})
    car.name=req.body.name
    car.image=req.body.image
    car.fuelType=req.body.fuelType
    car.rentPerHour=req.body.rentPerHour
    car.capacity=req.body.capacity
    await car.save()
    res.send('car edited success')
    }
    catch(e){
    return es.statu(400).json(e);
    }
    })
module.exports=router;