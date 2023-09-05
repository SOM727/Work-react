import React, { Component } from 'react';
import { Navbar,Nav, NavDropdown } from "react-bootstrap";


export default class Navcompo extends Component {
  render() {
    return (
      <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand to="/home">Myfitness</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="./home">Home</Nav.Link>
      <Nav.Link href="./diet">Diet</Nav.Link>
      <Nav.Link href="./bmi">BMI</Nav.Link>
      <NavDropdown title="Workout" id="collasible-nav-dropdown">
        <NavDropdown.Item href="./legs">Legs</NavDropdown.Item>
        <NavDropdown.Item href="./chest">Chest</NavDropdown.Item>
        <NavDropdown.Item href="./arms">Arms</NavDropdown.Item>
        <NavDropdown.Item href="./back">Back</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/sign">Sign up</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </div>
    )
  }
}

