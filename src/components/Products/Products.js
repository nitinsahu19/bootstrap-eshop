import { useContext, useEffect } from "react";
import "./Products.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { CartContext } from "../cart-context";

const Product = (props) => {
  const cartCtx = useContext(CartContext);

  const productsArr = [
    {
      title: "English Chartbusters",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Punjabi Beats",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Devotional Album",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Trending Album",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <Container>
      <h2 className="text-center mt-5">MUSIC</h2>
      <Row
        xs={1}
        md={4}
        className="d-flex justify-content-center align-items-center"
      >
        {productsArr.map((product, index) => (
          <Col key={index}>
            <Card style={{ width: "18rem", border: "none" }}>
              <Card.Title className="text-center">{product.title}</Card.Title>
              <Card.Body>
                <img
                  variant="top"
                  src={product.imageUrl}
                  style={{ transition: "transform 0.3s", width: "100%" }}
                  className="img-fluid"
                />
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
      <div className="mt -10 d-flex justify-content-center">
        <Button onClick={props.onShowCart} className="bg-purple text-white">
          See The Cart
        </Button>
      </div>
    </Container>
  );
};

export default Product;
