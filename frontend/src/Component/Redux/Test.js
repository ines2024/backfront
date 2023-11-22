import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getbyid } from './Action';

function Test() {
const id=useParams()
const dispatch=useDispatch()
useEffect(()=>{
dispatch (getbyid(id.id))
},[])
console.log(id)
const product=useSelector(state=>state.product)
console.log(product)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
          {product.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Test;