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


function App() {
 
  return (
    <div className="App">
      <Link to={"/products"}>go to home</Link>
      <Routes>
      <Route path='/detail/:id' element={<Test/>}/> 
      <Route path='/products' element={<Productlist/>}/>
      </Routes>
    <Addprod/>



    </div>
  );
}

export default App;
