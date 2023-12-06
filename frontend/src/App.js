import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { DELETE, GET, getbyid } from './Component/Redux/Action';
import Addprod from './Addprod';
import UpdateProduct from './Component/Redux/Updateproduct';
import {Link, Route, Routes} from "react-router-dom"
import Test from './Component/Redux/Test';
import Productlist from './Component/Redux/Productlist';
import Contactus from './Component/Redux/Contactus';
import Navbar1 from './Component/Redux/Navbar';
import Dashbord from './Component/Redux/Dashbord';
import Login from './Component/Redux/Login';
import Register from './Component/Redux/Register';
import Basket from './Component/Redux/Basket';
import Success from './Component/Redux/Success';
import Cancel from './Component/Redux/Cancel';

function App() {
 
  return (
    <div className="App">
      <Navbar1/>
      <Link to={"/products"}>go to home</Link>
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/detail/:id' element={<Test/>}/> 
      <Route path='/products' element={<Productlist/>}/>
      <Route path='/Contactus' element={<Contactus/>}/>
      <Route path='/Dashboard' element={<Dashbord/>}/>
      <Route path='/Basket' element={<Basket/>}/>
      <Route path='/Success' element={<Success/>}/>
      <Route path='/Cancel' element={<Cancel/>}/>

      </Routes>
    
    
    </div>
  );
}

export default App;
