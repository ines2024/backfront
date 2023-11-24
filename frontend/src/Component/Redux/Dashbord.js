import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE, GET } from './Action'
import UpdateProduct from './Updateproduct'
import Addprod from '../../Addprod'

function Dashbord() {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(GET())
    },[])
    const products=useSelector(state=>state.products)
    console.log(products)
  return (

<div >
<Addprod/>
  <table border={1}>
  <tr>
    <td>Title</td> 
    <td>Description</td> 
    <td>Modify</td>
    <td>Delete</td>
    
  </tr>
  {products.map(e=>
  <tr border="1">
  <td>
    <img style={{width:"100px",height:"100px"}} src={e.image}/>
  </td>
  <td>{e.name}</td>
  <td>
    <UpdateProduct data={e}/>
  </td>
  <td>
  <button onClick={()=>dispatch(DELETE(e._id))}>delete</button>
  </td>
</tr>
    )}
  
  
  </table>
</div>

  )
}

export default Dashbord