// import react,{useState,useEffect} from 'react';
// import DefaultLayout from '../components/DefaultLayout';
// import {useDispatch,useSelector} from 'react-redux'
// import {getAllBookings }from '../redux/actions/bookingActions' 
// import{Col,Row} from 'antd'
// import moment from 'moment';
// import Spinner from '../components/Spinner'
// import 'aos/dist/aos.css'; // You can also use <link> for styles

// function UserBookings(){
//     const dispatch= useDispatch()
//     const {bookings}=useSelector((state)=>{state.bookingsReducer})
//     const {loading}=useSelector((state)=>{state.alertsReducer})
//     const user=JSON.parse(localStorage.getItem('user'))
//     useEffect(()=>{
//         dispatch(getAllBookings())
//     })
//     return(
//     <DefaultLayout> 
//         {loading && (<Spinner/>)}
//         <h3 className='text-center mt-2'>MY BOOKINGS</h3>

//         <Row justify='center' gutter={16}>
//         <Col lg={16} sm={24}>
//         {
//             bookings.filter(o=>o.user==user._id.map((booking)=>{
//                return (<Row justify="center" gutter={16} className='mt-3 bs1 m-2 text-left'>
//                 <Col lg={6} sm={24}>
//                 <p><b>{booking.car.name}</b></p>
//                 <p>total hours:{booking.totalhours}</p>
//                 <p>rent per hours:{booking.car.name}</p>
//                 <p>total amount:{booking.totalamount}</p>
//                 </Col>
//                 <Col lg={12} sm={24}>
//                 <p>transactionId:{booking.transactionId}</p>
//                 <p>FRom:{booking.bookedTimeSlots.from}</p>
//                 <p>To:{booking.bookedTimeSlots.to}</p>
//                 <p>Date of Booknig :{moment(booking.createdAt).format('MMM DD yyyy')}</p>
//                 </Col>
//                 <Col lg={6} sm={24} className='text-right'>
//                     <img  style={{borderRadius:3}} src={booking.car.image} height="140" className='p-2'/>
//                 </Col>
//                 </Row>)
//             })
//             )}
        
//         </Col>
//         </Row>
//     </DefaultLayout>
//     )
// }

// export default UserBookings

import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from "../redux/actions/bookingActions";
import { Col, Row } from "antd";
import Spinner from '../components/Spinner';
import moment from "moment";
function UserBookings() {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookingsReducer);
  const {loading} = useSelector((state) => state.alertsReducer);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    dispatch(getAllBookings());
  }, []);

  return (
    <DefaultLayout>
        {loading && (<Spinner />)}
      <h3 className="text-center mt-2">My </h3>
    
      <Row justify="center" gutter={16}>
        <Col lg={16} sm={24}>
         
            {/* {bookings.filter(o=>o.user==user._id).map((booking) => {
             return <Row gutter={16} className="bs1 mt-3 text-left">
                <Col lg={6} sm={24}>
                    <p><b>{booking.car.name}</b></p>
                    <p>Total hours : <b>{booking.totalHours}</b></p>
                    <p>Rent per hour : <b>{booking.car.rentPerHour}</b></p>
                    <p>Total amount : <b>{booking.totalAmount}</b></p>
                </Col>

                <Col lg={12} sm={24}>
                <p>Transaction Id : <b>{booking.transactionId}</b></p>
                <p>From: <b>{booking.bookedTimeSlots.from}</b></p>
                <p>To: <b>{booking.bookedTimeSlots.to}</b></p>
                <p>Date of booking: <b>{moment(booking.createdAt).format('MMM DD yyyy')}</b></p>
                </Col>

                <Col lg={6} sm={24} className='text-right'>
                    <img style={{borderRadius:5}} src={booking.car.image}  height="140" className="p-2"/>
                </Col>
              </Row>;
            })} */}


            {bookings.map((booking)=>{
              return(
                <>
                <h3>{booking.car.name}</h3>
                </>
              )
            })}
          
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default UserBookings;