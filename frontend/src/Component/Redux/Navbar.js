import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar1() {
  const basket=useSelector(state=>state.basket)
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/products">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/Contactus">Contact us</Nav.Link>
            <Nav.Link href="Login">Login</Nav.Link>
            <Nav.Link href="Register">Register</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Link to ="/Basket">go to basket {basket.length}</Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default Navbar1;