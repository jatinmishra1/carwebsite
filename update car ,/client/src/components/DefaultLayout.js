import React from 'react'
import { Menu, Dropdown, Button, Space, Row,Col} from 'antd';
import {Link} from 'react-router-dom'
function DefaultLayout(props) {
    
const user=JSON.parse(localStorage.getItem('user'))
const menu = (
  <Menu>
          <Menu.Item>
      <a  href="/">
        Home
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="/userbookings">
        Bookings"
      </a>
    </Menu.Item>
    <Menu.Item>
      <a  href="https://www.aliyun.com">
        Profile
      </a>
    </Menu.Item>
    <Menu.Item onClick={()=>{
        localStorage.removeItem('user');
        window.location.href='/login'
    }}>
      <li>
        LogOut
      </li>
    </Menu.Item>
  </Menu>
);

    return (
        <div>
            <div className="header bs1">
            <Row gutter={16}>
                <Col lg={20} sm={24} xs={24} justify='center'>
                <div className="d-flex justify-content-between">
            <h1 style={{color:'orangered'}}>
              <b>
                <Link to='/'>carstorE</Link>
                </b>
            </h1>
            <Dropdown overlay={menu} placement="bottomCenter">
        <Button>{user.username}</Button>
      </Dropdown>
        </div>
                </Col>
            </Row>
 
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default DefaultLayout
