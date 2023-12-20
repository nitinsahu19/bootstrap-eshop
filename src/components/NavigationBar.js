// Importing necessary components and styles from the React Bootstrap library
import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// Importing React hooks for state management
import { CartContext } from "./cart-context";
import { useContext } from "react";
import AuthContext from "./auth-context";

// Functional component for the navigation bar
const NavigationBar = (props) => {
  // Using React Context to access cart data
  const cartCtx = useContext(CartContext);

  // Using React Context to access authentication data
  const authCtx = useContext(AuthContext);

  // Calculating the total count of items in the cart
  const totalCount = cartCtx.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      {/* Navbar component with a dark background */}
      <Navbar bg="dark" variant="dark">
        {/* Container to structure the navigation bar */}
        <Container>
          {/* Navigation links centered using "mx-auto" */}
          <Nav className="mx-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/">Store</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>

          {/* Container for additional navigation items */}
          <Nav>
            {/* Button to trigger the display of the cart */}
            <Button onClick={props.onShowCart} variant="light">
              Cart
            </Button>

            {/* Container to display the total count of items in the cart */}
            <Container className="text-white bg-transparent">
              {totalCount}
            </Container>

            {/* Navigation link and button for authentication */}
            <Nav.Link
              href="/login"
              className="border border-2px solid text-white bg-primary btn"
            >
              {/* Conditional rendering based on user authentication status */}
              {!authCtx.isLoggedIn && <Nav.Link href="/login">Login</Nav.Link>}
              {authCtx.isLoggedIn && (
                <button
                  style={{ color: "white", background: "black" }}
                  onClick={() => {
                    authCtx.logout();
                  }}
                >
                  Logout
                </button>
              )}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

// Exporting the NavigationBar component as the default export
export default NavigationBar;
