import React, {Component} from 'react';
import Logo from './img/GoFlix.png';
import Container from "react-bootstrap/Container";
import {Navbar, Nav, Button} from "react-bootstrap/";
import 'bootstrap/dist/css/bootstrap.min.css';


export class Header extends Component{
    render(){
        return(
          
          <div className="fixed-top">
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
           <Container>
            <Navbar.Brand href="#home">
              <img
                src={Logo}
                width="130"
                height="37"
                className="d-inline-block align-top mr-5"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                <Nav className="ml-5">
                  <Nav.Link href="#home">HOME</Nav.Link>
                  <Nav.Link href="#home">CATALOG</Nav.Link>
                  <Nav.Link href="#home">PRICING</Nav.Link>
                  <Nav.Link href="#home">HELP</Nav.Link>
                  <Nav.Link href="#home">ABOUT</Nav.Link>
                </Nav>
              </Navbar.Collapse>

              <Navbar.Collapse className="justify-content-end">
              <Button variant="dark" className="btn px-4">SIGN IN</Button>
              </Navbar.Collapse>

           </Container>
           </Navbar>
          </div>
          
                  )
              }
          }

export default Header;