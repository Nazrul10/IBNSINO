import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import img from '../../../images/heart-beat.png'
import './Header.css'
const Header = () => {
  const {logOut, users} = useAuth()
    return (
        <Navbar className="zIndex" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">
      <img width="50px" src={img} alt="" />
      IBNSINO
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} className="m-2 nav-style" to="/home">Home</NavLink>
      <NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} className="m-2 nav-style" to="/service">Service</NavLink>
      <NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} className="m-2 nav-style" to="/about">About</NavLink>
      <NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} className="m-2 nav-style" to="/contact">Contact</NavLink>
    </Nav>
  {!users.email? <Nav className="ms-auto">
    <Link to="/login">
    <Button className="m-2">Sign In</Button>
    </Link>
    <Link to="/register">
    <Button className="m-2">Register</Button>
    </Link>
  </Nav>
  :
  <div className="d-flex">
    <Button onClick={logOut}>Log out</Button>
    <h6 className="text-light m-1 p-1">{users.displayName}</h6>
  </div>
  }
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;