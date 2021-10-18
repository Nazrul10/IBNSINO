import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import img from '../../../images/heart-beat.png'
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">
      <img width="50px" src={img} alt="" />
      IBNSINO
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Service</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#pricing">Blog</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    <Nav className="ms-auto">
      <Button className="m-2">Sign In</Button>
      <Button className="m-2">Register</Button>
      {/* <img width="20px" src={img} alt="" /> */}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;