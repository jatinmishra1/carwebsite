import React,{useEffect,useState} from 'react'
import moment from 'moment'
import {useParams} from 'react-router-dom'
import DefaultLayout from '../components/DefaultLayout'
import {useSelector,useDispatch} from 'react-redux'
import { getAllCars } from '../redux/actions/carsAction'
import Spinner from '../components/Spinner'
import { Button,Row,Col,Divider ,DatePicker,checkbox,Modal} from 'antd';
import {bookCar} from '../redux/actions/bookingActions'
import StripeCheckout from 'react-stripe-checkout';
import AOS from 'aos';
const {RangePicker}=DatePicker
function Booking() {    
    const {cars}= useSelector((state)=>state.carsReducer)
    const {loading}= useSelector((state)=>state.alertsReducer)
    const [car,setcar]=useState({})
    const dispatch=useDispatch()
    const [from,setFrom]=useState()
    const [to,setTo]=useState()
    const[totalhours,setTotalhours]=useState(0)
    const [driver,setDriver]=useState(false)
    const [totalamount,setTotalamount]=useState(0)
    const[showModal,setShowModal]=useState(false)
    const {carid}=useParams();

    // console.log(cars)
   
    useEffect(() => {
        if(cars.length==0){
            dispatch(getAllCars())
        }
        else{
            const newcar=cars.find((o)=>o._id==carid)
            console.log(newcar)
            setcar(newcar);
            // console.log("ram")
            console.log(carid);
           
        }
    
        }, [cars])

        function selectTimeslots(values){
            // console.log(moment(values[0]).format('MMM DD yyyy HH:mm'))
            setFrom(moment(values[0]).format('MMM DD yyyy HH:mm'))
            // console.log(moment(values[1]).format('MMM DD yyyy HH:mm')) 
            setTo(moment(values[1]).format('MMM DD yyyy HH:mm'))
            setTotalhours(values[1].diff(values[0],'hours'))

        }
        function bookNow(){
            const reqObj={
                user:JSON.parse(localStorage.getItem('user'))._id,
                car:car._id,
                totalhours,
                totalamount,
                driverRequired:driver,
                bookedTimeSlots:{
                    from,
                    to
                }
            }
            dispatch(bookCar(reqObj))
            
        }

        function onToken(token){
            console.log(token)
            const reqObj={
                token,
                user:JSON.parse(localStorage.getItem('user'))._id,
                car:car._id,
                totalhours,
                totalamount,
                driverRequired:driver,
                bookedTimeSlots:{
                    from,
                    to
                }
            }
            dispatch(bookCar(reqObj))
        }
    useEffect(()=>{
       setTotalamount((totalhours*10))
       if(driver){
           setTotalamount(totalamount+(30*20))
       }
    },[driver,totalhours])
                        
    return (
        <DefaultLayout>
        {loading &&(<Spinner/>)}
        <Row justify='center' className='d-flex align-items-center' style={{minheight:"90vh"}}>
            <Col lg={10} sm={24} xs={24} className='p-3'>
                <img src={car.image}alt="" className="carimg2 bs1 w-100" data-aos='flip-left' data-aos-duration='1500' />
            </Col>

            <Col lg={10} sm={24} xs={24} className='text-right'>
                <Divider type="horizontal" dashed>Car info</Divider>
                <div style={{ textAlign: "right" }}>
                    <p>{car.name}</p>
                    <p>{car.color} rent per hour</p>
                    <p>{car.model} fuel</p>
                    <p>MAX PERSONS:{car.name}</p>
                </div>
                <Divider type="horizontal" dashed>Select time slots </Divider>
                <RangePicker showTime={{format:'HH:mm'}} format='MMM DD yyyy HH:mm' onChange={selectTimeslots}/>
            <br/>
                <button className='btn-1 mt-2' onClick={()=>{
                    setShowModal(true)
                }}> SEE BOOKED SLOTS</button>
            {from && to && (<div>
                <p>totalhours:{totalhours}</p>
                <p>rent per hour:{car.name}</p>
                {/* <checkbox onChange={(e)=>{
                    if(e.target.checked){
                        setDriver(true)
                    }
                    else{
                        setDriver(false)
                    }
                }}>driver required</checkbox> */}

                <h3>totalamount:{totalamount*100}</h3>
                <StripeCheckout
                shippingAddress
                token={onToken}
                currency='inr'
                amount={totalamount * 100}
        stripeKey="pk_test_51KTfdPSGbY894FYXFRXIhomxqC8Rg9lWIcPAcRBCwbWIfmudLqBqqMDhjf0Tz9OCQpq5sbwWrnP67WddCG6oiXTi00sKtzc3cw"
      >
 <button className='btn1' >BOOK NOW</button>
      </StripeCheckout>
               {/* <button className='btn1' onClick={bookNow}>BOOK NOW</button> */}
            </div>)}
            </Col>
            {/* {car.name &&( <Modal visible={showModal} closable={false} footer={false} title='booked time slots '>
                <div className='p-2'>
                    {car.bookedTimeSlots.map((slot)=>{
                        return <button className='btn1 mt-2'>{slot.from}-{slot.to}</button>
                    })}

                    <div className='text-right mt-5'>
                        <button className='btn-1' onClick={()=>{setShowModal(false)}}>CLOSE</button>
                    </div>
                </div>
        </Modal>)} */}

{car.name && (<Modal visible={showModal} closable={false} footer={false} title='booked time slots '>
               {car && < div className='p-2'>
               
                    {car.bookedTimeSlots.map((slot)=>{
                        
                        return (
                            <>
                        <button className='btn1 mt-2'>{slot.from}-{slot.to}</button>
                        </>
                        )
                    })}

                    <div className='text-right mt-5'>
                        
                        <button className='btn-1' onClick={()=>{setShowModal(false)}}>CLOSE</button>
                    </div>
                </div>}
        </Modal>)}
        </Row>
       
          </DefaultLayout>
        
    )
}

export default Booking



