import React ,{useState,useEffect}from 'react'
import DefaultLayout from '../components/DefaultLayout'
import {Col,Row,Form,Input} from 'antd'
import { useDispatch ,useSelector} from 'react-redux';
import { addCar, getAllCars } from '../redux/actions/carsAction';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';
import { addCar,getAllCars ,editCar} from '../redux/actions/carsAction';
function EditCar(){
    const {cars}=useSelector(state=>state.carsReducers)
    const[car,setcar]=useState()
    const [totalcars,setTotalcars]=useState([])
    const {carid}=useParams();
const dispatch = useDispatch()
useEffect(() => {
    if(cars.length==0){
        dispatch(getAllCars())
    }
    else{
        setTotalcars(cars)
        setcar(cars.find(o=>o._id===carid))
        console.log(carid);
    }

    }, [totalcars])
const {loading}=useSelector(state=>state.alertsReducer)

    function onFinish(values){
        // values.bookedTimeSlots=[]
        values._id=car._id
        dispatch(editCar(values))
console.log(values);
    }
    return(
        <DefaultLayout>
            {loading &&<Spinner/>}
            <Row justify='center mt-5' >
                <Col lg={12} sm={24}>
                    {totalcars.length>0 &&(<Form initialValues={car} className='bs1 p-2' layout='vertical' onFinish={onFinish}>
                        <h3>EDIT CAR ITEMS</h3>
                        <hr/>
                        <Form.Item name="name" label="car name" rules={[(required)]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="image" label="image url" rules={[(required)]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="rentPerHour" label="Rent per hour" rules={[(required)]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="capacity" label="capacity" rules={[(required)]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="fuelType" label="Fuel Type" rules={[(required)]}>
                            <Input/>
                        </Form.Item>

            <div className='text-right'>
            <button className='btn1'> ADD CAR</button>
            </div>
                        
                    </Form>)}
                </Col>
            </Row>
        </DefaultLayout>
    )
}

export default EditCar