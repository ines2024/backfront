import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE, GET } from './Action'
import { Link } from 'react-router-dom'
import UpdateProduct from './Updateproduct'

function Productlist() {
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(GET())
    },[])
    const products=useSelector(state=>state.products)
  console.log(products
    )
  return (
    <div>
        {
  products.map(e=>
  <div>
    <img src={e.image}/>
    <h1>{e.name}</h1>
    <p>{e.description}</p>
    <br></br>
    <span>{e.price}</span>
    
    <Link to={`/detail/${e._id}`}>go to detail</Link>

    </div>)

}

    </div>
  )
}

export default Productlist