import React from 'react';
import './Header.css'
import { Navbar, Container,Nav, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const {user,logOut}=useAuth();
  
    return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand href="#home">HealthCare</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
    <Nav className='navbar'>
      <Nav.Link className="navlink" as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link className="navlink" as={HashLink} to='/home#about'>About</Nav.Link>
      <Nav.Link className="navlink" as={HashLink} to='/home#services'>Services</Nav.Link>
      <Nav.Link className="navlink" as={HashLink} to='/home#doctors'>Doctors</Nav.Link>
      <Nav.Link><h6 className='me-2 m-0'>{user.displayName}</h6></Nav.Link>
      <Nav.Link>{user.email ? <h6 className="logout m-0" onClick={logOut}>Sign Out</h6> : <NavLink className="navlink" to='/signin'>Sign In</NavLink>}</Nav.Link>
     
    </Nav>
    <Nav>
 
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    );
};

export default Header;