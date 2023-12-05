import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);

  const cartItems = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
  ];

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Open Cart
      </Button>

      <Modal show={showCart} onHide={handleClose} dialogClassName="cart-modal">
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {cartItems.map((item, index) => (
              <ListGroup.Item key={index}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="img-fluid"
                />
                {item.title}: Price: ${item.price}, Quantity: {item.quantity}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Proceed to Checkout
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default Cart;
