// Importing necessary modules from React and React Bootstrap
import { useContext } from "react";
import "./Products.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { CartContext } from "../cart-context";
import Header from "../Header";

// Functional component representing the Product section
const Product = (props) => {
  // Accessing the CartContext to manage the shopping cart state
  const cartCtx = useContext(CartContext);

  // Array of product objects with their details
  const productsArr = [
    {
      title: "English Chartbusters",
      price: 100,
      imageUrl: "https://source.unsplash.com/300x300/?english",
    },
    {
      title: "Punjabi Beats",
      price: 50,
      imageUrl: "https://source.unsplash.com/300x300/?punjabi",
    },
    {
      title: "Devotional Album",
      price: 70,
      imageUrl: "https://source.unsplash.com/300x300/?devotional",
    },
    {
      title: "Trending Album",
      price: 100,
      imageUrl: "https://source.unsplash.com/300x300/?trending",
    },
    {
      title: "Rock Anthems",
      price: 90,
      imageUrl: "https://source.unsplash.com/300x300/?india",
    },
    {
      title: "Bollywood Melodies",
      price: 80,
      imageUrl: "https://source.unsplash.com/300x300/?bollywood",
    },
    {
      title: "Jazz Classics",
      price: 120,
      imageUrl: "https://source.unsplash.com/300x300/?jazz",
    },
    {
      title: "Instrumental Bliss",
      price: 60,
      imageUrl: "https://source.unsplash.com/300x300/?instrumental",
    },
  ];

  return (
    <>
      {/* Header component for the page */}
      <Header />

      {/* Main content container */}
      <Container>
        {/* Heading for the product section */}
        <h2 className="text-center mt-5">MUSIC</h2>

        {/* Displaying products in a grid layout */}
        <Row
          xs={1}
          md={4}
          className="d-flex justify-content-center align-items-center"
        >
          {productsArr.map((product, index) => (
            // Column for each product
            <Col key={index}>
              {/* Card component to display product details */}
              <Card style={{ width: "18rem", border: "none" }}>
                <Card.Title className="text-center">{product.title}</Card.Title>
                <Card.Body>
                  {/* Image of the product */}
                  <img
                    variant="top"
                    src={product.imageUrl}
                    className="img-fluid"
                    alt={product.title}
                  />
                  {/* Price and Add to Cart button */}
                  <div className="mt-5 d-flex justify-content-between">
                    <Card.Text>${product.price}</Card.Text>
                    <Button
                      onClick={() => cartCtx.addToCart(product)}
                      variant="warning"
                    >
                      Add To Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Button to navigate to the cart */}
        <div className="mt -10 d-flex justify-content-center">
          <Button onClick={props.onShowCart} className="bg-purple text-white">
            See The Cart
          </Button>
        </div>
      </Container>
    </>
  );
};

// Exporting the Product component as the default export
export default Product;
