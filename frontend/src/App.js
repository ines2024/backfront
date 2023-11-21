import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GET } from './Component/Redux/Action';
import Addprod from './Addprod';

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(GET())
  },[])
  const products=useSelector(state=>state.products)
console.log(products
  )
  return (
    <div className="App">
    <Addprod/>


{
  products.map(e=>
  <div>
    <img src={e.image}/>
    <h1> {e.name}</h1>
    <p> {e.description}</p>
    <br></br>
    <span> {e.price}</span>
    </div>)
}

    </div>
  );
}

export default App;
