import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import {Row ,Col,Form,Input} from 'antd'
import {useDispatch,useSelector} from 'react-redux'
import { userLogin } from '../redux/actions/userActions'
import Spinner from '../components/Spinner'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function Login() {
const dispatch = useDispatch()
const {loading}=useSelector(state=>state.alertsReducer)

  function onFinish(values){
    dispatch(userLogin(values))
    console.log(values)
}
    return (
       <div className='login'>
         {loading &&<Spinner/>}
         <Row gutter={16} className='d-flex align-item-center'>

      <Col lg={16} style={{position:'relative'}}>
        <img
        data-aos='slide-right'
        data-aos-duration='1500'
        src="https://media.istockphoto.com/photos/silhouetted-car-on-black-picture-id511807989?k=20&m=511807989&s=612x612&w=0&h=zXikfifOiAX3l_-At-DARq2j583k_TIYMwSRgZWGOqE=" alt="logoimage" />
      <h1 className='login-logo'>casrstorE</h1>
      </Col>
      <Col lg={8} className='text-left p-5'>
        <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>
          <h1>Login</h1>
          <hr />
      <Form.Item  name='username' label='username' rules={[{required:true}]}>
        <Input/>
      </Form.Item>
      <Form.Item  name='password' label='password' rules={[{required:true}]}>
        <Input/>
      </Form.Item>

      <button className='btn1 mt-2 mb-3'>login</button>
      <br />
    <a href="/register">click here to Register</a>

        </Form>
      </Col>

         </Row>
         
         </div>
    )
}

export default Login
