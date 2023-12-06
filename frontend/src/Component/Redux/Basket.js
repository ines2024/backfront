import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import { Removefrombasket } from './Actionbasket';
import axios from 'axios';

function Basket() {
    const dispatch=useDispatch()
    const basket=useSelector(state=>state.basket)
    console.log(basket)
   const paiement =async()=>{
const res=await axios.post("/paiement/create-checkout-session",{basket}).
then(res=>{
    if (res.data.url){
        window.location.href=res.data.url
    }
}
   )
   }
  return (
    <div>
        
     <h1>total price:{
       
        basket.reduce((acc,e)=>
            acc+e.product.price *e.quantity
            
        ,0)
        }</h1>   
        <button onClick={paiement}>payer</button>
    {basket.map(e=>
     <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src={e.product.image} />
     <Card.Body>
       <Card.Title>{e.product.name}</Card.Title>
       <Card.Text>
        quantity:{e.quantity}
       </Card.Text>
       <button onClick={()=>dispatch(Removefrombasket(e.product._id))}>remove from basket</button>
     </Card.Body>
   </Card>
    )}


    </div>
  )
}

export default Basket