const express=require('express');
const router =express.Router();
const Booking=require('../models/bookingModel')
const Car=require('../models/carModel')
const { v4: uuidv4 } = require('uuid');
const stripe=require('stripe')('sk_test_51KTfdPSGbY894FYXHZ2IEqe9e5V3811fTENweyJBvO8IMV2LRvuRyEidXqAshJjB6oRvmWKKln13dCV8unZDBsy200wtU9rfRY')

router.post('/bookcar',async(req,res)=>{
    console.log("in book car")
    // req.body.transactionId='1234'
    const {token}=req.body

    try{
                const customer=await stripe.customer.create({
            email:token.email,
            source:token.id
        })

               const payment=await stripe.charges.create({
            amount:req.body.totalamount*100,
            currency:"inr",
            customer:customer.id,
            receipt_email:token.email
        },{
            idempotencyKey:uuidv4()
        })
             if(payment){
                 req.body.transactionId=payment.source.id
                const newbooking=new Booking(req.body);
                await newbooking.save();
                const car=await Car.findOne({_id:req.body.car})
                car.bookedTimeSlots.push(req.body.bookedTimeSlots)
                await car.save()
                console.log(req.body.car)
                res.send ("booked successfully")
        }
        else{
            console.log("rrrrrrr")
            return res.status(400).json(error)
        }
        // const newbooking=new Booking(req.body);
        // await newbooking.save();
        // const car=await Car.findOne({_id:req.body.car})
        // car.bookedTimeSlots.push(req.body.bookedTimeSlots)
        // await car.save()
        // console.log(req.body.car)
        // res.send ("booked successfully")

        
    }catch(e){
        return res.status(400).json("error occured")
    }
    // try{

    //     const customer=await stripe.customer.create({
    //         email:token.email,
    //         source:token.id
    //     })

    //     const payment=await stripe.charges.create({
    //         amount:req.body.totalamount*100,
    //         customer:customer.id,
    //         receipt_email:token.email
    //     },{
    //         idempotencyKey:uuidv4
    //     })

    //     if(payment){
    //         req.body.transactionId=payment.source.id
    //         const newbooking =  new Booking(req.body)
    //         await newbooking.save()
    //         const car=await car.findOne({_id:req.body.car})
    //         car.bookedTimeSlots.push(req.body.bookedTimeSlots)
    //      await car.save()
    //         res.send("your booking is successfull")
    //     }
    //     else{
    //         return res.status(400).json(error)
    //     }
    // }catch(error){
    //     console.log(error)
    //     return res.status(400).json(error)
    // }
})

router.get('/getallbookings',(req,res)=>{
    console.log("getallbooking")
try{
const bookings = Booking.find().populate('cars');
res.send(bookings)
}catch(e){
return res.status(400).json(error)
}
})

module.exports=router