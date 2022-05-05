import React,{useEffect,useState} from 'react'
import DefaultLayout from '../components/DefaultLayout'
import {useSelector,useDispatch} from 'react-redux'
import { getAllCars } from '../redux/actions/carsAction'
import {Link} from 'react-router-dom'
import Spinner from '../components/Spinner'
import { Button,Row,Col,Divider ,DatePicker,checkbox} from 'antd';
import moment from 'moment'
const {RangePicker}=DatePicker
function Home() {
    const {cars}= useSelector((state)=>state.carsReducer)
    const {loading}= useSelector((state)=>state.alertsReducer)
    const [totalcars,setTotalcars]=useState([])
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(getAllCars())
    }, [])
    

    useEffect(() => {
        setTotalcars(cars)
    }, [cars])
    

    function setFilter(values){

        var selectedFrom = moment(values[0] , 'MMM DD yyyy HH:mm')
        var selectedTo = moment(values[1] , 'MMM DD yyyy HH:mm')

        var temp=[]

        for(var car of cars){

              if(car.bookedTimeSlots.length == 0){
                  temp.push(car)
              }
              else{

                   for(var booking of car.bookedTimeSlots) {

                       if(selectedFrom.isBetween(booking.from , booking.to) ||
                       selectedTo.isBetween(booking.from , booking.to) || 
                       moment(booking.from).isBetween(selectedFrom , selectedTo) ||
                       moment(booking.to).isBetween(selectedFrom , selectedTo)
                       )
                       {

                       }
                       else{
                           temp.push(car)
                       }

                   }

              }

        }


        setTotalcars(temp)


    }
    
    return (
        <div>
            <DefaultLayout> 

                <Row className='mt-3'>
                    <Col lg={20} sm={24} className='d-flex justify-content-left'>
                        <RangePicker showTime={{format:'HH:mm'}} format='MMM DD yyyy HH:mm' onChange={setFilter}/>
                    </Col>
                </Row>
        {loading==true && (<Spinner/>)}


           <Row justify='center' gutter={16} className='mt-5'>
               {
                   totalcars.map(car=>{
                       return <Col lg={5} sm={24} xs={24}>
                       <div className='car p-2 bs1'>
                           <img src={car.image} className="carimg"/>
                           <div className='car-content d-flex align-items-center justify-content-between'>

                        <div className='text-left p-2'>
                           <p>{car.name}</p> 
                           <p>{car.model}</p>
                        
                        </div>

                        <div>
                        <button className='btn1 mr-2'><Link to={`/booking/${car._id}`}>BOOK NOW</Link></button>
                        </div>
                           </div>

                       </div>
                       </Col>
                   })
               }
           </Row>
            </DefaultLayout>
           
        </div>
    )
}
    

export default Home 
