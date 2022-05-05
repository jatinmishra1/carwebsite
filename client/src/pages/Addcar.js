import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import {Col,Row,Form,Input} from 'antd'
import { useDispatch ,useSelector} from 'react-redux';
import { addCar } from '../redux/actions/carsAction';
import Spinner from '../components/Spinner';

function Addcar(){
const dispatch = useDispatch()
 
const {loading}=useSelector(state=>state.alertsReducer)

    function onFinish(values){
        values.bookedTimeSlots=[]
        dispatch(addCar(values))
console.log(values);
    }
    return(
        <DefaultLayout>
            {loading &&<Spinner/>}
            <Row justify='center mt-5' >
                <Col lg={12} sm={24}>
                    <Form className='bs1 p-2' layout='vertical' onFinish={onFinish}>
                        <h3>Add new car</h3>
                        <hr/>
                        <Form.Item name="name" label="car name" >
                            <Input/>
                        </Form.Item>
                        <Form.Item name="image" label="image url" >
                            <Input/>
                        </Form.Item>
                        <Form.Item name="rentPerHour" label="Rent per hour" >
                            <Input/>
                        </Form.Item>
                        <Form.Item name="capacity" label="capacity" >
                            <Input/>
                        </Form.Item>
                        <Form.Item name="fuelType" label="Fuel Type" >
                            <Input/>
                        </Form.Item>

            <div className='text-right'>
            <button className='btn1'> ADD CAR</button>
            </div>
                        
                    </Form>
                </Col>
            </Row>
        </DefaultLayout>
    )
}

export default Addcar