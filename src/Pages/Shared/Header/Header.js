import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
            <>
              <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                  <Navbar.Brand href="#home">
                    <img src={logo} height="30px" alt="" />
                  </Navbar.Brand>
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                  </Nav>
                </Container>
              </Navbar>
            </>
          );
};

export default Header;