import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter, Routes, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Booking from './pages/Booking'
import 'antd/dist/antd.css';
import UserBookings from './pages/UserBookings';
import Addcar from './pages/Addcar';
import AdminHome from './pages/AdimHome';
import EditCar from './pages/EditCar';



function App() {
  const user=localStorage.getItem('user')
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {!user &&
        (
          <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          </>
        )}
        {user && (
          <>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/booking/:carid" element={<Booking />} />
          <Route exact path="/userbookings" element={<UserBookings />} />
          <Route exact path="/aadcar" element={<Addcar/>} />
          <Route exact path="/editcar/:carid" element={<EditCar/>} />
          <Route exact path="/admin" element={<AdminHome/>} />
          </>
        )
        }
        <Route path="*" element={<Navigate to={user?"/":"/login"} />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;


