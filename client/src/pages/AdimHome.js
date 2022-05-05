import React,{useEffect,useState} from 'react'
import DefaultLayout from '../components/DefaultLayout'
import {useSelector,useDispatch} from 'react-redux'
import { getAllCars ,deletetCar } from '../redux/actions/carsAction'
import {Link} from 'react-router-dom'
import Spinner from '../components/Spinner'
import { Button,Row,Col,Divider ,DatePicker,checkbox,Edit} from 'antd';
import { Popconfirm, message } from 'antd';
import { DeleteOutlined ,EditOutlined } from '@ant-design/icons';

import moment from 'moment'
const {RangePicker}=DatePicker
function AdminHome() {
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
    

    
    
    return (
        <div>
            <DefaultLayout> 
                <Row justify='center' gutter={16} className='mt-2'>
                    <Col lg={20} sm={24}>
               <div className='text-right'>
                   <button className='btn1'> <a href='/addcar'>ADD CAR</a></button>
               </div>
               </Col>
               </Row>
        {loading==true && (<Spinner/>)}


           <Row justify='center' gutter={16} className='mt-5'>
               {
                   totalcars.map((car)=>{
                       return (<Col lg={5} sm={24} xs={24}>
                       <div className='car p-2 bs1'>
                           <img src={car.image} className="carimg"/>
                           <div className='car-content d-flex align-items-center justify-content-between'>
                        <div className='car-content d-flex align-items-center justify-content-between'>
                        <div className='text-left p-2'>
                           <p>{car.name}</p> 
                           <p>{car.model}</p>
                        </div>
                        </div>
                        
                        <div className='mr-4'>
                      <Link to={'/editcar/${car._id}'}><EditOutlined className='mr-3' style={{color:'green',cursor:'pointer'}}/></Link>
                      <Popconfirm
    title="Are you sure to delete this car?"
    onConfirm={()=>{
dispatch(deletetCar({carid:car._id}))
    }}
    okText="Yes"
    cancelText="No"
  >
   <DeleteOutlined 
                    style={{color:"res",cursorm:"pointer"}}
                    />
  </Popconfirm>
                    
                        </div>
                           </div>

                       </div>
                       </Col>)
                   })
               }
           </Row>
            </DefaultLayout>
           
        </div>
    )
}
    

export default AdminHome 
