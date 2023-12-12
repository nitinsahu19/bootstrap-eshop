import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from "./cart-context";
import { useContext } from "react";

const NavigationBar = (props) => {
  const cartCtx = useContext(CartContext);

  // calculate the total count of cartItems
  const totalCount = cartCtx.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <>
      {/* Navbar component with a dark background */}
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* Navigation links centered using "mx-auto"  */}
          <Nav className="mx-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/">Store</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>

          <Nav>
            <Button onClick={props.onShowCart} variant="light">
              Cart
            </Button>
            <Container className="text-white bg-transparent">
              {totalCount}
            </Container>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
