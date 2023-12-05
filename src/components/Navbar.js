// Importing necessary components and styles from react-bootstrap
import { Nav } from "react-bootstrap";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Cart from "./Cart";
import "bootstrap/dist/css/bootstrap.min.css";

const NavigationBar = (props) => {
  return (
    <>
      {/* Navbar component with a dark background */}
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* Navigation links centered using "mx-auto"  */}
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Store">Store</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
          </Nav>

          <Nav>
            <Button onClick={props.onShowCart} variant="light">
              Cart
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
