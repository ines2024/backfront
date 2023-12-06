import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE, GET } from './Action'
import { Link } from 'react-router-dom'
import UpdateProduct from './Updateproduct'
import Card from 'react-bootstrap/Card';
import { Addtobasket } from './Actionbasket'


function Productlist() {
  const [quantity,setQuantity]=useState(0)
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(GET())
    },[])
    const products=useSelector(state=>state.products)
  console.log(products
    )
  return (
    <div style={{display:"flex", gap:"20px"}}>
        {
  products.map(e=>
  <div>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={e.image} />
      <Card.Body>
        <Card.Title>{e.name}</Card.Title>
        <Card.Text>
        description:{e.description}
        price:{e.price}
        </Card.Text>
        <Link to={`/detail/${e._id}`}>go to detail</Link>
        <button onClick={()=>setQuantity(quantity+1)}>+</button>
        <span>{quantity}</span>
        <button onClick={()=>quantity>0?setQuantity(quantity-1):quantity}>-</button>
        <button onClick={()=>dispatch(Addtobasket({product:e,quantity}))}>Addtobasket</button>
      </Card.Body>
    </Card>
    

    </div>)

}

    </div>
  )
}

export default Productlist